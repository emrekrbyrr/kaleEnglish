# Kale Platform Website

Modern, elegant website for Kale Platform - professional suspended scaffold rental and sales company.

## Architecture

**Simple & Fast - No Database for Static Content**
- Frontend: React with static data (no API calls for content)
- Backend: FastAPI (only for contact form)
- Database: MongoDB (only stores contact form submissions)

## Key Features

✅ **Instant Page Load** - All content (products, services, testimonials) stored in frontend
✅ **Minimal Backend** - Only contact form endpoint
✅ **Easy Deployment** - No database seeding needed
✅ **Fast Performance** - No API calls for static content

## Structure

```
/app
├── frontend/
│   ├── src/
│   │   ├── mock.js          # All static data (products, services, testimonials, etc.)
│   │   ├── pages/           # React pages
│   │   └── components/      # React components
│   └── package.json
├── backend/
│   ├── server.py            # Minimal FastAPI (only contact form)
│   ├── email_service.py     # Email sending via SMTP
│   ├── models.py            # Pydantic models
│   └── requirements.txt     # Python dependencies
```

## Editing Content

**All website content is in:** `/app/frontend/src/mock.js`

Edit this file to update:
- Company information
- Products
- Services  
- Testimonials
- Clients list
- Stats

No database seeding needed - just edit the file and restart frontend!

## Backend Endpoints

- `GET /api/` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - View all contact submissions (admin)

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<backend-url>
```

### Backend (.env)
```
MONGO_URL=<mongodb-connection-string>
DB_NAME=<database-name>
SMTP_HOST=<smtp-host>
SMTP_PORT=<smtp-port>
SMTP_USER=<smtp-username>
SMTP_PASSWORD=<smtp-password>
CONTACT_EMAIL=<destination-email>
```

## Deployment

### Production Deployment (Emergent)
The app is configured for Emergent native deployments:
- Frontend builds to static files
- Backend runs on port 8001
- MongoDB connection automatically configured
- CORS enabled for all origins

### Manual Deployment
1. Build frontend: `cd frontend && yarn build`
2. Start backend: `cd backend && uvicorn server:app --host 0.0.0.0 --port 8001`
3. Serve frontend build

## Why No Database for Content?

This is a simple promotional website with static content that rarely changes. Using a database added unnecessary complexity:
- ❌ Slower page loads (API calls)
- ❌ Database seeding issues
- ❌ Deployment complications
- ❌ More points of failure

With static content:
- ✅ Instant page loads
- ✅ Simple deployment
- ✅ Easy content updates (just edit mock.js)
- ✅ More reliable

## Contact

For questions about this website, contact: sales@kaleplatform.com
