#!/usr/bin/env python3
"""
Script to populate the database with seed data
"""
import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path
from seed_data import (
    company_data, products_data, services_data, 
    testimonials_data, clients_data, rental_info_data
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

async def populate_database():
    # MongoDB connection
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    try:
        # Clear existing data
        print("Clearing existing data...")
        await db.company.delete_many({})
        await db.products.delete_many({})
        await db.services.delete_many({})
        await db.testimonials.delete_many({})
        await db.clients.delete_many({})
        await db.rental_info.delete_many({})
        
        # Insert company data
        print("Inserting company data...")
        await db.company.insert_one(company_data)
        
        # Insert products
        print(f"Inserting {len(products_data)} products...")
        for product in products_data:
            product['isActive'] = True
        await db.products.insert_many(products_data)
        
        # Insert services
        print(f"Inserting {len(services_data)} services...")
        for service in services_data:
            service['isActive'] = True
        await db.services.insert_many(services_data)
        
        # Insert testimonials
        print(f"Inserting {len(testimonials_data)} testimonials...")
        for testimonial in testimonials_data:
            testimonial['isActive'] = True
        await db.testimonials.insert_many(testimonials_data)
        
        # Insert clients
        print(f"Inserting {len(clients_data)} clients...")
        client_docs = []
        for i, client_name in enumerate(clients_data):
            client_docs.append({
                "name": client_name,
                "order": i + 1,
                "isActive": True
            })
        await db.clients.insert_many(client_docs)
        
        # Insert rental info
        print("Inserting rental info...")
        await db.rental_info.insert_one(rental_info_data)
        
        print("Database populated successfully!")
        
    except Exception as e:
        print(f"Error populating database: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(populate_database())