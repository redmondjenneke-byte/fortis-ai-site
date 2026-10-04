# Fortis AI website

Production-ready React, TypeScript, Vite and Tailwind website for Fortis AI, a trading division of Fortis Analytica Pty Ltd.

## Local development

1. Install dependencies with `pnpm install`.
2. Copy `.env.example` to `.env` and set the required values.
3. Run `pnpm dev`.
4. Run `pnpm lint` and `pnpm build` before deploying.

## Netlify deployment

Create a Netlify site connected to this repository. Netlify will use `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

For Netlify Forms, enable form detection in the site settings after the first deploy. The two forms are `contact` and `ai-opportunity-audit`.

## DNS

Configure the `ai.fortisanalytica.com.au` subdomain in Netlify, then add the DNS record Netlify provides at the domain host. Set `VITE_SITE_URL` to the final canonical `https` URL before the production build.

## Configuration

- `VITE_SITE_URL`: Canonical website URL.
- `VITE_BOOKING_URL`: External booking provider URL. Until configured, the booking page directs visitors to the contact form.
- `VITE_ANALYTICS_ID`: Reserve for the selected analytics provider. Do not add tracking without confirming cookie/privacy obligations.

Core business details, services, pricing and navigation are maintained in `src/config/site.ts`.

## Pre-launch information required

- Official Fortis AI logo variants (light/dark and compact, if available)
- External booking URL
- Analytics provider and ID, if analytics are desired
- Approved founder/director biography and credentials
- Approved social profiles, if any
- Professional legal review of every legal-page draft and the final privacy/cookie approach
- Confirmed form recipient, retention process and enquiry-handling workflow

## Pre-launch checklist

- Confirm all branding, prices, phone, email, ABN and legal entity details.
- Replace or approve all legal-page effective-date placeholders.
- Review all commercial and legal claims.
- Complete browser/device and form-submission testing on the Netlify preview URL.
- Submit sitemap to Google Search Console once the production domain is live.
