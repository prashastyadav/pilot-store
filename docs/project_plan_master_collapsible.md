# Project Plan — FaydaVayda (Master)

> Last updated: 11 Aug 2025

## Current Phase & This Week
- **Timeline:** 12 weeks, ~2 hrs/day
- **Current Week:** Week 1 (11 Aug 2025 → 17 Aug 2025)
- **Focus this week:** Lock business model & what to sell (research + shortlist)

## Timeline (12 Weeks) — Stories & Tasks
### Week 1 (11 Aug 2025 → 17 Aug 2025)
<details><summary><strong>Branding foundation (DONE)</strong> — <em>Completed</em></summary>

**Tasks (2-hr friendly):**
- [✅] Brand name: FaydaVayda
- [✅] Tagline: Aapka Fayda, Hamara Vayda
- [✅] Palette locked: #0d3b66, #28a745, #34c759, #ffd700
- [✅] Fonts locked: Poppins Bold (brand), Poppins SemiBold (tagline)
- [✅] Logos exported: full + compact (PNG transparent/white BG, SVG)
- [✅] Brand guidelines added to repo (brand_guidelines.md)
- [✅] Git repo initialized & synced

**Acceptance criteria:**
- Logos render cleanly at 32px (favicon) and 3000px (print)
- Guidelines document includes colors, fonts, usage, file naming

**Outputs:**
- branding/ folder with all variants
- brand_guidelines.md committed on main

</details>
<details><summary><strong>What to sell — shortlist</strong> — <em>In progress</em></summary>

**Tasks (2-hr friendly):**
- [ ] List 6–8 everyday categories seen in Pune societies (30m)
- [ ] Check local availability & margins for top 3 (45m)
- [ ] Talk to 2–3 friends/relatives for needs/pain points (30m)
- [ ] Pick **one pilot category** (e.g., home essentials) (15m)

**Acceptance criteria:**
- One pilot category chosen with basic margin expectation
- 2 customer quotes captured

**Outputs:**
- docs/research/what-to-sell.md with shortlist & notes

</details>
<details><summary><strong>Business model — choose</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Compare inventory vs. dropship vs. marketplace (45m)
- [ ] Estimate ops effort & cash flow for each (45m)
- [ ] Pick model + write 5-line rationale (20m)
- [ ] Add to Decision Log (10m)

**Acceptance criteria:**
- One model selected with clear reason
- Risks listed with mitigations

**Outputs:**
- docs/business-model.md

</details>
<details><summary><strong>Govt funding — discovery</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] List schemes: Startup India Seed Fund, MSME, SIDBI, DPIIT (30m)
- [ ] Note eligibility & documents needed (45m)
- [ ] Create funding tracker sheet (30m)
- [ ] Book 1 call with a mentor/CA (15m)

**Acceptance criteria:**
- Have at least 2 relevant schemes to pursue

**Outputs:**
- docs/funding/funding-tracker.xlsx
- docs/funding/notes.md

</details>
### Week 2 (18 Aug 2025 → 24 Aug 2025)
<details><summary><strong>Market sizing & pricing (pilot category)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Collect 20 competitor prices (online + local) (60m)
- [ ] Define target price bands & margins (45m)
- [ ] Draft 3 launch bundles/offers (15m)

**Acceptance criteria:**
- Margin target per SKU documented
- 3 promos drafted

**Outputs:**
- docs/pricing/pilot-pricing.md

</details>
<details><summary><strong>Supplier & logistics plan</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] List 3–5 suppliers (30m)
- [ ] Contact 2 suppliers for MOQ & lead time (45m)
- [ ] Shortlist courier partner (Shiprocket/Xpressbees/Delhivery) (30m)
- [ ] Add shipping cost table (15m)

**Acceptance criteria:**
- Supplier shortlist & courier picked

**Outputs:**
- docs/ops/suppliers.md
- docs/ops/shipping-costs.md

</details>
<details><summary><strong>Funding — documents prep</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Company profile one-pager (45m)
- [ ] Problem/Solution slide (30m)
- [ ] Simple 12‑month cashflow (45m)

**Acceptance criteria:**
- Pitch deck v0 (5–7 slides) ready

**Outputs:**
- docs/funding/pitch-deck-v0.pdf

</details>
### Week 3 (25 Aug 2025 → 31 Aug 2025)
<details><summary><strong>Architecture diagrams (web + API + DB)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Draw request flow (browse → checkout) (45m)
- [ ] Draw service diagram (Next.js, GraphQL, Prisma, Supabase) (45m)
- [ ] ERD for Product/Category/Order/User (30m)

**Acceptance criteria:**
- Three diagrams saved as SVG/PNG

**Outputs:**
- docs/architecture/*.svg

</details>
<details><summary><strong>Turborepo scaffold & move pilot</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Create monorepo structure (30m)
- [ ] Move Next app → apps/web (30m)
- [ ] Create packages/shared & ui (30m)
- [ ] Set workspace scripts & CI lint/test (30m)

**Acceptance criteria:**
- Repo builds locally & CI passes

**Outputs:**
- Repo structure committed

</details>
<details><summary><strong>PWA baseline</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Add manifest.json & icons (30m)
- [ ] Add service worker (next-pwa) (45m)
- [ ] Lighthouse PWA ≥ 90 (45m)

**Acceptance criteria:**
- Install prompt works on Android

**Outputs:**
- apps/web/public/manifest.json

</details>
### Week 4 (01 Sep 2025 → 07 Sep 2025)
<details><summary><strong>Supabase + Prisma</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Create Supabase project (15m)
- [ ] Set DATABASE_URL & Prisma init (30m)
- [ ] Prisma models: Product, Category, Order (45m)
- [ ] Seed script (30m)

**Acceptance criteria:**
- Local queries work via Prisma

**Outputs:**
- prisma/schema.prisma
- infra/seed.ts

</details>
<details><summary><strong>GraphQL server (Yoga + Pothos)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Route handler `/api/graphql` (30m)
- [ ] Schema: Query.products, category, product(id) (45m)
- [ ] DataLoader to avoid N+1 (30m)
- [ ] Depth/complexity limits (15m)

**Acceptance criteria:**
- Playground returns products

**Outputs:**
- apps/web/app/api/graphql/route.ts

</details>
<details><summary><strong>Apollo Client on web</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Client provider in layout (20m)
- [ ] GraphQL Codegen hooks (40m)
- [ ] Home grid consumes `useProductsQuery` (60m)

**Acceptance criteria:**
- SSR/CSR both render products

**Outputs:**
- apps/web/graphql/

</details>
### Week 5 (08 Sep 2025 → 14 Sep 2025)
<details><summary><strong>Header & navigation</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Hamburger + categories (60m)
- [ ] Search input (client) (30m)
- [ ] Cart/profile icons (30m)

**Acceptance criteria:**
- Nav works on mobile & desktop

**Outputs:**
- apps/web/components/Header.tsx

</details>
<details><summary><strong>PDP (Product Detail Page)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Image gallery (45m)
- [ ] Price/stock/CTA (45m)
- [ ] Related products (30m)

**Acceptance criteria:**
- PDP loads from GraphQL by slug/id

**Outputs:**
- apps/web/app/product/[id]/page.tsx

</details>
### Week 6 (15 Sep 2025 → 21 Sep 2025)
<details><summary><strong>Cart & mini-cart</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Cart context/store (30m)
- [ ] Cart page with qty update (60m)
- [ ] Mini-cart slide-in (30m)

**Acceptance criteria:**
- Add/remove/update works; totals correct

**Outputs:**
- apps/web/app/cart/page.tsx

</details>
<details><summary><strong>Checkout (test)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Shipping form (45m)
- [ ] Dummy order create mutation (45m)
- [ ] Order confirmation screen (30m)

**Acceptance criteria:**
- Order flow completes in test mode

**Outputs:**
- apps/web/app/checkout/page.tsx

</details>
### Week 7 (22 Sep 2025 → 28 Sep 2025)
<details><summary><strong>Auth (Clerk)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Clerk setup + providers (30m)
- [ ] Protect GraphQL mutations with user in context (45m)
- [ ] Sign-in/up UI (45m)

**Acceptance criteria:**
- User login works; ctx.user available

**Outputs:**
- auth wiring

</details>
<details><summary><strong>Profile & orders</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Profile page (edit name/phone) (45m)
- [ ] Address book (45m)
- [ ] Orders list + detail page (30m)

**Acceptance criteria:**
- User can update details; see orders

**Outputs:**
- apps/web/app/profile/page.tsx
- apps/web/app/orders/page.tsx

</details>
### Week 8 (29 Sep 2025 → 05 Oct 2025)
<details><summary><strong>Razorpay integration (test)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Create order mutation (30m)
- [ ] Web checkout integration (45m)
- [ ] Webhook verify & mark paid (45m)

**Acceptance criteria:**
- Successful test payment updates order

**Outputs:**
- payments/rzp.md

</details>
<details><summary><strong>Emails</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Choose provider (Postmark/SendGrid) (15m)
- [ ] Order confirmation email (60m)
- [ ] Abandoned cart (45m)

**Acceptance criteria:**
- Emails deliver to test inbox

**Outputs:**
- emails/templates/*

</details>
### Week 9 (06 Oct 2025 → 12 Oct 2025)
<details><summary><strong>Admin: products & orders</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Admin layout + auth guard (30m)
- [ ] CRUD for products (60m)
- [ ] Orders table with status update (30m)

**Acceptance criteria:**
- Can add/edit products; view orders

**Outputs:**
- apps/web/app/admin/*

</details>
<details><summary><strong>Ask AI (admin)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Move prompt to packages/shared (20m)
- [ ] API route to OpenAI (40m)
- [ ] UI textarea + response box (30m)

**Acceptance criteria:**
- Admin can ask/store responses

**Outputs:**
- apps/web/app/admin/ai/page.tsx

</details>
### Week 10 (13 Oct 2025 → 19 Oct 2025)
<details><summary><strong>Testing & performance</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Playwright e2e: browse→checkout (60m)
- [ ] Sentry + PostHog setup (30m)
- [ ] Image/route optimizations (30m)

**Acceptance criteria:**
- Green e2e; error logging live

**Outputs:**
- tests/e2e/*

</details>
<details><summary><strong>Persisted queries & CDN</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Enable GET persisted queries (45m)
- [ ] Edge caching rules (30m)
- [ ] Monitor hit ratio (45m)

**Acceptance criteria:**
- Hot queries served from edge

**Outputs:**
- ops/cache-rules.md

</details>
### Week 11 (20 Oct 2025 → 26 Oct 2025)
<details><summary><strong>Marketing launch kit</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Create IG/FB pages & bio (30m)
- [ ] Design 5 creatives in Canva (60m)
- [ ] WhatsApp broadcast template (30m)

**Acceptance criteria:**
- Pages live; assets exported

**Outputs:**
- marketing/assets/*

</details>
<details><summary><strong>Funding applications</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Finalize deck (45m)
- [ ] Fill Startup India profile (45m)
- [ ] Shortlist 2 schemes to apply (30m)

**Acceptance criteria:**
- At least 1 application submitted

**Outputs:**
- docs/funding/applications/*

</details>
### Week 12 (27 Oct 2025 → 02 Nov 2025)
<details><summary><strong>Production deploy & domain</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Vercel production project (15m)
- [ ] Custom domain & SSL (30m)
- [ ] Env vars & secrets audit (30m)

**Acceptance criteria:**
- Live site green on status checks

**Outputs:**
- deployment notes

</details>
<details><summary><strong>Soft launch (Pune network)</strong> — <em>Planned</em></summary>

**Tasks (2-hr friendly):**
- [ ] Collect feedback form responses (45m)
- [ ] Fix top 3 issues (60m)
- [ ] Plan next 4 weeks backlog (15m)

**Acceptance criteria:**
- 10+ real users tested; fixes committed

**Outputs:**
- retro notes
- next-backlog.md

</details>

---

## Locked Decisions & Completed Items (✅)
- Brand name: FaydaVayda ✅
- Tagline: Aapka Fayda, Hamara Vayda ✅
- Palette: #0d3b66 / #28a745 / #34c759 / #ffd700 ✅
- Fonts: Poppins Bold / Poppins SemiBold ✅
- Logos: Full + Compact (PNG transparent/white BG, SVG) ✅
- Brand guidelines committed ✅
- Git repository set up ✅
- Architecture: Monorepo (Turborepo) + Next.js + GraphQL + Prisma + Supabase + Apollo ✅ (direction locked)
