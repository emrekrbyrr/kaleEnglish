"""
One-off migration script: MongoDB contacts -> DynamoDB.

Usage:
  export MONGO_URL="..."
  export DB_NAME="..."
  export AWS_REGION="eu-central-1"
  export DYNAMODB_TABLE="kale-contact"
  python migrate_contacts_mongo_to_dynamodb.py
"""

import os
from datetime import datetime

from motor.motor_asyncio import AsyncIOMotorClient

from storage import DynamoDbContactStorage


def _jsonable(v):
    if isinstance(v, datetime):
        return v
    return v


async def main() -> None:
    mongo_url = os.environ["MONGO_URL"]
    db_name = os.environ["DB_NAME"]
    table_name = os.environ["DYNAMODB_TABLE"]
    region = os.environ.get("AWS_REGION") or os.environ.get("AWS_DEFAULT_REGION")
    if not region:
        raise RuntimeError("Missing AWS_REGION")

    mongo = AsyncIOMotorClient(mongo_url)
    db = mongo[db_name]
    dynamo = DynamoDbContactStorage(table_name=table_name, region_name=region)

    cursor = db.contacts.find({}, {"_id": 0}).sort("createdAt", 1)
    count = 0
    async for doc in cursor:
        # ensure dict is compatible with our writer
        doc = {k: _jsonable(v) for k, v in doc.items()}
        await dynamo.save_contact(doc)
        count += 1

    mongo.close()
    print(f"Migrated {count} contacts.")


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())

