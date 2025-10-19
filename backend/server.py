from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import ContactSubmission, ContactSubmissionCreate
from email_service import send_contact_email

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection (only for contact form storage)
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(title="Kale Platform API", version="1.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check
@api_router.get("/")
async def root():
    """API health check"""
    return {"message": "Kale Platform API", "status": "operational"}


# Contact form endpoint - the only endpoint that needs database
@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact_form(contact: ContactSubmissionCreate):
    """Submit contact form and send email"""
    contact_dict = contact.dict()
    contact_obj = ContactSubmission(**contact_dict)
    
    # Save to database
    await db.contacts.insert_one(contact_obj.dict())
    
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
    contacts = await db.contacts.find({}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
    return contacts


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    """Close database connection on shutdown"""
    client.close()
