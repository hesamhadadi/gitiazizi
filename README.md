# Giti Azizi Portfolio

## Setup

```bash
npm install
npm run dev
```

## Environment Variables (.env.local)

```env
MONGODB_URI=REDACTED_MONGODB_URI
ADMIN_PASSWORD=REDACTED_ADMIN_PASSWORD
NEXTAUTH_SECRET=REDACTED_NEXTAUTH_SECRET
NEXTAUTH_URL=http://localhost:3000
SEED_SECRET=REDACTED_SEED_SECRET
```

## First Run — Seed Database

After starting the dev server:

```bash
curl -X POST http://localhost:3000/api/admin/seed \
  -H "x-seed-secret: REDACTED_SEED_SECRET"
```

Or go to **Admin → Settings → Seed Database**.

## Admin Panel

Visit: http://localhost:3000/admin  
Password: `REDACTED_ADMIN_PASSWORD`

## Images

57 images extracted from the PDF portfolio are in `public/images/`:
- `princess-irulan/` — 7 images
- `fallen-garden/` — 10 images
- `tarchi-vests/` — 7 images
- `graphiti-tshirts/` — 7 images
- `tarchi-summer/` — 11 images
- `love-in-air/` — 8 images
- `mens-shirt/` — 5 images

## Deploy on Vercel

1. Push to GitHub
2. Import to Vercel
3. Add all environment variables (change NEXTAUTH_URL to your domain)
4. Deploy
5. Seed production: run seed curl with your production URL
