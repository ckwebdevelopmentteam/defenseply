# Cosentino USA homepage replica

A component-based Next.js replica of the `/usa/` homepage, with responsive desktop and mobile layouts. Built with TypeScript, Tailwind CSS, Framer Motion, and Keen Slider. Images, logos, and fonts are served locally.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000/usa/. The root route renders the same homepage.

```sh
npm test
npm run lint
npm run build
npm start
```

Stop the running development server before starting the production server on the same port.

## Edit or replace sections

- `src/app/page.tsx`: homepage section order. Remove, reorder, or replace component imports here.
- `src/components/sections/`: one component per homepage section, from `Hero` through `Newsletter`.
- `src/components/layout/`: desktop/mobile navigation, country dialog, footer, and placeholder-link behavior.
- `src/components/layout/NavigationPanel.tsx`: one shared renderer for all desktop/mobile submenu content in `src/data/menu-panels.json`.
- `src/components/ui/`: reusable headings, action links, surface cards, carousel controls, modal dialog, and floating controls.
- `src/data/`: editable card content, brand/color filters, gallery categories, navigation, and region options.
- `src/app/globals.css`: Tailwind v4 theme, local fonts, base rules, and a few shared utilities. Section styling lives directly in each component’s Tailwind classes; there is no legacy stylesheet folder.
- `public/assets/`: local media and fonts. `sources.json` records source URLs; `src/data/asset-map.json` maps original URLs to local assets.

To replace a section, edit or swap its component in `src/app/page.tsx`. To change its cards, update its JSON file or supply its `items` prop. Collection badges (`isNew`) and brand logos are data fields, so reordering cards does not change their meaning. Static section copy stays beside its markup.

Use `Heading`/`SectionHeading`, `ActionLink`, `SurfaceCard`, and `Carousel` for matching new sections. Theme utilities include `text-ink`, `bg-stone`, `bg-aqua`, `text-body`, and fluid heading sizes. Responsive breakpoints: `phone` 600px, `tablet` 1024px, `desktop` 1080px, `wide` 1440px. `NavigationProvider` shares scroll/menu state between the header and quote banner; keep it around the page chrome.

Run `npm test` after editing content to detect missing local assets, invalid submenu references, or accidental outbound card links. Then run lint and build.

## Preview interactions

Navigation drawers, nested menus, touch/draggable carousels, space and brand filters, gallery layouts/lightboxes, country selection, and mobile footer accordions work locally. Former external destinations use `href="#"`; `LocalNavigation` prevents clicks from navigating or jumping the page. The home logo and in-page anchors stay local.

Only the USA homepage is implemented. Newsletter and chat are local previews without a backend or data submission. Country preferences can be remembered on this device, but country selection does not redirect. No analytics or third-party form scripts are included. The page uses `noindex` metadata.
