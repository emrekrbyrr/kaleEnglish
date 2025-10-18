from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import (
    Company, Product, Service, Testimonial, Client,
    ContactSubmission, ContactSubmissionCreate, RentalInfo
)
from typing import List

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Company endpoints
@api_router.get("/company")
async def get_company():
    """Get company information"""
    company = await db.company.find_one({}, {"_id": 0})
    if not company:
        raise HTTPException(status_code=404, detail="Company information not found")
    return company


# Product endpoints
@api_router.get("/products", response_model=List[Product])
async def get_products():
    """Get all active products"""
    products = await db.products.find({"isActive": True}, {"_id": 0}).sort("order", 1).to_list(100)
    return products


@api_router.get("/products/{slug}")
async def get_product_by_slug(slug: str):
    """Get single product by slug"""
    product = await db.products.find_one({"slug": slug, "isActive": True}, {"_id": 0})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


# Service endpoints
@api_router.get("/services", response_model=List[Service])
async def get_services():
    """Get all active services"""
    services = await db.services.find({"isActive": True}, {"_id": 0}).sort("order", 1).to_list(100)
    return services


# Testimonial endpoints
@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    """Get all active testimonials"""
    testimonials = await db.testimonials.find({"isActive": True}).to_list(100)
    return testimonials


# Client endpoints
@api_router.get("/clients")
async def get_clients():
    """Get list of client companies"""
    clients = await db.clients.find({"isActive": True}).sort("order", 1).to_list(100)
    return [client["name"] for client in clients]


# Rental info endpoint
@api_router.get("/rental-info")
async def get_rental_info():
    """Get rental information"""
    rental = await db.rental_info.find_one()
    if not rental:
        raise HTTPException(status_code=404, detail="Rental information not found")
    return rental


# Contact form endpoint
@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact_form(contact: ContactSubmissionCreate):
    """Submit contact form"""
    contact_dict = contact.dict()
    contact_obj = ContactSubmission(**contact_dict)
    
    # Save to database
    await db.contacts.insert_one(contact_obj.dict())
    
    # TODO: Send email notification (to be implemented later)
    
    return contact_obj


@api_router.get("/contacts", response_model=List[ContactSubmission])
async def get_contacts():
    """Get all contact submissions (for admin use)"""
    contacts = await db.contacts.find().sort("createdAt", -1).to_list(1000)
    return contacts


# Health check
@api_router.get("/")
async def root():
    return {"message": "Kale Platform API", "status": "operational"}


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
    client.close()