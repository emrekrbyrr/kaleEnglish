# Kale Platform - API Contracts & Integration Plan

## Overview
This document outlines the API contracts and integration plan for transforming the Kale Platform frontend from mock data to a fully functional backend-integrated application.

## Current Mock Data Structure (mock.js)

### Company Information
- `companyInfo`: Basic company details (name, tagline, contact info, address)
- `stats`: Company statistics (years of experience, customers, projects, countries)
- `services`: List of service offerings with icons and descriptions
- `clients`: Array of client company names
- `testimonials`: Customer testimonials with ratings

### Products
- `products`: Array of 6 products (Suspended Scaffold, Facade Platform, Monorail, Matafora, Manlift, Accessories)
- Each product contains: id, name, slug, description, features[], applications[]

### Rental Information
- `rentalInfo`: Rental service details, benefits, and process steps

## Backend Implementation Plan

### 1. Database Models (MongoDB)

#### Company Collection
```javascript
{
  _id: ObjectId,
  name: String,
  tagline: String,
  description: String,
  email: String,
  phone: String,
  address: String,
  established: String,
  stats: {
    yearsExperience: Number,
    customers: Number,
    projects: Number,
    countries: Number
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### Products Collection
```javascript
{
  _id: ObjectId,
  name: String,
  slug: String,
  description: String,
  features: [String],
  applications: [String],
  isActive: Boolean,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### Services Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  icon: String,
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### Testimonials Collection
```javascript
{
  _id: ObjectId,
  name: String,
  company: String,
  text: String,
  rating: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### Contacts Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  company: String,
  message: String,
  consent: Boolean,
  status: String, // "new", "contacted", "closed"
  createdAt: Date,
  updatedAt: Date
}
```

### 2. API Endpoints

#### Company Info
- `GET /api/company` - Get company information
- `PUT /api/company` - Update company information (admin only - future)

#### Products
- `GET /api/products` - Get all active products
- `GET /api/products/:slug` - Get single product by slug

#### Services
- `GET /api/services` - Get all active services

#### Testimonials
- `GET /api/testimonials` - Get all active testimonials

#### Clients
- `GET /api/clients` - Get list of client companies

#### Contact Form
- `POST /api/contact` - Submit contact form
  - Request Body: { name, email, phone, company, message, consent }
  - Email notification to sales@kaleplatform.com
  - Response: { success: true, message: "..." }

### 3. Email Integration for Contact Form

**Email Service**: Use nodemailer with SMTP
**Recipient**: sales@kaleplatform.com
**Email Template**: Professional HTML email with form data

### 4. Frontend Integration Changes

#### Files to Update:
1. **Home.jsx**
   - Replace mock data imports with API calls
   - Add useEffect to fetch company info, stats, products, services, testimonials, clients
   - Add loading states

2. **About.jsx**
   - Fetch company info and services from API
   - Add loading states

3. **Products.jsx**
   - Fetch products from API
   - Add loading states
   - Maintain hash-based scrolling

4. **Rental.jsx**
   - Fetch rental info from company data
   - Add loading states

5. **Contact.jsx**
   - Update handleSubmit to call POST /api/contact
   - Add proper error handling
   - Show success/error toasts
   - **REMOVE** mock setTimeout, implement real API call

#### API Service File:
Create `/app/frontend/src/services/api.js` with axios calls

### 5. Data Seeding

Create seed script to populate initial data from mock.js into MongoDB:
- Company information
- Products (6 products)
- Services (9 services)
- Testimonials (3 testimonials)
- Clients list

### 6. Environment Variables

Backend (.env):
- `MONGO_URL` - Already configured
- `SMTP_HOST` - Email server
- `SMTP_PORT` - Email port
- `SMTP_USER` - Email username
- `SMTP_PASS` - Email password
- `CONTACT_EMAIL` - sales@kaleplatform.com

## Integration Priority

1. **Phase 1**: Backend models and basic CRUD endpoints
2. **Phase 2**: Contact form with email integration
3. **Phase 3**: Frontend API integration
4. **Phase 4**: Data seeding and testing

## Testing Checklist

- [ ] All API endpoints return correct data structure
- [ ] Contact form successfully sends email to sales@kaleplatform.com
- [ ] Frontend loads data from backend without errors
- [ ] Loading states work properly
- [ ] Error handling displays appropriate messages
- [ ] SEO metadata remains intact
- [ ] Animated scaffold continues to work
- [ ] Mobile responsiveness maintained
- [ ] All page routes function correctly

## Notes

- Keep all existing UI/UX design unchanged
- Maintain SEO optimization throughout
- Ensure animated scaffold remains functional
- Preserve all current styling and animations
- Mock data will be completely replaced with API calls