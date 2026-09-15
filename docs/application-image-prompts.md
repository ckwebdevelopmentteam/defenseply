# Defenseply application images

No images have been generated. Paste each prompt into ChatGPT; save the finished image under the exact filename shown. Generate one image per prompt, not a collage. There are six categories, each with four portrait images and two hero variants (36 files total).

## File and crop requirements

- Cards and editorial gallery: **1200 × 1600, 3:4**. The same four files appear on the homepage and category page. At 1920px the homepage shows roughly 604 × 805px cards; at 390px roughly 318 × 424px. The ratio stays constant; text overlays the top/bottom.
- Desktop hero: **2400 × 1350, 16:9**, used at widths above 600px with `object-fit: cover`; edges can crop as the viewport changes.
- Mobile hero: **1200 × 1600, 3:4**, used at widths up to 600px. Text is overlaid near the bottom. Use the desktop image as a visual reference when creating it.
- ChatGPT may output a nearby supported resolution. Preserve the requested ratio when cropping/exporting; never stretch. Export real WebP, ideally under 350 KB per card and 650 KB per hero. Renaming a PNG extension does not convert it. The loader also accepts `.png`, `.jpg`, `.jpeg`, or `.avif` with the same basename, so conversion is optional while reviewing.
- Drop files into the folders below. No code edits needed. Refresh in development; for the production preview run `npm run build` and restart `npm start`. Missing files render neutral placeholders without broken-image requests. If only the desktop hero is supplied, it also serves mobile temporarily.
- These are conceptual applications, not verified Defenseply projects or product specifications. Do not add certification marks, claims, or fabricated client branding. Creative fabrication scenes show routing; do not depict laser-cutting PVC.

## Interiors

Folder: `public/assets/applications/interiors/`

### hero-desktop.webp — 2400 × 1350 (16:9)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A contemporary Kerala apartment kitchen, matte warm-white PVC board cabinet fronts, sage lower cabinets, slim pulls, naturally lit, cabinetry is the main subject; any stone worktop is incidental. Create a wider establishing view with surrounding architecture. Landscape 16:9, target 2400 × 1350 pixels. Keep the principal furniture and material detail within the middle 60% of the frame; leave calm darker space in the lower-left third for white website text added later. No text in the image. Preserve architectural verticals, eye-level 35mm lens, no ultra-wide distortion.
```

### hero-mobile.webp — 1200 × 1600 (3:4)

Upload the desktop hero in the same chat, then paste:

```text
Reframe this same scene as a portrait 3:4 architectural photograph, target 1200 × 1600 pixels. Preserve the same room, furniture, material palette, lighting and design. Extend the composition naturally instead of squeezing or stretching. Keep the key feature in the central 70% and quiet space in the lower third for text added by the website. No text, logos, watermarks or people.
```

### modular-kitchens.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A contemporary Kerala apartment kitchen, matte warm-white PVC board cabinet fronts, sage lower cabinets, slim pulls, naturally lit, cabinetry is the main subject; any stone worktop is incidental. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### living-room-partitions.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: An airy contemporary living room with a full-height CNC-routed WPC board room divider in a warm oak-look finish, framed panel construction, restrained linen furniture. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### built-in-storage.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A reading corner with floor-to-ceiling PVC board built-in cupboards and open shelves, muted taupe laminate finish, concealed hinges and realistic joinery. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### ceiling-details.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A residential lounge with a carefully detailed suspended decorative board ceiling, slim panels and integrated warm lighting, clean shadow gaps, visually plausible supported non-structural installation. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

## Commercial

Folder: `public/assets/applications/commercial/`

### hero-desktop.webp — 2400 × 1350 (16:9)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A refined modern office with matte-grey PVC board workstation storage, oak-look board desks with realistic metal support frames, daylight and a restrained terracotta accent. Create a wider establishing view with surrounding architecture. Landscape 16:9, target 2400 × 1350 pixels. Keep the principal furniture and material detail within the middle 60% of the frame; leave calm darker space in the lower-left third for white website text added later. No text in the image. Preserve architectural verticals, eye-level 35mm lens, no ultra-wide distortion.
```

### hero-mobile.webp — 1200 × 1600 (3:4)

Upload the desktop hero in the same chat, then paste:

```text
Reframe this same scene as a portrait 3:4 architectural photograph, target 1200 × 1600 pixels. Preserve the same room, furniture, material palette, lighting and design. Extend the composition naturally instead of squeezing or stretching. Keep the key feature in the central 70% and quiet space in the lower third for text added by the website. No text, logos, watermarks or people.
```

### office-furniture.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A refined modern office with matte-grey PVC board workstation storage, oak-look board desks with realistic metal support frames, daylight and a restrained terracotta accent. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### retail-fixtures.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A premium small retail store with taupe PVC board display shelving and a curved-looking faceted board sales counter, elegant architectural lighting, blank merchandise packages. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### exhibition-displays.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A sophisticated modular exhibition booth made from flat CNC-cut PVC foam boards, ivory and muted burgundy palette, freestanding display plinths and blank sign panels, no written branding. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### reception-signage.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A contemporary office reception with layered matte PVC board wall panels, a blank dimensional geometric sign, board-clad reception furniture and soft side lighting. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

## Creative

Folder: `public/assets/applications/creative/`

### hero-desktop.webp — 2400 × 1350 (16:9)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A precise CNC-routed WPC decorative screen in warm walnut-look finish, refined repeating geometric openings, softly lit interior behind it, close architectural composition. Create a wider establishing view with surrounding architecture. Landscape 16:9, target 2400 × 1350 pixels. Keep the principal furniture and material detail within the middle 60% of the frame; leave calm darker space in the lower-left third for white website text added later. No text in the image. Preserve architectural verticals, eye-level 35mm lens, no ultra-wide distortion.
```

### hero-mobile.webp — 1200 × 1600 (3:4)

Upload the desktop hero in the same chat, then paste:

```text
Reframe this same scene as a portrait 3:4 architectural photograph, target 1200 × 1600 pixels. Preserve the same room, furniture, material palette, lighting and design. Extend the composition naturally instead of squeezing or stretching. Keep the key feature in the central 70% and quiet space in the lower third for text added by the website. No text, logos, watermarks or people.
```

### cnc-screens.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A precise CNC-routed WPC decorative screen in warm walnut-look finish, refined repeating geometric openings, softly lit interior behind it, close architectural composition. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### relief-panels.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: An elegant matte-ivory PVC board feature panel with shallow CNC-routed geometric relief, grazing daylight revealing clean dimensional edges, fabricated panel detailing. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### layered-installations.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A sculptural wall installation of layered flat PVC colour boards in terracotta, sand and muted plum, precise spacers and subtle shadows in a minimal interior. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### designer-panels.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A contemporary lounge wall composed of custom flat WPC designer panels with subtle routed linear patterns, warm brown wood-look laminate, sharp clean joints and soft directional light. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

## Wardrobe

Folder: `public/assets/applications/wardrobe/`

### hero-desktop.webp — 2400 × 1350 (16:9)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A full-height wardrobe made with matte sand-coloured PVC board shutters, slim vertical bronze pulls, clean reveals, contemporary Indian apartment bedroom. Create a wider establishing view with surrounding architecture. Landscape 16:9, target 2400 × 1350 pixels. Keep the principal furniture and material detail within the middle 60% of the frame; leave calm darker space in the lower-left third for white website text added later. No text in the image. Preserve architectural verticals, eye-level 35mm lens, no ultra-wide distortion.
```

### hero-mobile.webp — 1200 × 1600 (3:4)

Upload the desktop hero in the same chat, then paste:

```text
Reframe this same scene as a portrait 3:4 architectural photograph, target 1200 × 1600 pixels. Preserve the same room, furniture, material palette, lighting and design. Extend the composition naturally instead of squeezing or stretching. Keep the key feature in the central 70% and quiet space in the lower third for text added by the website. No text, logos, watermarks or people.
```

### full-height-wardrobes.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A full-height wardrobe made with matte sand-coloured PVC board shutters, slim vertical bronze pulls, clean reveals, contemporary Indian apartment bedroom. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### walk-in-closets.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A premium walk-in closet with oak-look finished WPC board cabinetry, drawers and open shelves, realistic hanging rails, neatly arranged unbranded clothing and warm lighting. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### sliding-shutters.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A compact bedroom with wide matte sage PVC board sliding wardrobe shutters and visible realistic sliding tracks, refined minimal furniture. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### dressing-units.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A built-in dressing unit in taupe PVC board with discreet drawers, open shelving and a softly lit mirror, camera angled to avoid showing a photographer. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

## Bedroom

Folder: `public/assets/applications/bedroom/`

### hero-desktop.webp — 2400 × 1350 (16:9)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A serene bedroom with a broad headboard feature wall made from walnut-look finished WPC board panels, narrow shadow joints, linen bedding and gentle morning light. Create a wider establishing view with surrounding architecture. Landscape 16:9, target 2400 × 1350 pixels. Keep the principal furniture and material detail within the middle 60% of the frame; leave calm darker space in the lower-left third for white website text added later. No text in the image. Preserve architectural verticals, eye-level 35mm lens, no ultra-wide distortion.
```

### hero-mobile.webp — 1200 × 1600 (3:4)

Upload the desktop hero in the same chat, then paste:

```text
Reframe this same scene as a portrait 3:4 architectural photograph, target 1200 × 1600 pixels. Preserve the same room, furniture, material palette, lighting and design. Extend the composition naturally instead of squeezing or stretching. Keep the key feature in the central 70% and quiet space in the lower third for text added by the website. No text, logos, watermarks or people.
```

### headboard-walls.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A serene bedroom with a broad headboard feature wall made from walnut-look finished WPC board panels, narrow shadow joints, linen bedding and gentle morning light. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### bedside-furniture.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A close architectural view of a matte ivory PVC board bedside cabinet with clean drawer joints and slim pulls, softly textured bedding and an understated lamp. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### study-corners.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A bedroom study nook with sage PVC board desktop and storage, realistic support brackets, oak-look shelving, daylight and a simple upholstered chair. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### coordinated-storage.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A calm bedroom corner showing coordinated matte taupe board dresser, closed cabinets and a low bench with a realistic supported structure, understated styling. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

## Kitchen

Folder: `public/assets/applications/kitchen/`

### hero-desktop.webp — 2400 × 1350 (16:9)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A contemporary kitchen with matte grey PVC board base cabinets, one open door revealing a clean white board carcass and realistic hinges, worktop not the hero. Create a wider establishing view with surrounding architecture. Landscape 16:9, target 2400 × 1350 pixels. Keep the principal furniture and material detail within the middle 60% of the frame; leave calm darker space in the lower-left third for white website text added later. No text in the image. Preserve architectural verticals, eye-level 35mm lens, no ultra-wide distortion.
```

### hero-mobile.webp — 1200 × 1600 (3:4)

Upload the desktop hero in the same chat, then paste:

```text
Reframe this same scene as a portrait 3:4 architectural photograph, target 1200 × 1600 pixels. Preserve the same room, furniture, material palette, lighting and design. Extend the composition naturally instead of squeezing or stretching. Keep the key feature in the central 70% and quiet space in the lower third for text added by the website. No text, logos, watermarks or people.
```

### base-cabinets.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A contemporary kitchen with matte grey PVC board base cabinets, one open door revealing a clean white board carcass and realistic hinges, worktop not the hero. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### wall-cabinets.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A bright kitchen with warm-white PVC board wall cabinets, pale oak-look open shelf, neat joints and discreet under-cabinet lighting, no dominant marble. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### pantry-storage.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A full-height kitchen pantry in muted sage PVC board with one open shutter showing organised shelves, realistic shelf thicknesses and hinges, blank jars without lettering. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```

### breakfast-units.webp — 1200 × 1600 (3:4)

```text
Create one photorealistic editorial architectural photograph for the Defenseply website. Contemporary Indian architecture, refined Cosentino-like photographic restraint, warm whites, sand, taupe and charcoal, natural daylight, realistic board joinery and hardware, believable material thickness and proportions. Show finished WPC/PVC board applications, not raw plywood layers, marble products or plastic toys. No people, text, lettering, logos, watermarks, collages or exaggerated gloss. This is concept inspiration, not a documented completed project. Scene: A compact breakfast corner with a supported WPC board storage bench and matte sand board cabinet fronts, warm natural light, modest kitchen work surface incidental. Portrait 3:4, target 1200 × 1600 pixels. Frame a distinct medium-wide view of this application, not a repeat of the hero. Keep the important board application in the middle 75% with clear edges; leave quiet darker areas in the top 15% and bottom 15% for website labels added later. Eye-level 40mm architectural lens, straight verticals, realistic lighting, crisp material detail.
```
