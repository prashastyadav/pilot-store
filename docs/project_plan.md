# Project Plan — E‑Comm Pilot Store

> **Owner:** You (solo)
> **Repo:** `pilot-store`
> **Last updated:** <!-- update on edits -->

---

## Current Phase
- **Phase:** Week 1 — Brand Identity & Scaffold
- **Status:** Not started / In progress / ✅ Done (toggle)
- **Next Checkpoint:** <!-- date -->

---

## Working Plan (This Week)
- [ ] Pick brand name & tagline
- [ ] Lock colors & fonts
- [ ] Create minimal wordmark logo & favicon
- [ ] Scaffold Next.js app and deploy to Vercel
- [ ] Add header shell + category placeholders

Notes:
- Keep scope tight; anything new goes to Backlog first.

---

## Management & Branding Track (🧭)

### M1 — Brand Identity
- [ ] Company name (short, .in/.com friendly)
- [ ] Niche/theme for pilot (e.g., lifestyle accessories)
- [ ] Tagline (≤ 8 words)
- [ ] Color palette (1 primary, 1 secondary, 2 neutrals)
- [ ] Typography (display + body)
- [ ] Tone & voice (friendly / premium / playful)
- [ ] Logo & favicon (simple text mark)

### M2 — Pre‑Launch Materials
- [ ] Buy domain & set DNS (Vercel)
- [ ] Reserve social handles
- [ ] Product photo style guide (1 page)
- [ ] Brand guidelines mini‑doc (colors, fonts, logo usage)

### M3 — Launch Marketing Prep
- [ ] “About Us” copy (100–150 words)
- [ ] Launch landing content (hero + value props + email capture)
- [ ] Newsletter tool (Buttondown/Mailchimp/Brevo)

---

## Technical Track (💻)

### T1 — Core Structure & Navigation
**Goal:** Navigable site on desktop & mobile
- [ ] Responsive header (logo, hamburger on mobile)
- [ ] Desktop categories nav
- [ ] Cart icon with count
- [ ] User/profile icon
- [ ] Search bar (client‑side)
- [ ] Category model + `/category/[slug]` pages

### T2 — Product & Cart Flow
**Goal:** Browse → PDP → Cart → Checkout (test)
- [ ] PDP with gallery, variants, stock state
- [ ] Related products section
- [ ] Add to cart + quantities
- [ ] Cart page
- [ ] Mini cart (slide‑in)
- [ ] Checkout (shipping form)
- [ ] Razorpay (test mode) + order confirmation

### T3 — User Account
**Goal:** Personalization & history
- [ ] Auth (email/social)
- [ ] Profile page (edit details)
- [ ] Address book
- [ ] Orders list + order detail page
- [ ] Wishlist

### T4 — Trust Pages
- [ ] About Us
- [ ] Contact Us
- [ ] FAQ
- [ ] Policies (privacy, returns, terms)

### T5 — Stand‑Out Features
- [ ] Dark mode
- [ ] AI shopping assistant (customer‑facing)
- [ ] Personalized recommendations
- [ ] Gamified coupons

---

## Timeline (Solo Dev — 8 Weeks Target)
| Week | Management (🧭) | Technical (💻) | Risks |
|---|---|---|---|
| 1 | M1 brand identity | Scaffold & deploy starter | Over‑polishing logo |
| 2 | M2 assets | T1 header/nav/search | Mega‑menu scope creep |
| 3 | M2 content | T2 PDP + categories | Over‑design early |
| 4 | — | T2 cart + checkout (test) | Animations before function |
| 5 | — | T3 auth + profile + orders | Auth complexity |
| 6 | M3 launch copy | T4 trust pages | Copy delays |
| 7 | — | T5 stand‑out features | Feature creep |
| 8 | Review | Testing & soft launch | Bug backlog |

---

## Change Log
- Use this section to record scope changes.
- **Template:** `YYYY‑MM‑DD — Change — Reason — Impact`

---

## Backlog (Unscoped / Later)
- Product reviews with images
- SMS notifications
- Multi‑warehouse inventory
- Referral program

---

## Decisions Log
- **Stack:** Next.js (App Router) + Tailwind + Vercel, OpenAI for AI features, Razorpay (IN)
- **Data:** Mock JSON → Supabase/Firebase later
- **AI:** Admin “Ask AI” (now) → public assistant (later)

---

## Checkpoints & Rituals
- **Weekly review (30 min):** update status, promote items from Backlog → Working Plan
- **Phase gate:** don’t start a new phase until prior phase MVP is functional
- **Definition of Done:** feature works on mobile + desktop, basic a11y, no console errors, documented

