# Defenseply website

Next.js, TypeScript and Tailwind v4. This branch combines Sahil’s Defenseply UI and Ansab’s About section with the reusable homepage structure. Images and fonts are local; Framer Motion and Keen Slider handle animation and carousels.

## Run and verify

```sh
npm ci
npm run dev
```

Routes: `/` and `/usa/` render the homepage; `/contact-us` renders the contact page; `/products/[slug]` renders each catalog product; `/applications/[slug]` renders six application categories.

```sh
npm test
npm run lint
npm run build
npm start
```

Stop the existing server before starting another on the same port.

## Structure and section replacement

- `src/app/layout.tsx`: shared navbar, footer and navigation state, used by every route.
- `src/app/page.tsx`: homepage section order. Replace or reorder components here.
- `src/app/contact-us/page.tsx`: contact section order and page metadata.
- `src/components/sections/`: independently replaceable homepage sections.
- `src/components/sections/contact/`: contact intro, project section/form, direct details, visit section and final CTA. Only the form needs client-side state.
- `src/components/layout/`: shared desktop/mobile navigation, footer and newsletter form.
- `src/components/ui/`: reusable headings, action links, cards, carousel controls, dialog and floating actions.
- `src/data/site.ts`: navbar links, header actions, footer groups and social labels.
- `src/data/about.json`: About headline, features, gallery images and statistics. The section follows the hero and owns the navbar’s `#about` destination.
- `src/components/sections/Products.tsx`: homepage product carousel, linked to detail pages.
- `src/components/product/`: replaceable product overview, narrative, specifications, applications, green promise, enquiry, related products and gallery components. `ProductSection` shares section spacing/headings.
- `src/data/products.json`: single product catalog, including card images, detail galleries, specifications and applications. `src/types/product.ts` defines its schema; `src/data/products.ts` provides lookups and derives homepage cards.
- `src/data/*.json`: editable homepage card content. Collection badges and brand logos are data fields, independent of card order.
- `src/app/globals.css`: Tailwind theme, local fonts and small shared utilities. All section styles use Tailwind; no legacy stylesheet folder.
- `public/assets/`: local media. Source manifests retain provenance URLs; those are not navigation links.

Use the shared UI components when adding similar sections. Most card sections accept an `items` prop. Keep new sections inside the existing page container or use `page-bleed` for full-width backgrounds. Contact sections share their typography/layout utilities in `ContactUI.tsx`.

Responsive breakpoints: `phone` 600px, `tablet` 1024px, `desktop` 1080px, `wide` 1440px. `NavigationProvider` shares menu/scroll state and the `--mobile-nav-height` value so the yellow quote banner follows the navbar. It hides while the mobile menu is open.

## Interactions

Navbar/footer links navigate to implemented local pages and homepage anchors. Homepage section IDs are `home`, `products`, `applications` (with legacy `product` anchor), `gallery`, `about`, and `contact`; `contact` remains the homepage newsletter destination from Sahil’s branch. Placeholder `#` links remain inert. No promotional links redirect to Cosentino.

Carousels, filters, gallery lightboxes, mobile menus and help dismissal work locally. Contact and newsletter forms validate input but have no backend; submission feedback explicitly states that nothing was sent. Contact details remain the placeholders supplied by Sahil. No analytics or external form scripts are included.

Tests validate local assets, navbar/footer destinations, homepage anchors and duplicate IDs. Run them whenever editing content or routes.


## Applications and image handoff

The product-detail UI (`components/product`) is **provisional, not an approved design reference**. New application pages follow the homepage/contact typography, spacing and palette. Product data and photography can be reused independently of that UI.

- Homepage: `components/sections/Applications.tsx` composes the shared `ApplicationTabs` and `ApplicationCard`.
- Six routes: `/applications/interiors`, `/applications/commercial`, `/applications/creative`, `/applications/wardrobe`, `/applications/bedroom`, `/applications/kitchen`.
- Page composition: `app/applications/[slug]/page.tsx`; independently replaceable hero, navigation, story, gallery and materials components in `components/application/`.
- Content and intended asset paths: `data/applications.json`; types: `types/application.ts`. All four cards within a category open that category page.
- Image resolution: `data/applications.ts` runs on the server, selecting available WebP/PNG/JPG/JPEG/AVIF assets by basename. Missing images use neutral placeholders, with no broken requests. Add files and rebuild/restart a production preview; in development refresh the page.
- Images: `public/assets/applications/<category>/`. Full copy-paste prompts, exact filenames, dimensions and crop guidance: [application-image-prompts.md](docs/application-image-prompts.md).
- The category page reuses its homepage gallery images, existing product imagery, and `ContactProject` / `ContactForm`. Forms remain local previews, with no submission service.
- Client attachments are reference-only and are not copied into the repository. Application images will be concepts rather than verified completed projects.


## Rashid homepage integration

The homepage composes Hero, About, Applications, Products, InspirationGallery, BlogSection, Testimonials, FAQ and Newsletter. Older promotional sections remain available as components but are no longer mounted, matching Rashid's updated page.

- `components/blog/`: article cards, article detail content and the animated drawer controller. `types/blog.ts` describes the editorial schema; `data/blog.json` is the content source. Article HTML is trusted repository content; sanitize external CMS input before using it here.
- `components/testimonial/TestimonialSection.tsx`: reusable testimonial layout, with active copy in `data/testimonials.json`.
- `components/sections/FAQ.tsx`: accessible accordion backed by `data/faq.json`.
- Shared primitives remain in `components/ui/`; class names use `lib/cn.ts`. Unused imported template demos and their unused dependency were removed.
- Drawer animation uses GSAP; avatars use Radix. Existing Framer Motion and Keen Slider behavior is retained, including category-switch slider resets.
