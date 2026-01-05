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
#
# Storage backend:
#   - dynamodb (recommended for low cost on AWS)
#   - postgres (use your existing EC2 Postgres)
#   - mongo (if you want to keep MongoDB/Atlas/DocumentDB)
#
STORAGE_BACKEND=dynamodb

# Postgres (when STORAGE_BACKEND=postgres)
# Either provide DATABASE_URL:
# DATABASE_URL=postgresql://user:password@host:5432/dbname
# Or reuse your existing naming style:
# DB_HOST=3.89.169.178
# DB_USER=postgres
# DB_PASS=...
# DB_DB=kale
# DB_PORT=5432

# DynamoDB (when STORAGE_BACKEND=dynamodb)
AWS_REGION=<aws-region>                  # e.g. eu-central-1
DYNAMODB_TABLE=<dynamodb-table-name>     # e.g. kale-contact

# MongoDB (when STORAGE_BACKEND=mongo)
MONGO_URL=<mongodb-connection-string>
DB_NAME=<database-name>

SMTP_HOST=<smtp-host>
SMTP_PORT=<smtp-port>
SMTP_USER=<smtp-username>
SMTP_PASSWORD=<smtp-password>
CONTACT_EMAIL=<destination-email>
```

## Deployment

### AWS’ye taşımak (önerilen düşük maliyetli mimari)

Bu projede dinamik tek parça **contact form** olduğu için AWS’de en ucuz/kolay kurgu:

- **Frontend**: S3 (static hosting) + CloudFront (CDN + HTTPS) + Route53 (domain)
- **Backend**: tek bir küçük sunucu (EC2/Lightsail) *veya* API Gateway + Lambda
- **DB**: **DynamoDB (on-demand)** (Mongo çalıştırma derdi yok, düşük trafik için çok ucuz)
- **Email**: Mevcut SMTP ile devam edebilirsin (istersen AWS SES’e de geçilebilir)

#### 1) DynamoDB tablosu oluştur
- Table name: örn. `kale-contact`
- Partition key: `pk` (String)
- Sort key: `sk` (String)
- Capacity: **On-demand**

#### 2) Backend’i AWS’ye koy (EC2/Lightsail - en basit “bulut sunucu” yolu)
- Ubuntu sunucu aç (Lightsail 5$ genelde yeterli)
- Security Group / firewall: sadece **80/443** açık olsun (SSH 22 kendi IP’ne kısıtla)
- Sunucuda Python kur, backend’i çalıştır:
  - `pip install -r backend/requirements.txt`
  - Env’leri ayarla (aşağıdaki örnek)
  - `uvicorn backend.server:app --host 0.0.0.0 --port 8001`
- Nginx reverse proxy ile `/api`’yi 8001’e yönlendir (HTTPS için Let’s Encrypt)

Backend env örneği:
```
STORAGE_BACKEND=dynamodb
AWS_REGION=eu-central-1
DYNAMODB_TABLE=kale-contact
SMTP_HOST=...
SMTP_PORT=465
SMTP_USER=...
SMTP_PASSWORD=...
CONTACT_EMAIL=...
```

> IAM: EC2/Lightsail tarafında en doğrusu **instance role** ile `dynamodb:PutItem` ve `dynamodb:Query` yetkisi vermek. Access key gömmemeye çalış.

#### 3) Frontend’i S3 + CloudFront’a deploy et
- `frontend/.env` içine `REACT_APP_BACKEND_URL=https://api.senindomainin.com` koy
- `yarn build`
- `frontend/build` içeriğini S3’e upload et
- CloudFront dağıtımı oluştur (origin: S3), HTTPS sertifikası (ACM) bağla
- Route53’te domainini CloudFront’a yönlendir

#### 4) Mevcut MongoDB verisini taşı (opsiyonel)
Sadece contact kayıtların varsa ve Mongo’dan DynamoDB’ye geçeceksen:
- Eski ortamdan `MONGO_URL` ve `DB_NAME` al
- AWS’de tabloyu oluşturduktan sonra:
  - `python backend/migrate_contacts_mongo_to_dynamodb.py`

### Alternatifler
- **MongoDB’yi AWS’ye taşımak**: ya Atlas (kolay) ya da EC2 üstünde Mongo (bakım/backup senin). Amazon DocumentDB genelde küçük siteler için pahalı kalıyor.
- **Backend’i serverless yapmak**: FastAPI’yi Lambda’ya taşımak mümkün, ama mevcut yapıda “bulut sunucu” isteğine göre EC2/Lightsail daha az sürprizli.

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
