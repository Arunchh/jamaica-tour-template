# Jamaica Tour Operator Website Template

A premium, SEO-optimized website template for Jamaica tour operators — airport transfers, private tours, group transport, and excursions.

Built for **one-time setup, long-term use**, and easy per-customer customization without coding knowledge.

## Why This Stack?

- **Next.js** — Fast, Google-friendly static pages with excellent SEO
- **Single config file** — Change business name, phone, tours, and images in one place
- **Mobile-first** — Sticky Call + WhatsApp buttons (how tourists actually book)
- **Conversion-focused** — Trust signals, reviews, FAQ, and quote form built in

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Customize for Each Customer

**Everything lives in one file:** `src/config/site-config.ts`

| Section | What to change |
|---------|----------------|
| `business` | Company name, phone, WhatsApp, email, license #, ratings |
| `seo` | Website URL, Google keywords |
| `hero` | Main headline, background image |
| `services` | Airport transfers, shuttles, group transport |
| `fleet` | Hiace, Coaster, sedan descriptions + photos |
| `destinations` | Montego Bay, Negril, Ocho Rios, Falmouth |
| `excursions` | Dunn's River, Blue Hole, etc. with prices |
| `testimonials` | Guest reviews (use real ones!) |
| `faqs` | Common questions — great for Google ranking |
| `social` | Facebook, Instagram, TripAdvisor links |

### Replace Demo Images

Swap Unsplash URLs in `site-config.ts` with the operator's own photos:
- Fleet vehicles (Hiace, Coaster)
- Tour photos
- Destination shots

For best SEO, use descriptive `imageAlt` text.

### Update Contact Details

```ts
phone: "+1-876-555-0142",        // Click-to-call format
phoneDisplay: "(876) 555-0142",  // How it appears on screen
whatsapp: "18765550142",         // No + or spaces
email: "bookings@example.com",
```

## Deploy (Free / Low Cost)

Recommended hosts (all support Next.js):

1. **[Vercel](https://vercel.com)** — Free tier, connect domain, auto-deploy
2. **[Netlify](https://netlify.com)** — Similar, good free tier
3. **Shared hosting** — Run `npm run build` then `npm start`

### Before Going Live

1. Update `seo.siteUrl` to the real domain (e.g. `https://www.kingstontours.com`)
2. Replace all placeholder business info
3. Add real customer reviews
4. Connect a custom domain
5. Submit sitemap to [Google Search Console](https://search.google.com/search-console)

## SEO Features Included

- Meta title, description, and keywords
- Open Graph + Twitter cards (social sharing)
- JSON-LD structured data (LocalBusiness, FAQ)
- `sitemap.xml` and `robots.txt` auto-generated
- Semantic HTML with location-based content
- FAQ section (ranks well for "Jamaica airport transfer" type searches)

## Project Structure

```
src/
  config/
    site-config.ts     ← EDIT THIS for each customer
  components/
    layout/            Header, Footer, Mobile CTA
    sections/          Hero, Services, Tours, Fleet, etc.
    seo/               Structured data for Google
  app/
    page.tsx           Homepage
    layout.tsx         SEO metadata
```

## Build for Production

```bash
npm run build
npm start
```

## Selling This Template

Suggested workflow per customer:

1. Duplicate the project folder
2. Edit `site-config.ts` (30–60 minutes)
3. Replace images with customer's fleet/tour photos
4. Deploy to Vercel with their domain
5. Hand off — they get WhatsApp/call leads directly

No WordPress maintenance. No plugin updates. No security patches to worry about.
