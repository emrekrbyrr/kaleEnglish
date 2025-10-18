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
from email_service import send_contact_email

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
    testimonials = await db.testimonials.find({"isActive": True}, {"_id": 0}).to_list(100)
    return testimonials


# Client endpoints
@api_router.get("/clients")
async def get_clients():
    """Get list of client companies"""
    clients = await db.clients.find({"isActive": True}, {"_id": 0}).sort("order", 1).to_list(100)
    return [client["name"] for client in clients]


# Rental info endpoint
@api_router.get("/rental-info")
async def get_rental_info():
    """Get rental information"""
    rental = await db.rental_info.find_one({}, {"_id": 0})
    if not rental:
        raise HTTPException(status_code=404, detail="Rental information not found")
    return rental


# Contact form endpoint
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


@api_router.get("/contacts", response_model=List[ContactSubmission])
async def get_contacts():
    """Get all contact submissions (for admin use)"""
    contacts = await db.contacts.find({}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
    return contacts


# Health check
@api_router.get("/")
async def root():
    return {"message": "Kale Platform API", "status": "operational"}


# Seed database endpoint (for initial setup)
@api_router.get("/seed-database")
async def seed_database():
    """Seed database with initial data - USE ONLY ONCE"""
    try:
        from seed_data import (
            company_data, products_data, services_data,
            testimonials_data, clients_data, rental_info_data
        )
        
        # Check if already seeded
        existing_company = await db.company.find_one()
        if existing_company:
            return {"message": "Database already seeded", "status": "skipped"}
        
        # Seed all data
        await db.company.insert_one(company_data)
        await db.products.insert_many(products_data)
        await db.services.insert_many(services_data)
        await db.testimonials.insert_many(testimonials_data)
        
        clients_with_order = [
            {"name": name, "order": idx + 1, "isActive": True}
            for idx, name in enumerate(clients_data)
        ]
        await db.clients.insert_many(clients_with_order)
        await db.rental_info.insert_one(rental_info_data)
        
        return {
            "message": "Database seeded successfully",
            "status": "success",
            "data": {
                "company": 1,
                "products": len(products_data),
                "services": len(services_data),
                "testimonials": len(testimonials_data),
                "clients": len(clients_data),
                "rental_info": 1
            }
        }
    except Exception as e:
        logger.error(f"Seed database error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


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