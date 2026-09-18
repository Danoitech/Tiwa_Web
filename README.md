# Tiiwa

Marketing site for **Tiiwa** — a private baby-care log for feeds, sleep, and nappies. Tagline: *for the hours between sleeps*.

This is a Next.js landing page. The companion mobile app lives in [`Danoitech/Tiiwa_App`](https://github.com/Danoitech/Tiiwa_App).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Waitlist

The form on `/#waitlist` saves emails to `.data/waitlist.json` locally (gitignored). On Vercel it writes to `/tmp`. Set `WAITLIST_WEBHOOK` to forward signups to your own endpoint.

Optional: `NEXT_PUBLIC_SITE_URL` for canonical metadata.

## Stack

Next.js App Router, Tailwind CSS, TypeScript. Brand colours and copy follow the Tiiwa app.
