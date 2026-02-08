# Project Migration Plan

## Checklist

- [ ] **1. Update `lib/data.ts`** — Expand the `Project` interface and replace placeholder projects with the 6 real portfolio items from the existing site
- [ ] **2. Add project images** — Save project images to `public/images/projects/` for local use
- [ ] **3. Create `app/projects/[slug]/page.tsx`** — Individual project detail page with back button, image, full description, and PDF link
- [ ] **4. Update `app/projects/page.tsx`** — Wrap each project card in a Link to `/projects/[slug]`
- [ ] **5. Update `app/page.tsx`** — Wrap the "Recent Works" preview cards in a Link to `/projects/[slug]`
- [ ] **6. Verify** — Check edge cases (invalid slug, missing optional fields, accessibility)
