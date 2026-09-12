# Cosentino USA homepage replica

A component-based Next.js replica of the `/usa/` homepage, with responsive desktop and mobile layouts. Built with TypeScript, Tailwind CSS, Framer Motion, and Keen Slider. Images, logos, and fonts are served locally.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000/usa/. The root route renders the same homepage.

```sh
npm run lint
npm run build
npm start
```

Stop the running development server before starting the production server on the same port.

## Edit or replace sections

- `src/app/page.tsx`: homepage section order. Remove, reorder, or replace component imports here.
- `src/components/sections/`: one component per homepage section, from `Hero` through `Newsletter`.
- `src/components/layout/`: desktop/mobile navigation, country dialog, footer, and placeholder-link behavior.
- `src/components/layout/menus/`: individual second-level navigation panels and their registry.
- `src/components/ui/`: shared carousel, modal dialog, and floating controls.
- `src/data/`: editable card content, brand/color filters, gallery categories, navigation, and region options.
- `src/styles/`: section styles plus shared reference styles. `replica.css` adapts the original geometry to React controls. Tailwind utilities are available without resetting the reference typography.
- `public/assets/`: local media and fonts. `sources.json` records source URLs; `src/data/asset-map.json` maps original URLs to local assets.

To replace a section, edit its component and matching stylesheet. To change its cards, update the corresponding JSON file. Shared carousel behavior lives in `Carousel.tsx`.

## Preview interactions

Navigation drawers, nested menus, touch/draggable carousels, space and brand filters, gallery layouts/lightboxes, country selection, and mobile footer accordions work locally. Former external destinations use `href="#"`; `LocalNavigation` prevents clicks from navigating or jumping the page. The home logo and in-page anchors stay local.

Only the USA homepage is implemented. Newsletter and chat are local previews without a backend or data submission. Country preferences can be remembered on this device, but country selection does not redirect. No analytics or third-party form scripts are included. The page uses `noindex` metadata.
