# Website

Build Canada public website. Next.js on Cloudflare Workers via OpenNext.

## Architecture

Two Cloudflare Workers running from the same repo:

| Worker | Entry Point | Purpose |
|--------|-------------|---------|
| `website` | `custom-worker.ts` | Next.js app (HTTP only) |
| `website-worker` | `worker/index.ts` | Queue consumer + cron triggers |

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

Optionally start the queue worker (for testing queue behavior):
```bash
npm run worker:dev
```

Requires `.dev.vars` with `DATABASE_URL`.

## Deploy

**CI (Cloudflare Workers Builds)** deploys the Next.js app automatically on push:
- Build command: `npm ci && npm run build:prod`
- Deploy command: `npm run deploy:app`

**Queue worker** is deployed separately:
```bash
npm run deploy:worker
```

**Both at once** (local only):
```bash
npm run deploy:all
```

## Secrets

Required on both workers:
```bash
npx wrangler secret put DATABASE_URL
npx wrangler secret put DATABASE_URL --config worker/wrangler.jsonc
```

## Cron Schedules

| Schedule | Job |
|----------|-----|
| `0 * * * *` | Hourly job |
