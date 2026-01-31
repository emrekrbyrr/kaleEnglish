from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from models import ContactSubmission, ContactSubmissionCreate
from email_service import send_contact_email
from storage import build_contact_storage, StorageError

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logger = logging.getLogger(__name__)

# Storage (MongoDB or DynamoDB)
try:
    contact_storage = build_contact_storage()
except StorageError as e:
    # Fail fast with a readable error in logs
    raise RuntimeError(f"Storage configuration error: {e}") from e

# Create the main app
app = FastAPI(title="KaleLift API", version="1.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check
@api_router.get("/")
async def root():
    """API health check"""
    return {"message": "KaleLift API", "status": "operational"}

@app.on_event("startup")
async def startup_storage():
    await contact_storage.startup()


# Contact form endpoint - the only endpoint that needs database
@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact_form(contact: ContactSubmissionCreate):
    """Submit contact form and send email"""
    contact_dict = contact.dict()
    contact_obj = ContactSubmission(**contact_dict)
    
    # Save to database
    await contact_storage.save_contact(contact_obj.dict())
    
    # Send email notification
    try:
        email_sent = send_contact_email(
            name=contact.name,
            email=contact.email,
            phone=contact.phone or "",
            company=contact.company or "",
            message=contact.message
        )
        
        if email_sent:
            logger.info(f"Contact form email sent successfully to {contact.email}")
        else:
            logger.warning(f"Failed to send contact form email for {contact.email}")
    except Exception as e:
        logger.error(f"Error sending contact email: {str(e)}")
        # Don't fail the request if email fails, just log it
    
    return contact_obj


# Get all contact submissions (for admin use - optional)
@api_router.get("/contacts")
async def get_contacts():
    """Get all contact submissions (admin endpoint)"""
    contacts = await contact_storage.list_contacts(limit=1000)
    return contacts


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    # If you need cookies/credentials, set CORS_ORIGINS to explicit origins.
    allow_credentials=False,
    allow_origins=[o.strip() for o in os.environ.get("CORS_ORIGINS", "*").split(",")] if os.environ.get("CORS_ORIGINS") else ["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

@app.on_event("shutdown")
async def shutdown_db_client():
    """Close storage connections on shutdown"""
    await contact_storage.shutdown()
