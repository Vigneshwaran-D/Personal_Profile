# Personal Profile (React SSR)

This repo contains **Vigneshwaran D’s** portfolio migrated to **React SSR** using **Next.js** (TypeScript-enabled, with JS allowed).

## Tech stack

- **SSR framework**: Next.js (App Router)
- **UI**: React + your existing CSS theme (served from `public/css`)
- **Animations / UI effects**:
  - `swiper` (hero carousel)
  - `aos` (scroll animations)
  - `react-countup` (counters)
- **Contact form backend**: Next API route `POST /api/contact` (SMTP via `nodemailer`)

## Prerequisites

- **Node.js**: 20+
- **npm**: comes with Node

## Local development

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
copy .env.example .env.local
```

3. Update `.env.local` with your SMTP credentials.

4. Run dev server:

```bash
npm run dev
```

## Production build

```bash
npm install
npm run build
npm run start
```

The server listens on port `3000` by default.

## Deployment (own server)

### Option A: PM2 / systemd (simple)

- Build once: `npm ci && npm run build`
- Run: `npm run start` under a process manager (PM2/systemd) and put it behind Nginx/Caddy as a reverse proxy.

### Option B: Docker

This repo includes a `Dockerfile` + `docker-compose.yml`. Set environment variables (or mount an env file) and run:

```bash
docker compose up --build
```

## Notes

- Legacy files like `index.html`, `single.html`, and `send_email.php` are now **not used** by the Next.js app (they’re kept for reference).
