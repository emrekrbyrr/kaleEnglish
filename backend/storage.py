import os
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

import boto3

try:
    from motor.motor_asyncio import AsyncIOMotorClient  # type: ignore
except Exception:  # pragma: no cover
    AsyncIOMotorClient = None  # type: ignore


def _to_utc_iso(dt: datetime) -> str:
    """
    Convert datetime to a stable UTC ISO string for lexicographic sorting.
    Example: 2026-01-05T12:34:56.123456Z
    """
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    else:
        dt = dt.astimezone(timezone.utc)
    return dt.isoformat().replace("+00:00", "Z")


class StorageError(RuntimeError):
    pass


class ContactStorage:
    async def save_contact(self, contact: Dict[str, Any]) -> None:  # pragma: no cover
        raise NotImplementedError

    async def list_contacts(self, limit: int = 1000) -> List[Dict[str, Any]]:  # pragma: no cover
        raise NotImplementedError

    async def shutdown(self) -> None:  # pragma: no cover
        return


class MongoContactStorage(ContactStorage):
    def __init__(self, mongo_url: str, db_name: str):
        if AsyncIOMotorClient is None:
            raise StorageError("motor is not available but Mongo storage was selected")
        self._client = AsyncIOMotorClient(mongo_url)
        self._db = self._client[db_name]

    async def save_contact(self, contact: Dict[str, Any]) -> None:
        await self._db.contacts.insert_one(contact)

    async def list_contacts(self, limit: int = 1000) -> List[Dict[str, Any]]:
        return await self._db.contacts.find({}, {"_id": 0}).sort("createdAt", -1).to_list(limit)

    async def shutdown(self) -> None:
        self._client.close()


class DynamoDbContactStorage(ContactStorage):
    """
    DynamoDB single-table design for low-cost contact storage.

    Table keys:
      - pk (partition key): constant "CONTACT"
      - sk (sort key): "<createdAtISO>#<id>"

    This enables ordered queries by createdAt.
    """

    def __init__(self, table_name: str, region_name: Optional[str] = None):
        region = region_name or os.environ.get("AWS_REGION") or os.environ.get("AWS_DEFAULT_REGION")
        if not region:
            raise StorageError("AWS region is missing (set AWS_REGION)")
        self._table = boto3.resource("dynamodb", region_name=region).Table(table_name)

    async def save_contact(self, contact: Dict[str, Any]) -> None:
        created_at_raw = contact.get("createdAt")
        if isinstance(created_at_raw, datetime):
            created_at_iso = _to_utc_iso(created_at_raw)
        else:
            # If Pydantic already produced a string, keep it but normalize if possible.
            created_at_iso = str(created_at_raw) if created_at_raw is not None else _to_utc_iso(datetime.utcnow())

        contact_id = str(contact.get("id") or "")
        if not contact_id:
            raise StorageError("Contact is missing id")

        item: Dict[str, Any] = {
            "pk": "CONTACT",
            "sk": f"{created_at_iso}#{contact_id}",
            **contact,
            "createdAt": created_at_iso,
        }
        self._table.put_item(Item=item)

    async def list_contacts(self, limit: int = 1000) -> List[Dict[str, Any]]:
        resp = self._table.query(
            KeyConditionExpression=boto3.dynamodb.conditions.Key("pk").eq("CONTACT"),
            ScanIndexForward=False,
            Limit=limit,
        )
        items = resp.get("Items", [])
        # Strip internal keys for API response
        for it in items:
            it.pop("pk", None)
            it.pop("sk", None)
        return items


def build_contact_storage() -> ContactStorage:
    """
    Chooses storage backend based on env:
      - STORAGE_BACKEND=dynamodb (default) -> requires DYNAMODB_TABLE + AWS_REGION
      - STORAGE_BACKEND=mongo -> requires MONGO_URL + DB_NAME
    """
    backend = (os.environ.get("STORAGE_BACKEND") or "dynamodb").strip().lower()

    if backend == "mongo":
        mongo_url = os.environ.get("MONGO_URL")
        db_name = os.environ.get("DB_NAME")
        if not mongo_url or not db_name:
            raise StorageError("Mongo selected but MONGO_URL/DB_NAME are missing")
        return MongoContactStorage(mongo_url=mongo_url, db_name=db_name)

    if backend == "dynamodb":
        table = os.environ.get("DYNAMODB_TABLE")
        if not table:
            raise StorageError("DynamoDB selected but DYNAMODB_TABLE is missing")
        return DynamoDbContactStorage(table_name=table)

    raise StorageError(f"Unknown STORAGE_BACKEND: {backend}")

