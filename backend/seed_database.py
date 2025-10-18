import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from seed_data import (
    company_data, products_data, services_data,
    testimonials_data, clients_data, rental_info_data
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

async def seed_database():
    """Seed the database with initial data"""
    
    # Connect to MongoDB
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    print("🌱 Starting database seeding...")
    
    # Clear existing data
    print("Clearing existing data...")
    await db.company.delete_many({})
    await db.products.delete_many({})
    await db.services.delete_many({})
    await db.testimonials.delete_many({})
    await db.clients.delete_many({})
    await db.rental_info.delete_many({})
    
    # Seed Company
    print("✓ Seeding company information...")
    await db.company.insert_one(company_data)
    
    # Seed Products
    print(f"✓ Seeding {len(products_data)} products...")
    await db.products.insert_many(products_data)
    
    # Seed Services
    print(f"✓ Seeding {len(services_data)} services...")
    await db.services.insert_many(services_data)
    
    # Seed Testimonials
    print(f"✓ Seeding {len(testimonials_data)} testimonials...")
    await db.testimonials.insert_many(testimonials_data)
    
    # Seed Clients
    print(f"✓ Seeding {len(clients_data)} clients...")
    clients_with_order = [
        {"name": name, "order": idx + 1, "isActive": True}
        for idx, name in enumerate(clients_data)
    ]
    await db.clients.insert_many(clients_with_order)
    
    # Seed Rental Info
    print("✓ Seeding rental information...")
    await db.rental_info.insert_one(rental_info_data)
    
    print("\n✅ Database seeding completed successfully!")
    print(f"   - Company: 1 record")
    print(f"   - Products: {len(products_data)} records")
    print(f"   - Services: {len(services_data)} records")
    print(f"   - Testimonials: {len(testimonials_data)} records")
    print(f"   - Clients: {len(clients_data)} records")
    print(f"   - Rental Info: 1 record")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())
