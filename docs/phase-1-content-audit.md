# Defenseply Homepage — Phase 1 Content Audit

**Project:** Defenseply International LLP Website  
**Document:** Phase 1 Content Audit & Improvement Strategy  
**Reference Document:** `Defenseply_homepage_Brief.pdf` (Corporate Conglomerate Website Architecture Brief)  
**Date:** October 2026  
**Scope:** Homepage Content Audit, Accuracy Verification, and Non-Destructive Copy Improvement  

---

## 1. Executive Summary & Audit Overview

This content audit systematically evaluates all existing text, data files, claims, and messaging across the Defenseply homepage against the official corporate brief (`Defenseply_homepage_Brief.pdf`).

### Core Findings
1. **Misalignment in Brand Positioning:**
   - The current hero section communicates that Defenseply is *"one of the biggest plywood manufacturing companies in Kerala"*. 
   - In contrast, the corporate brief establishes Defenseply International LLP as a diversified corporate entity focusing on **advanced polymer extrusion, Wood Polymer Composites (WPC), Polyvinyl Chloride (PVC) cellular boards, material science, and industrial infrastructure**.
   - The company does not operate as a conventional plywood timber mill; rather, its products are non-timber cellular composite alternatives engineered to eliminate water damage, rot, and termite infestation.

2. **Categorization of Numerical and Factual Claims:**
   - **Supported by Existing Project & Brief:** KINFRA Industrial Park location (Kuttippuram, Kerala); strategic backing by the AP Group; focus on WPC/PVC extruded composites; lead-free and non-toxic formulations (per PDF Section 7).
   - **Present in Project but Requiring Independent Client Verification:** Specific facility area (45,000 sq. ft.); industrial land area (2 Acres on NH66); Class 1 fire-retardancy test certifications; RoHS compliance; specific density ranges (0.40–0.90 g/cc).
   - **Unsupported / Overstated Claims Requiring Modification:** Absolute claims of *"100% toxin-free"*, *"zero water absorption indefinitely"*, and unsubstantiated claims of being *"largest manufacturer"*.

3. **Approach to UI & Architecture:**
   - In accordance with Phase 1 instructions, the existing visual design, component tree, layout hierarchies, grids, styling, animations, and routing remain **strictly preserved**. 
   - All improvements are applied exclusively to content strings and data structures.

---

## 2. Section-by-Section Content Audit Matrix

---

### Section 1: Hero Section
* **Location in Code:** `src/components/sections/HeroSlider.tsx` (rendered via `src/components/sections/Hero.tsx`)
* **Existing Content:**
  * `aria-label`: *"One of Kerala's biggest plywood manufacturing companies"*
  * `h1`: *"ONE OF THE BIGGEST PLYWOOD MANUFACTURING COMPANIES IN KERALA"*
  * `p`: *"Decades of industrial expertise and calibrated precision manufacturing, delivering high-grade plywood, blockboards, and veneers across Kerala."*
  * CTAs: *"Explore Products"* (`#products`), *"Contact Us"* (`/contact-us`)
* **Current Purpose:** Regional supplier positioning with commercial plywood focus.
* **Alignment with PDF Brief:** **Severe Conflict.** The PDF explicitly positions Defenseply International LLP as an advanced composite material entity, rejecting the legacy retail plywood identity.
* **Disposition:** **Rewrite headline, subtext, and aria-label.** Retain buttons, links, and video background container.
* **Proposed Improvement:**
  * `aria-label`: *"Defenseply International LLP — Advanced Material Science and Composite Manufacturing"*
  * `h1`: *"ADVANCED MATERIAL SCIENCE & COMPOSITE MANUFACTURING"*
  * `p`: *"Defenseply International is committed to precision engineering in Wood Polymer Composites (WPC) and cellular PVC systems—delivering resilient, moisture-impervious alternatives for modern architecture."*
* **Missing Information / Flagged Items:**
  * Global export scale and international ISO certifications mentioned in the PDF brief are not yet substantiated with official registration certificates; claims are kept focused on verifiable manufacturing and material capabilities.

---

### Section 2: Who We Are
* **Location in Code:** `src/components/sections/WhoWeAre.tsx`
* **Existing Content:**
  * Eyebrow: *"WHO WE ARE"*
  * Headline: *"BUILDING A BETTER TOMORROW"*
  * Narrative:
    * Paragraph 1: *"DEFENSEPLY INTERNATIONAL LLP is a new WPC manufacturing venture backed by the AP Group, representing a strategic expansion into advanced composite building materials."*
    * Paragraph 2: *"We specialise in Wood Polymer Composite (WPC) and Polyvinyl Chloride (PVC) form boards, doors, and frames — engineered to deliver the timeless warmth and aesthetic appeal of natural wood, while eliminating traditional structural flaws such as water damage, termite degradation, and warping."*
  * Metrics:
    * `value`: *"WPC & PVC"*, `label`: *"core materials"*
    * `value`: *"Kuttippuram, Kerala"*, `label`: *"our location"*
    * `value`: *"AP Group"*, `label`: *"strategic backing"*
  * Commitment: *"Sustainable materials. Stronger spaces. A better tomorrow."*
  * Card Titles: *"ENGINEERED FOR REAL SPACES"*, *"PERFORMANCE MEETS DESIGN"*
* **Current Purpose:** Introduces company identity, materials, location, and parent group connection.
* **Alignment with PDF Brief:** **Strong Alignment.** Accurately references composite materials, WPC/PVC focus, AP Group backing, and environmental purpose.
* **Disposition:** **Retain and polish.** Minor refinement to terminology ("foam boards" instead of "form boards") and stylistic elevation.
* **Proposed Improvement:**
  * Correct *"form boards"* typo to *"foam boards"*.
  * Refine narrative to sharpen corporate tone while preserving the exact 3-column split layout and visual cards.
* **Missing Information / Flagged Items:**
  * Formal legal entity structure and date of incorporation.

---

### Section 3: Backed by the AP Group
* **Location in Code:** `src/data/about.json` (Headline) & `src/components/sections/About.tsx`
* **Existing Content:**
  * Headline: *"Backed by the AP Group\nDEFENSEPLY redefines building materials\nwith high-performance composite solutions"*
  * Metric in `WhoWeAre.tsx`: *"AP Group — strategic backing"*
* **Current Purpose:** Establishes commercial credibility through parent company backing.
* **Alignment with PDF Brief:** **Aligned with AP Group; NGH Group omitted.** The PDF brief Section 2 mentions both AP Group and NGH Group as strategic advisors/supporters. However, NGH Group is not present in existing project assets or verified documents.
* **Disposition:** **Retain AP Group backing.** Do NOT add NGH Group as a confirmed stakeholder until formally verified by client documentation.
* **Proposed Improvement:**
  * Maintain the headline in `src/data/about.json`:
    `"Backed by the AP Group\nDEFENSEPLY redefines building materials\nwith high-performance composite solutions"`
  * Avoid duplicating identical descriptive copy across Who We Are and About sections.
* **Missing Information / Flagged Items:**
  * Formal relationship, equity share, and role of NGH Group (flagged for client verification).
  * Specific industrial milestones of the AP Group.

---

### Section 4: Manufacturing Facility & Company Capabilities
* **Location in Code:** `src/data/about.json` (`description`, `hero`) & `src/components/sections/About.tsx`
* **Existing Content:**
  * Description: *"Headquartered at our 45,000 sq. ft. facility within the KINFRA Industrial Park in Kuttippuram, Kerala, DEFENSEPLY specializes in Wood Polymer Composite (WPC) and Polyvinyl Chloride (PVC) form boards, doors, and frames. Our solutions deliver the timeless aesthetic of natural wood while eliminating water damage, termite degradation, and warping for resilient, modern construction."*
  * Feature Badges: *"100% Water & Termite Proof"*, *"Unmatched Durability"*, *"100% Recyclable Composites"*
  * Hero Title: *"Advanced Manufacturing Facility"*
* **Current Purpose:** Communicates physical plant infrastructure and composite material attributes.
* **Alignment with PDF Brief:** **Strong Alignment.** The PDF brief Section 4 emphasizes the operational base at the KINFRA Industrial Park as an industrial backbone with uninterrupted utilities and rapid scalability.
* **Disposition:** **Retain location and plant context.** Refine technical wording and qualify absolute claims.
* **Proposed Improvement:**
  * Correct *"form boards"* to *"foam boards"*.
  * Qualify *"100% Water & Termite Proof"* to *"Engineered Waterproof & Termite Resistant"*.
  * Clarify that KINFRA Industrial Park provides institutional utilities and high-capacity extrusion lines.
* **Missing Information / Flagged Items:**
  * Specific number of extrusion lines, operating capacity in metric tons, and machinery brand names (cannot be determined from current files).

---

### Section 5: Statistics & Numerical Claims
* **Location in Code:** `src/data/about.json` (`statistics`)
* **Existing Content:**
  * Stat 1: `value`: *"45,000"*, `label`: *"sq. ft. KINFRA facility"*
  * Stat 2: `value`: *"2 Acres"*, `label`: *"industrial site on NH66"*
  * Stat 3: `value`: *"100%"*, `label`: *"recyclable & toxin-free"*
  * Stat 4: `value`: *"Zero"*, `label`: *"deforestation commitment"*
* **Current Purpose:** Numerical proof of facility scale and environmental responsibility.
* **Alignment with PDF Brief:** **Partial Alignment.** 
  * KINFRA ecosystem is verified by the PDF.
  * 45,000 sq. ft. and 2 Acres exist in site copy but are not explicitly mentioned in the PDF.
  * *"100% toxin-free"* is an unsupported absolute chemical claim. (PDF Section 7 references *"lead-free, non-toxic formulations"*).
* **Disposition:**
  * **Retain with note:** 45,000 sq. ft. and 2 Acres are retained as legacy project figures but flagged for client confirmation.
  * **Rewrite Stat 3:** Replace *"100% recyclable & toxin-free"* with *"Lead-Free & Recyclable Formulation"* to align with PDF Section 7.
  * **Retain Stat 4:** *"Zero Deforestation Commitment"* (accurate reflection of wood-replacement polymers).
* **Proposed Improvement:**
  * Stat 1: `value`: *"45,000"*, `label`: *"sq. ft. KINFRA facility"* [Flagged for client sign-off]
  * Stat 2: `value`: *"2 Acres"*, `label`: *"industrial site on NH66"* [Flagged for client sign-off]
  * Stat 3: `value`: *"Lead-Free"*, `label`: *"calcium-zinc formulation"*
  * Stat 4: `value`: *"100%"*, `label`: *"timber-free composite"*
* **Missing Information / Flagged Items:**
  * Architectural blueprint or tax registration confirming exact square footage and site acreage.

---

### Section 6: Our Products
* **Location in Code:** `src/components/sections/Products.tsx`, `src/data/products.ts`, `src/data/products.json`
* **Existing Content:**
  * Subtitle: *"Calibrated cellular composite boards, waterproof formulations, and precision-moulded architectural profiles engineered for demanding interior and structural environments."*
  * Catalog items:
    1. `pvc-foam-boards` — *"Lightweight. Durable. Versatile."*
    2. `pvc-colour-boards` — *"Vibrant finishes for modern spaces."*
    3. `wpc-boards` — *"The natural look. Greater performance."*
    4. `wpc-door-frames` — *"Tough, stylish & built to last."*
    5. `wpc-window-frames` — *"Architectural precision framing."*
    6. `wpc-doors` — *"Robust solid composite doors."*
    7. `3-layer-boards` — *"Enhanced strength & waterproof surface."*
    8. `3-layer-wpc-board` — *"High strength & structural performance."*
    9. `3-layer-wpc-colour-board` — *"Pre-coloured designer panels."*
    10. `3-layer-multi-board` — *"Co-extrusion technology for interiors."*
* **Current Purpose:** Interactive carousel displaying product profiles, specifications, and applications.
* **Alignment with PDF Brief:** **Strong Alignment with SBU Division 1 (Advanced Polymers) and Division 2 (Building Materials).**
* **Disposition:** **Retain all product items, slugs, card layouts, and carousel controls.**
  * Refine the section description and product taglines to maintain professional, technically sound language.
  * Avoid fabricating unverified ASTM/ISO test numbers.
* **Proposed Improvement:**
  * Subtitle: *"Calibrated cellular composite boards, high-density polymer matrices, and architectural profiles engineered for dimensional stability and moisture-critical environments."*
  * Refine taglines for precision and consistency.
* **Missing Information / Flagged Items:**
  * Third-party laboratory test reports for fire retardancy (ASTM E84 / UL 94) and screw withdrawal load test values.

---

### Section 7: Applications
* **Location in Code:** `src/components/sections/Applications.tsx`, `src/data/applications.json`, `src/data/applications.ts`
* **Existing Content:**
  * Kicker: *"Defenseply Applications"*
  * Heading: *"Meaningful design for the spaces we live in"*
  * Categories: Interiors, Commercial, Creative, Wardrobe, Bedroom, Kitchen.
  * Specific applications: Modular kitchens, living room partitions, built-in storage, ceiling details, office furniture, retail fixtures, CNC screens, full-height wardrobes, etc.
* **Current Purpose:** Showcase residential and commercial use-cases for composite boards.
* **Alignment with PDF Brief:** **Aligned with Architectural Solutions.**
* **Disposition:** **Retain all categories, sub-items, and image links.** Improve header and section kicker to elevate architectural authority.
* **Proposed Improvement:**
  * Kicker: *"ARCHITECTURAL APPLICATIONS"*
  * Heading: *"High-Performance Composite Solutions for Built Environments"*
* **Missing Information / Flagged Items:**
  * None; existing category structure accurately reflects the material's practical applications.

---

### Section 8: Inspiration Galleries
* **Location in Code:** `src/components/sections/InspirationGallery.tsx`
* **Existing Content:**
  * Title: *"INSPIRATION GALLERIES"*
  * Description: *"A curated showcase of waterproof cabinetry, precision architectural joinery, and contemporary interior environments engineered with DefensePly composite boards."*
  * 10 Bento Grid Items:
    1. Architectural Lounge & Wall Paneling
    2. Waterproof Kitchen Carcass & Sink Cabinetry
    3. Precision CNC Parametric Jali
    4. Floor-to-Ceiling Luxury Wardrobe System
    5. Fluted Bedroom Headboard Paneling
    6. Commercial Office Workstation Pods
    7. Modular Island Cabinetry & Countertops
    8. Walk-In Dressing Organizer System
    9. Solid Architectural Composite Doors
    10. Living Room Privacy Screen Lattice
* **Current Purpose:** Visual demonstration of fabrication possibilities (CNC routing, PU painting, joinery).
* **Alignment with PDF Brief:** **Aligned.** Showcases material capabilities and architectural solutions.
* **Disposition:** **Preserve all 10 items, image URLs, spans, and bento layout.**
* **Proposed Improvement:**
  * Description: *"A curated architectural showcase demonstrating precision routing, moisture-impervious cabinetry, and durable interior systems engineered with Defenseply cellular composite boards."*
* **Missing Information / Flagged Items:**
  * No fictitious client names or project locations exist in the copy; generic descriptive labels are appropriately maintained.

---

### Section 9: Latest Blogs
* **Location in Code:** `src/components/sections/BlogSection.tsx`, `src/data/blog.json`
* **Existing Content:**
  * Title: *"Latest Blogs"*
  * Description: *"Perspectives on sustainable composite engineering, waterproof architecture, and contemporary fabrication methods."*
  * 3 Articles:
    1. *"Why Modern Architecture is Transitioning from Timber to WPC & PVC Composites"*
    2. *"Designing Waterproof Kitchens & Bathrooms: The 2026 Material Guide"*
    3. *"CNC Craftsmanship & Precision Routing with 3-Layer Multi Boards"*
* **Current Purpose:** Technical articles explaining polymer science advantages over conventional timber.
* **Alignment with PDF Brief:** **Aligned with R&D and Technical Communication.**
* **Disposition:** **Retain all 3 articles, drawer interactivity, and metadata.** Minor refinement to the section title and description for higher editorial gravitas.
* **Proposed Improvement:**
  * Title: *"Technical Perspectives & Articles"*
  * Description: *"Material science insights, moisture-critical architectural considerations, and precision fabrication standards for polymer composites."*
* **Missing Information / Flagged Items:**
  * The article citing ChemOrbis 2023 import statistics is retained from existing content as editorial analysis; flagged for client review if they prefer in-house research.

---

### Section 10: Customer Testimonials
* **Location in Code:** `src/components/sections/Testimonials.tsx`, `src/data/testimonials.json`
* **Existing Content:**
  * Title: *"What Our Clients Say"*
  * Description: *"Verified architectural evaluations from leading commercial developers, modular interior designers, and precision fabricators."*
  * Testimonial 1: *"Ar. Faisal Rahman"*, Principal Architect, Studio Archiform
  * Testimonial 2: Anonymous quote regarding Calicut apartment towers
  * Testimonial 3: *"Sreeja Menon"*, Lead Interior Designer, Atelier Living Spaces
* **Current Purpose:** Social proof for architects and builders.
* **Alignment with PDF Brief:** Not specified in the brief.
* **Disposition:** **Flagged for Client Approval.**
  * Per Step 3.J instructions: The names and profile pictures appear to be unverified placeholder identities.
  * In Phase 1, we preserve the existing data structure to keep the UI intact, but we modify the overarching description to avoid claiming they are *"verified architectural evaluations"*.
  * The names and designations are flagged in this audit for formal client approval or replacement with real client endorsements.
* **Proposed Improvement:**
  * Description: *"Industry perspectives on composite material performance, moisture resistance, and fabrication reliability."*
* **Missing Information / Flagged Items:**
  * Written consent / verification from "Ar. Faisal Rahman" and "Sreeja Menon" to use their names and likenesses.

---

### Section 11: FAQs
* **Location in Code:** `src/components/sections/FAQ.tsx`, `src/data/faq.json`
* **Existing Content:**
  * Heading: *"FAQ's"*
  * Description: *"Everything you need to know about specifying, machining, and installing Defenseply cellular composite boards and profiles."*
  * Callout: *"Have a Custom Architectural Spec? Our engineering and specification team at the Kuttippuram manufacturing facility provides calibrated thickness samples and technical data sheets."*
  * 6 Q&A items covering:
    1. Comparison between PVC/WPC and marine plywood.
    2. Machining with standard tools & CNC routers.
    3. Surface finishes, paints, and laminates.
    4. Thicknesses (6mm–30mm), sizes (8x4 ft), and custom densities.
    5. Fire retardancy and commercial certifications.
    6. Physical sample kit ordering via WhatsApp.
* **Current Purpose:** Technical objection handling and specification support.
* **Alignment with PDF Brief:** **Strong Alignment.** Directly addresses material science, manufacturing tolerances, and customer inquiries.
* **Disposition:** **Retain all 6 questions and accordion functionality.** Refine technical answers to remove unverified absolutes (e.g. replacing unqualified "100% waterproof forever" with scientifically defensible wording).
* **Proposed Improvement:**
  * Refine Answer 1: Qualify that polymer composites possess closed-cell structures that resist moisture absorption and prevent warping or rot without relying on organic timber fibers.
  * Refine Answer 5: Clarify that boards are formulated with self-extinguishing polymer compounds and lead-free additives.
* **Missing Information / Flagged Items:**
  * Copies of official fire rating certificates (e.g., Class 1 / UL 94) and formal RoHS compliance test reports.

---

### Section 12: Footer & Contact Messaging
* **Location in Code:** `src/components/layout/Footer.tsx`, `src/data/site.ts`
* **Existing Content:**
  * Tagline: *"Reliable WPC and PVC solutions for spaces built with purpose."*
  * Callout Heading: *"Building the Future of Sustainable Architecture"*
  * Callout Body: *"Partner with India's emerging leader in WPC and PVC composite materials. Reach out to discuss your project, product requirements, or dealership opportunities."*
  * Links: Company (About, Products, Projects, Contact us), Social links (Facebook, Instagram, LinkedIn, Twitter, YouTube).
  * Copyright: *"© 2026 DefensePly. All rights reserved."*
* **Current Purpose:** Site-wide navigation, contact prompt, social media links, and legal notice.
* **Alignment with PDF Brief:** **Partial Alignment.** 
  * The PDF brief Section 9 recommends enterprise footer navigation including Corporate Governance, Media Center, Careers, Sustainability, Contact Our Headquarters, and Associated Companies.
  * However, dedicated pages for Corporate Governance, Media Center, and Careers do not yet exist in the codebase.
* **Disposition:** **Preserve existing working links.** 
  * Improve tagline and contact messaging to reflect corporate conglomerate identity.
  * Document recommended PDF links that are deferred until relevant pages are created.
* **Proposed Improvement:**
  * Tagline: *"Advanced WPC and cellular PVC composite solutions engineered for sustainable modern architecture."*
  * Callout Body: *"Partner with Defenseply International LLP to explore high-performance composite boards, custom architectural specifications, and commercial supply partnerships."*
* **Missing Information / Flagged Items:**
  * URL endpoints for Corporate Governance Charter, Press Room, and Careers Portal (deferred to Phase 2).

---

## 3. Classification of Factual & Numerical Claims

| Claim / Statement | Current Source | Status | Audit Action |
|:---|:---|:---|:---|
| **"One of the biggest plywood manufacturing companies in Kerala"** | `HeroSlider.tsx` | ❌ Unsupported / Contradicts PDF | **Removed.** Replaced with corporate material science focus. |
| **KINFRA Industrial Park, Kuttippuram, Kerala** | `about.json`, `WhoWeAre.tsx`, PDF | ✅ Supported | **Retained.** Confirmed by project and PDF brief. |
| **Strategic Backing by the AP Group** | `about.json`, `WhoWeAre.tsx`, PDF | ✅ Supported | **Retained.** Confirmed by project and PDF brief. |
| **Strategic Backing by the NGH Group** | PDF brief only | ⚠️ Unconfirmed in code | **Deferred.** Flagged for client documentation before publishing. |
| **45,000 sq. ft. Facility Area** | `about.json` | ⚠️ Present in code, unverified in PDF | **Retained but Flagged** for client confirmation. |
| **2 Acres Industrial Site on NH66** | `about.json` | ⚠️ Present in code, unverified in PDF | **Retained but Flagged** for client confirmation. |
| **"100% Toxin-Free"** | `about.json` | ❌ Absolute / Unsupported | **Modified** to *"Lead-Free & Recyclable Formulation"* (per PDF Section 7). |
| **"100% Water & Termite Proof"** | `about.json` | ⚠️ Absolute phrasing | **Modified** to *"Waterproof & Termite Resistant Cellular Core"*. |
| **"Zero Deforestation"** | `about.json` | ✅ Supported (Timber-Free) | **Retained.** Accurate representation of polymer composites. |
| **ISO 9001, 14001, 45001 Certifications** | PDF brief Section 1 | ⚠️ Brief mentions target; no certificates | **Flagged** for verification of active certificate numbers. |
| **Customer Testimonial Identities** | `testimonials.json` | ⚠️ Unverified placeholders | **Flagged** for client approval/replacement. |

---

## 4. Phase 1 Implementation Plan

1. Update `src/components/sections/HeroSlider.tsx` with refined corporate headline, subtext, and aria-label.
2. Update `src/components/sections/WhoWeAre.tsx` fixing the *"form boards"* typo and polishing the architectural narrative.
3. Update `src/data/about.json` with calibrated statistics, qualified environmental claims, and refined facility description.
4. Update `src/components/sections/Products.tsx` subtitle and product taglines.
5. Update `src/components/sections/Applications.tsx` kicker and heading.
6. Update `src/components/sections/InspirationGallery.tsx` description.
7. Update `src/components/sections/BlogSection.tsx` title and description.
8. Update `src/components/sections/Testimonials.tsx` description to remove unverified claims.
9. Update `src/data/faq.json` with qualified, technically precise answers.
10. Update `src/components/layout/Footer.tsx` tagline and callout copy.
11. Run TypeScript type-check and Next.js build validation.

---

## 5. Phase 2B Implementation & Current Verification Status

In Phase 2B, all homepage components and datasets underwent a second, thorough qualification and conversion enhancement pass without redesigning or expanding page layout:

1. **Brand Positioning & Hero (`src/components/sections/HeroSlider.tsx`):**
   - Replaced legacy plywood and absolute "moisture-impervious" claims with *"Engineered WPC & PVC Composite Materials"*.
   - Preserved working CTAs to `#products` and `/contact-us`.
2. **Who We Are (`src/components/sections/WhoWeAre.tsx`):**
   - Streamlined narrative, fixed typo (*"form boards"* -> *"foam boards"*), and established corporate identity and AP Group backing.
3. **KINFRA Manufacturing Facility Integration (`src/data/about.json`, `src/components/sections/About.tsx`):**
   - Re-focused About section into the KINFRA Manufacturing & Infrastructure hub without duplicating standalone infrastructure blocks.
   - Fixed broken action link (`#contact` -> `/contact-us`).
4. **Product Claims & Data (`src/data/products.json`, `Products.tsx`, `ProductGridCard.tsx`, `ProductStoryRow.tsx`):**
   - Systematically replaced absolute claims (*"100% Waterproof"*, *"Zero water absorption"*, *"Zero rot"*, *"Zero swelling"*, *"Class 1 fire certified"*, *"Lifetime Guarantee"*) with qualified, defensible terms (*"Moisture Resistant"*, *"Swelling Resistant"*, *"Self-extinguishing polymer formulation"*).
5. **Technical FAQs & Conversion (`src/data/faq.json`, `FAQ.tsx`, `FloatingActions.tsx`):**
   - Removed unverified promises of automatic sample binder mailings; directed inquiries to `/contact-us` and WhatsApp.
   - Updated floating quote banner to `/contact-us#project-form`.
6. **Gallery & Blog (`InspirationGallery.tsx`, `gallery.json`, `BlogSection.tsx`):**
   - Retained existing galleries and blog drawers; cleansed all 354 lines of `gallery.json` of unverified absolute claims.
7. **Testimonials (`Testimonials.tsx`, `testimonials.json`):**
   - Removed unverified "verified architectural evaluations" statement; replaced "Zero warping" with "Excellent dimensional stability"; flagged identities for client sign-off.

Detailed file-by-file changes and verification requirements are documented in [docs/phase-2b-targeted-improvements.md](file:///home/rashiee/Desktop/ck%20thynck/defenseply/docs/phase-2b-targeted-improvements.md).

