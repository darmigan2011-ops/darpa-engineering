# DARPA Engineering Website — Project Audit

> Historical record: this document describes earlier implementations and measurements. It is not a current release report. See `RECOVERY_REPORT.md` for the October 11 redesign and its verified checks.

- **Audit date:** 2026-10-04
- **Scope:** Current working copy at `C:\Users\darmi\darpa-engineering`
- **Status:** Audit and documentation only. The separate backup was not accessed; application files and existing build output were not changed.

## Executive summary

The working copy is a React 19 single-page site built with Vite 8. Its current direction is a dark, blue/cyan, animation-heavy engineering showcase: a 3D hero, company-story section, capabilities cards, project showcase, animated metrics, contact CTA and footer. There is a useful start on reusable visual tokens, responsive layouts, a mobile navigation drawer, theme selection and section components.

The main blockers to a trustworthy public B2B website are content accuracy and working functionality. The source contains numerous unsupported numerical, certification, customer, project, equipment and capability claims. The active contact form has no delivery service and its submit control is rendered as a `div`, so it does not submit as a form button. The current aesthetic leans toward a generic sci-fi/HUD presentation rather than showing an identifiable industrial manufacturer. Several project-specific technical issues also need attention before release: hard-coded root paths for the logo conflict with the GitHub Pages base path, two similar deployment workflows run on the same trigger, the initial JavaScript bundle is large for a brochure site, and accessibility behavior is incomplete.

The recommended direction is to retain the existing React/Vite foundation and useful design primitives, then incrementally rebuild the page around verified company facts, authentic manufacturing imagery, clear information hierarchy and a lighter, practical interaction model. Do not carry forward unverified claims without owner confirmation.

## Read-only review completed before implementation

The audit document and development plan were already present as untracked working-copy files. I reviewed and retained them rather than replacing their contents. The read-only review covered all project source components, the complete global stylesheet, package manifest and lockfile metadata, public/source assets, HTML and Vite configuration, both Pages workflows, repository status/remotes, and the existing generated build output. No project files or the existing `dist/` output were changed during this inspection.

### Direct answers to the requested review questions

1. **Framework:** React 19 with Vite 8; one client-rendered page and no router.
2. **Styling:** hand-authored global CSS variables/rules in `src/index.css`, plus extensive inline styles in JSX. No Tailwind or CSS framework is installed.
3. **Components needed by the current page:** `Navbar`, `Hero`, `About`, `Services`, `Showcase`, `DataVisualization`, `CTA`, and `Footer`, plus the theme/smooth-scroll support and several visual effects. These are the imports in `App.jsx`, not a recommendation to keep every effect or implementation.
4. **Unnecessary abstractions:** `MagneticButton` renders a clickable `motion.div` rather than a native control; `SectionHeading`, `CornerBracket`, `SectionNumber`, and `TechnicalLabel` are generic presentation helpers with little value beyond repeated styling; the separate `Hero3D` is unused; `ErrorBoundary`/`SafeHero`/`SafeServices` are wrapped around sections whose decorative 3D dependencies are not essential to the page.
5. **Repetitive/template-like code:** many components repeat the same full-width centered heading, numbered label, gradient title, rounded dark card, reveal animation and blue glow. Several sections map large fabricated arrays into identical cards. JSX is often hundreds of lines of inline presentation rather than a small number of meaningful page elements.
6. **Visually weak areas:** the hero has no semantic H1 and delays key copy behind a fixed loader; the persistent sci-fi scene/HUD draws attention away from the manufacturer; the eight-card services grid, project bento, dashboard, repeated metrics, and equally sized cards lack a grounded content hierarchy. Body copy is often small and low-contrast, while section padding reaches 200–220px.
7. **Useful animation:** brief link/button feedback or a restrained mobile-menu transition can aid interaction. Native scrolling and a static composition already communicate this one-page site's content.
8. **Unnecessary animation:** the continuous Three.js star/particle/ring/camera motion, eight always-running R3F canvases, fixed 2.2-second loader, floating cursor/spotlight, scan lines, fake metric count-ups/sparklines/dials, perpetual scroll prompts, broad parallax, and reveal animation on nearly every item do not clarify manufacturing capability.
9. **Assets:** `public/brand/darpa-engineering-logo.webp` is the working wordmark; the official company site also publishes a real press-shop photograph (source recorded below). `src/assets/hero.png` is an abstract geometric graphic, not factory evidence; `src/assets/vite.svg` is starter artwork. The active bento currently loads remote Unsplash stock images, and other dormant sections reuse those same images while labeling them as specific DARPA facilities. The favicon is a generic X mark; `public/logo.svg` and `public/icons.svg` are not referenced by the active page.
10. **Broken or misleading links:** there is no active GitHub link to correct in `src/`; the footer has a `Careers` link to `#`, and the inactive article component has a `Read More` link to `#` that does nothing. Several calls to `scrollIntoView` work but bypass native anchor behavior. The active `#services` fragment is attached to the first card rather than the section start. The two contact forms are not connected to a delivery service; the active submit control is not a native submit button and displays a false success state.
11. **GitHub repository:** `origin` is credential-free and resolves to `https://github.com/darmigan2011-ops/darpa-engineering.git`; the public repository page URL is `https://github.com/darmigan2011-ops/darpa-engineering`. There is currently no repository-page link in the active application. `vite.config.js` configures the separate Pages deployment base at `/darpa-engineering/`.
12. **Accessibility:** no page-level H1 or skip link; a global `cursor: none` and custom cursor suppress native cues; buttons and links lack consistent keyboard focus styles; the mobile menu omits expanded/controlled state, Escape behavior and focus considerations; form labels are not associated with inputs; one submit action is a `div`; accordions/dialogs in inactive components have incomplete keyboard semantics. Reduced-motion support is partial.
13. **Responsive design:** media queries exist, but the same breakpoints are injected again in `App.jsx`, duplicated in CSS and rely heavily on `!important`. Mobile behavior is primarily desktop grids forced into fewer columns; the hero's fixed canvas/HUD and long text/callouts are not purpose-designed for small screens. No browser is available on `PATH` in this environment, so the read-only phase could not produce actual viewport screenshots.
14. **Unused dependencies:** `gsap` has no source import. React Three Fiber/Drei/Three are used only for decorative 3D; Lenis is used only for custom smooth scrolling; Framer Motion is pervasive but largely duplicates simple reveal/hover transitions. `@types/react` packages are listed despite JavaScript-only source and no TypeScript config; these should be reconsidered if no editor/tooling requirement needs them.
15. **Duplicate code/configuration:** responsive rules and button/card/section treatments are repeated; contact is implemented twice; the project has two GitHub Pages workflows with the same push/manual triggers; numerous inactive section components are retained alongside the active versions. There is no configured automated test or type-check script.

### Source and repository verification

The company's public site was checked at `https://darpaengi.com/`, `/service/`, `/about/`, and `/contact/`. Those first-party pages describe stamping, casting and tooling divisions; identify Hosur, Tamil Nadu as the India location; and publish `baskar@darpaengi.com` and `+91-979-000-9817`. These are the safe starting facts for this pass. The official pages also make more specific claims (certification, founding year, materials, machines and capacity), but capacity figures conflict between pages (for example, 160kg vs 180kg for the electric furnace). Avoid reproducing fine-grained specifications or credentials until the company confirms current values and documentation.

The official site publishes the press-shop image at `https://darpaengi.com/wp-content/uploads/2024/04/cropped-Veritas_Press_Shop-scaled-1-1.jpg`. It is actual company-facility imagery and is suitable as a single illustrative image; stock photos should not be presented as DARPA projects, products or facilities. There are no approved project case-study details in the inspected repository.

The current local Git configuration reports `origin https://github.com/darmigan2011-ops/darpa-engineering.git` for fetch and push, with no embedded credential. A credential-like URL was recorded in an earlier audit snapshot; the current configuration is clean, but this does not by itself establish that any formerly exposed token was revoked. No fetch, push or other remote operation was performed.

### Current working-copy checks

- The application tree was already dirty before this pass (25 modified tracked files and 14 untracked paths, including the existing audit/plan). All were treated as existing work; nothing was reset, staged or committed.
- `npm ls --depth=0`: all declared direct dependencies are installed.
- `npm run lint`: exits successfully with six existing warnings (two React fast-refresh export warnings and four unused identifiers/parameters in `Hero.jsx`); no lint errors.
- `npm run build -- --outDir C:\Users\darmi\AppData\Local\Temp\opencode\darpa-audit-dist --emptyOutDir`: succeeds without replacing `dist/`; output is 1,314.91kB JavaScript (364.91kB gzip) and 13.97kB CSS (3.86kB gzip).
- `package.json` has no test or type-check script, and no browser automation dependency/browser executable was found. The running page has not yet received a manual visual/keyboard viewport test.

### Implementation direction

Keep React/Vite and the useful brand wordmark. Recompose the live page around a semantic hero, the three first-party-confirmed manufacturing divisions, a concise company/market explanation, a practical enquiry path and contact details. Use the official press-shop image once, remove stock/fabricated project and metrics content, and favor the brand's blue/indigo with industrial neutrals, stronger body type and thin rules. Replace 3D/HUD/loader/cursor/dashboard effects with native links, controls and small CSS interaction feedback. Use the actual repository page for the requested GitHub link. Keep the enquiry honest: without a configured backend, prepare an email draft and state clearly that the visitor must send it themselves.

## 1. Scope and method

Reviewed the project tree, source files and components, package manifest and lockfile, global CSS, public and source assets, Vite configuration, GitHub Actions workflows, Git state/configuration, and the existing generated `dist/index.html`. The audit did not inspect `node_modules` internals or access the separate backup.

Validation performed:

- `npm ls --depth=0`: direct dependencies are installed.
- `npm run lint`: completes with **six warnings** and no reported errors.
- `npm run build -- --outDir <temporary directory outside the project>`: production build succeeds. Building outside the project avoided replacing the existing ignored `dist/` output.
- No browser automation or test script is configured, so responsive behavior and runtime interactions still need hands-on browser checks during implementation.

## 2. Current technology stack

| Area | Current implementation |
| --- | --- |
| UI | React 19.2.7, React DOM 19.2.7, JavaScript/JSX |
| Development/build | Vite 8.1.0, `@vitejs/plugin-react` 6.x, npm lockfile v3 |
| Animation | Framer Motion 12.42.0; Lenis 1.3.26 for desktop smooth scrolling |
| 3D | Three.js 0.185.1, `@react-three/fiber` 9.7.0, `@react-three/drei` 10.7.8 |
| Other direct dependency | GSAP 3.15.0 is listed but no source import/use was found |
| Lint | Oxlint 1.69.0 declared; 1.71.0 installed, with React/Oxc plugins |
| Styling | One 660-line global `src/index.css`, design tokens, media queries and extensive inline React styles |
| Routing/data/backend | No router, content CMS, server, API or form backend found; navigation is by in-page anchors |
| TypeScript/Tailwind | No `.ts`/`.tsx`, TypeScript compiler/configuration, Tailwind dependency or Tailwind configuration found. React type packages are present despite the JS-only source. |
| Runtime checked | Node 24.15.0 and npm 11.12.1 in this environment. Both deployment workflows configure Node 20. |

There is no `test` script in `package.json`; the available scripts are `dev`, `build`, `lint` and `preview`.

## 3. Directory structure and current architecture

```text
.
├── .github/workflows/
│   ├── main.yml                 # GitHub Pages build/deploy workflow
│   └── deploy.yml               # Similar second workflow; untracked in current worktree
├── public/
│   ├── brand/darpa-engineering-logo.webp
│   ├── favicon.svg
│   ├── icons.svg
│   └── logo.svg
├── src/
│   ├── App.jsx                  # Single-page composition, effects, error boundaries
│   ├── main.jsx                 # React StrictMode entry point
│   ├── index.css                # Global tokens, reset, components, responsive rules
│   ├── assets/                  # hero.png and Vite starter logo
│   ├── components/              # Page sections and shared UI elements
│   └── lib/                     # Theme provider and Lenis setup
├── index.html                   # SPA shell, metadata and Google Fonts links
├── package.json / package-lock.json
├── vite.config.js                # GitHub Pages base path and build warning threshold
├── README.md                     # Unmodified Vite starter instructions
├── test.txt                      # Contains only `test`
├── dist/                         # Existing ignored production output
└── node_modules/                 # Installed dependencies
```

### Rendered page and routing

`src/main.jsx` mounts `App` in React `StrictMode`. `App.jsx` wraps the single-page composition in a theme provider, sets up Lenis, injects additional responsive CSS, and mounts a header, loading overlay, scroll progress, main content and footer. The rendered sections are `Hero`, `About`, `Services`, `Showcase`, `DataVisualization`, and `CTA`; there is no separate route system.

The navigation uses fragment IDs (`#hero`, `#about`, `#showcase`, `#data-viz`, `#contact`). The `#services` ID is on the first capability card rather than the section heading, so that link can land partway into the section.

Several components are present but not imported by `App.jsx`: `Articles`, `Contact`, `FAQ`, `Gallery`, `Industries`, `Process`, `Statistics`, `Testimonials`, `WhyChoose`, and `Hero3D`. `SectionHeading` and `CornerBracket` are also not used as React components. These appear to be earlier or alternate page sections and include additional claims and interactions; their existence should not be mistaken for current, visible site functionality. There are two separate contact-form implementations (`CTA` and the inactive `Contact`) with different behavior.

### Assets and visual resources

- `public/brand/darpa-engineering-logo.webp` is used for the wordmark in the hero, navigation, loader and footer. It is the most immediately reusable brand asset.
- `public/logo.svg` is an alternate logo and `public/icons.svg` is a symbol sprite; neither is referenced by the active application.
- `public/favicon.svg` is a stylized X mark rather than the company wordmark.
- `src/assets/hero.png` is an abstract blue/purple geometric illustration, not manufacturing photography. `src/assets/vite.svg` is leftover starter artwork.
- The active project cards load five images from Unsplash URLs. Other unused sections include more remote stock-image references. No authentic facility, equipment or product image library was found in the project.
- `index.html` loads Inter, Space Grotesk and JetBrains Mono from Google Fonts. There are no locally hosted font files. Inline SVGs are used for most visible interface icons.

## 4. Existing website review

### What is already good and reusable

- The core stack is current, straightforward and appropriate for a small React marketing site; no router is needed for the current one-page structure.
- The CSS has a useful starting token set for color, typography, spacing, radii, animation timing and content width.
- The wordmark is already used in multiple page locations. The dark graphite/steel palette, restrained grid motifs, technical labels and consistent button/section patterns offer reusable starting material.
- The page has a sensible high-level flow from hero to company story, manufacturing/capability content, proof or examples and a contact action.
- There is a working mobile navigation concept, fluid type sizes, grid/flex responsive rules, image `alt` text in the active showcase, a persisted theme preference, and some reduced-motion handling.
- Framer Motion already covers many reveal and interaction patterns. If retained selectively, it can support subtle motion without adding another animation dependency.
- The `main`, `nav`, `section`, `footer`, heading and form elements provide a reasonable semantic baseline in several areas.

### What looks unfinished or generic

- The dominant black/blue/cyan glow, grid overlays, orbital 3D objects, scan lines, monospace labels, fixed HUD corners and telemetry styling make the page resemble a generic futuristic technology or gaming demo more than a grounded industrial engineering company.
- The active project imagery is externally hosted stock photography, repeated in several files, and is not evidence of DARPA Engineering's actual facility or work. The current local hero illustration is similarly generic.
- Many sections rely on broad phrases such as “performance,” “systems,” “intelligence,” “worldwide,” and “engineering excellence” rather than a specific, verifiable explanation of the company and its manufacturing work.
- The animated dashboard, invented-looking project cards and testimonials imply detailed operational proof that the site does not substantiate. The generated sparklines are synthetic curves, not sourced operating data.
- Some small uppercase mono text, low-opacity labels and glows are decorative at the expense of readability. The information density and motion can compete with the actual message.
- The hero has a logo and tagline, but no semantic `<h1>`. A first-time visitor should be able to identify the company and its core manufacturing work without waiting for a long animation or interpreting a 3D scene.

### Responsive behavior

Responsive rules exist at 1024px, 768px, 640px and 480px, with a separate navigation switch at 900px. Several grids collapse, the footer and callouts reflow, and touch devices fall back to a native cursor. This is a useful foundation, but it has not been verified at real viewport sizes. `App.jsx` injects a second set of layout overrides that substantially overlaps the rules in `src/index.css`, often using `!important`; this makes responsive behavior harder to maintain and can mask overflow rather than reveal its source. The fixed HUD and hero canvas also persist beyond the hero section.

### Existing functionality

- Desktop and mobile navigation scroll to section fragments; the mobile menu can be dismissed by selecting a link or clicking its backdrop.
- A light/dark/system theme preference is stored in local storage.
- A page loading overlay, scroll progress bar, Lenis scrolling, cursor treatment, hover states and scroll-reveal animations are present.
- The active “Start a Project” contact area contains name, email and message fields, but is not connected to any service. Its success state only changes local React state and promises a response. More importantly, `MagneticButton` renders a `motion.div`, so the CTA's `type="submit"` is not a native form submit button and clicking it does not submit the form.
- The inactive `Contact.jsx` form only raises a browser alert. It is not a working lead-delivery path either.
- The active navigation has no multi-page routing. Several dormant links, such as the footer careers link and article “Read More,” are placeholders.

## 5. Findings requiring attention

| Priority | Finding | Evidence / impact |
| --- | --- | --- |
| **Historical / verify owner action** | Previous Git remote snapshot contained a credential-like value | The current `git config --local` and `git remote -v` show a credential-free HTTPS origin (`https://github.com/darmigan2011-ops/darpa-engineering.git`). The prior audit recorded a credential-like URL; its value remains omitted. This current configuration does not prove that a previously exposed token was revoked. No remote operation was performed during this review. |
| **Critical** | Company and performance claims need evidence/approval | Examples appear in `Hero.jsx` (years, system counts and sigma claim), `About.jsx` (materials/process counts, certification, tolerance and process statements), `Services.jsx` (software, robotics, R&D and digital-engineering claims), `Showcase.jsx` (named project types, customers, rates, cycle times and tolerances), `DataVisualization.jsx` (counts, rates and percentages), and `Footer.jsx` (certification/export statements). `Testimonials.jsx` contains named customer quotes. These are in the source, but no substantiation is included. Keep only content the company confirms; do not publish an invented or misleading metric, testimonial, customer, specification, certification or capability. |
| **High** | Contact action is not functional | `CTA.jsx` has no network submission or mail handler; its submit control is a `motion.div` via `MagneticButton`, not a `<button type="submit">`. The UI can claim success without sending a message. Confirm the intended delivery mechanism before presenting a success state. |
| **High** | GitHub Pages public-asset paths are inconsistent | `vite.config.js` sets `base: '/darpa-engineering/'`. Vite correctly prefixes the favicon in the existing generated HTML, but logo paths in React components are literal root paths such as `/brand/darpa-engineering-logo.webp`; those strings are not automatically base-prefixed and can resolve outside the deployed project path. Use a base-aware asset URL or imported asset. |
| **High** | Duplicate deployment workflows | `.github/workflows/main.yml` and `.github/workflows/deploy.yml` both build and deploy Pages on pushes to `main` and manual dispatch. Both can run for the same change. Keep one verified workflow in the deployment phase; note that `deploy.yml` is currently untracked. |
| **High** | Git worktree is already substantially modified | At the start of this review, branch `main` had 25 modified tracked files and 14 untracked paths, in addition to the six existing commits. Treat all of that as user work. Do not reset, overwrite, stage broadly or commit it as a baseline without first reviewing its ownership and intended treatment. No implementation or Git commit was made during the read-only review. |
| **High** | Heavy, always-active visual stack | The hero runs a fixed Three.js canvas with continuous animation. Each of the eight active capability cards also creates a React Three Fiber canvas, for up to nine WebGL canvases on the page. The fixed scene and HUD continue through later sections. This adds GPU, memory, battery and startup work without improving the core manufacturing explanation for every visitor. |
| **High** | Smooth-scroll animation frame is not cancelled | `src/lib/smoothScroll.js` starts a recurring `requestAnimationFrame` loop but does not retain/cancel its frame ID in `destroySmoothScroll`. In development, `StrictMode` can run effect setup/cleanup more than once, making proper cleanup especially important. |
| **Medium** | Mobile menu and custom controls need accessibility work | The menu trigger does not expose `aria-expanded`/`aria-controls`; the drawer does not manage focus, Escape dismissal or modal semantics. `MagneticButton` uses a `div` for click actions and is not keyboard-operable as a button. There is no consistent authored `:focus-visible` treatment. |
| **Medium** | Form labels are not programmatically associated | `CTA.jsx` displays separate `<label>` elements without `htmlFor`/matching input IDs or nested inputs. Keyboard/screen-reader form use needs review. The local-only success state is also misleading. |
| **Medium** | Reduced-motion support is partial | Lenis and the custom cursor check `prefers-reduced-motion`, and CSS reduces native animations. The 3D render loop and many Framer Motion animations do not consistently opt out. Review motion behavior at the component level. |
| **Medium** | Theme control is rendered more than once | `Navbar.jsx` renders a theme control inside the desktop nav and also renders an unconditional second `ThemeToggle` after the mobile-menu markup. The second control is outside the navigation layout; this risks an unintended duplicate in the page flow. Several hard-coded dark surfaces also limit theme consistency. |
| **Medium** | Responsive rules are duplicated and unverified | The 1024px layout overrides exist in both `App.jsx` and `src/index.css`; additional `!important` rules complicate responsive fixes. There is no configured browser test or documented viewport review. |
| **Medium** | Metadata and project documentation are incomplete | `index.html` has a title, language, viewport and description, but no canonical/social metadata. The description includes broad robotics/advanced-systems wording that should be checked against approved company facts. `README.md` is still the default Vite guide, and `test.txt` is leftover scratch content. |
| **Low/Medium** | Dead or competing assets/components | Starter artwork, unused logos/icons, `Hero3D.jsx`, several inactive legacy page sections and a GSAP dependency remain. Remove or consolidate only after verifying references and preserving any useful owner content. |

### Company-location/content inconsistencies

The HUD in `Hero.jsx` displays Paris coordinates alongside “Hosur, Tamil Nadu.” That is a clear mismatch and must not be retained. The footer includes another pair of coordinates; verify any exact coordinates and all postal/contact details before publishing. The core location supplied for the project is **Hosur, Tamil Nadu, India**.

## 6. Accessibility and SEO assessment

Positive starting points include the document language, viewport declaration, main landmark, some descriptive image alternatives, native fragment links, visible form labels and partial reduced-motion handling. Gaps to resolve include:

- Add a real, visible page-level `<h1>` and keep a coherent heading outline.
- Use native buttons for button actions and native anchors for navigation; provide visible keyboard focus styles and check contrast, especially for small low-opacity text.
- Associate each form label and input, add appropriate autocomplete/name attributes, and expose validation/submission status accessibly.
- Give the mobile drawer predictable focus behavior, keyboard dismissal and accessible state.
- Keep custom cursor behavior optional and ensure it never suppresses useful native interaction cues.
- Make all motion—including Three.js, Framer Motion and scroll effects—honor reduced-motion preferences.
- Confirm image alternatives distinguish informative from decorative imagery; do not label stock images as DARPA facilities or products.
- Add accurate canonical and Open Graph/Twitter metadata once the production domain is confirmed. Add structured data only for facts the company verifies.
- Check heading, landmarks, link purpose, focus order, color contrast, zoom/reflow and form errors with keyboard and assistive-technology-oriented testing.

## 7. Build, performance and deployment

The audit build succeeded using the installed Vite 8.1.0. It transformed 346 modules and emitted one JavaScript bundle of **1,314.91 kB (364.91 kB gzip)** plus CSS of **13.97 kB (3.86 kB gzip)**. `vite.config.js` sets the chunk warning limit to 1,500 kB, so the current bundle remains below the configured warning threshold; it is still a substantial initial download for a compact B2B information site. Three.js and multiple rendering contexts are the main visible cost drivers. The audit did not run Lighthouse or measure field performance.

Other performance observations:

- The loader blocks the page for a fixed 2.2 seconds rather than reflecting actual readiness.
- The page imports three remote Google font families and depends on live Unsplash image URLs. The active showcase marks images lazy, but uses no local copies, responsive `srcset` or image-size hints.
- The hero canvas, Framer animations, scan effects and smooth scrolling add continuous rendering or main-thread work. The new design should avoid a permanent 3D scene unless a tested, lightweight enhancement genuinely improves understanding.
- `build.chunkSizeWarningLimit: 1500` suppresses warnings below a high single-bundle threshold; use measured bundle and Core Web Vitals results rather than that threshold as the quality bar.

Deployment uses GitHub Pages with a project-site base of `/darpa-engineering/`. `dist/` and `node_modules/` are ignored by Git. The base-aware favicon in the existing generated `dist/index.html` is correct, but the React logo paths still need base-path handling. Both existing workflow files use `npm ci`, `npm run build` and the Pages artifact/deploy actions.

## 8. Recommended architecture after the audit

Keep a simple Vite + React single-page application until there is a genuine need for routes. Use semantic sections and a small, explicit component set rather than retaining parallel versions of the same page. A practical target structure is:

```text
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── layout/        # SiteHeader, SiteFooter, Container
│   ├── ui/            # Button, SectionIntro, FormField, icon primitives
│   └── sections/      # Hero, CompanyStory, Capabilities, ProductsServices,
│                      # Industries, InteractiveFeature, Contact
├── data/
│   └── companyContent.js  # Approved, source-backed site copy only
├── assets/            # Optimized, licensed company imagery and logo files
└── styles/
    ├── tokens.css
    └── global.css
```

Keep the current JS/JSX stack unless a specific TypeScript benefit warrants incremental configuration; do not force a full rewrite or introduce a router, Tailwind or a new animation library without a concrete need. Prefer local, optimized assets and base-aware public URLs. Keep animation optional, use semantic controls, and make content facts traceable to explicit approval or a project source.

## 9. Audit verification notes

- `npm run lint`: six warnings (two React fast-refresh export warnings and four unused identifiers/parameters in `Hero.jsx`); no reported lint errors.
- `npm run build` to a temporary external output directory: passed; existing project `dist/` was not replaced.
- No browser test, user-flow automation, formal accessibility scan or live deployment test was run.
- No application file was deleted or replaced, and no Git commit was created.

## 10. Implementation follow-up and final verification — 2026-10-05

The audit above records the **pre-implementation baseline**. The requested implementation is now complete in the working copy; this section records the resulting site and verification so the earlier findings are not mistaken for current unresolved defects.

### Implemented

- Kept React/Vite and composed a focused single-page site from `Navbar`, `Hero`, `Services`, `About`, `Industries`, `Process`, `Contact` and `Footer`.
- Replaced the dark sci-fi/HUD presentation with a navy-and-paper industrial palette, stronger editorial type, direct capability rows, compact spacing and a small set of responsive layouts. The design uses the existing DARPA wordmark and one local copy of the press-shop photograph published on the company site.
- Used source-backed manufacturing divisions, listed industries, Hosur address, email and phone. Removed the unsourced metrics, testimonials, named case studies, project specs, dashboard and article placeholders; detailed machine figures and certification claims are not presented.
- Made navigation use native fragment links, added a skip link, visible focus treatment and an Escape-dismissable mobile disclosure. The contact fields now have associated labels, autocomplete, native validation and a real submit button. Since there is no server endpoint, submit prepares an email draft and tells the visitor it must be sent from their email application.
- Added the repository-page link `https://github.com/darmigan2011-ops/darpa-engineering` from the current `origin`; this is not the GitHub Pages deployment URL. Public logo URLs and the favicon use the `/darpa-engineering/` base path.
- Removed the decorative React Three Fiber/Three.js scene, 3D capability canvases, cursor/HUD/scan/loader/scroll effects, fake metric and testimonial sections, duplicate contact implementation, inactive stock-image sections, Vite starter artwork and scratch `test.txt`. Removed the duplicate untracked Pages workflow and retained `.github/workflows/main.yml`.
- Removed direct dependencies `@react-three/drei`, `@react-three/fiber`, `three`, `framer-motion`, `gsap`, `lenis`, `@types/react` and `@types/react-dom`. `npm audit fix` refreshed vulnerable transitive lockfile entries; no new dependency was added.

### Verification results

- `npm run lint`: passed with no warnings.
- `npm run build -- --outDir C:\Users\darmi\AppData\Local\Temp\opencode\darpa-resume-dist --emptyOutDir`: passed (25 modules; JavaScript 202.85kB / 63.22kB gzip; CSS 12.08kB / 3.26kB gzip; press-shop image 50.58kB). The existing ignored `dist/` output was preserved.
- `npm audit`: **0 vulnerabilities**. `npm ls --depth=0`: declared dependencies are installed and only React/React DOM, Vite, the React plugin and Oxlint remain.
- `git diff --check`: passed. Git printed its working-copy LF-to-CRLF advisory for modified files; there were no whitespace errors. `git remote -v` remains credential-free and points to `https://github.com/darmigan2011-ops/darpa-engineering.git`.
- Built `index.html` points the favicon, JS and CSS at `/darpa-engineering/…`. The active source image, both wordmark instances and favicon exist; browser checks loaded all three rendered images from base-aware paths.
- Headless-browser layout checks at 320, 360, 390, 430, 600, 760, 768, 1024, 1440 and 1920 CSS pixels found no content overflow; every in-page fragment had a target. The mobile menu opened and closed on Escape. The contact form was invalid while required fields were empty, valid when filled, labels were associated and its submit control was a native submit button.
- After a clean page reload, browser console/runtime errors were empty. Desktop and mobile full-page screenshots were reviewed; the page retains a real manufacturing image and clear company-specific content without the removed decorative effects.

### Remaining items

- The contact form is intentionally a `mailto:` draft, not an online submission service. A backend or hosted form endpoint would be needed if enquiries must be transmitted without the visitor's email application.
- The local production build and browser smoke test passed, but the live GitHub Pages deployment was not exercised. No push or deployment was performed.
- The project has no automated test or type-check script; responsive, anchor, menu, form-validity, image-path and console checks were exercised in the browser instead.
- The unused alternate `public/logo.svg` remains in the repository; the active site uses the existing wordmark in `public/brand/`.

## 11. Final visual polish — 2026-10-05

The last polish pass kept the existing page structure and visual direction, then added three verified first-party capability images as local responsive WebP assets. The existing hero press-shop photo was also converted from JPEG to WebP. No stock images, new dependencies, customer claims or machinery specifications were added.

| Local asset family | First-party source | Responsive WebP variants | Approx. total |
| --- | --- | --- | ---: |
| Desktop hero, press shop | `https://darpaengi.com/wp-content/uploads/2024/04/pressshop2.jpg` | 800 and 1430px wide | 376.89kB |
| Mobile hero, press shop | `https://darpaengi.com/wp-content/uploads/2024/04/cropped-Veritas_Press_Shop-scaled-1-1.jpg` | `darpa-press-shop.webp` (512×512) | 34.57kB |
| Stamping press line | `https://darpaengi.com/wp-content/uploads/2026/04/1000428182-scaled.jpg` (media titled “HPS press line”) | 400, 800 and 1600px wide | 169.56kB |
| Casting furnace | `https://darpaengi.com/wp-content/uploads/2024/04/cast8-1.jpg` (company About-page furnace image) | 400, 640 and 1086px wide | 151.44kB |
| Stamped bracket | `https://darpaengi.com/wp-content/uploads/2024/05/Stamping_Bracket-Galvanized.png` (Stampings product gallery) | tightly cropped 240 and 413px wide | 25.00kB |

The combined emitted image variants total about **757.46kB**. Capability images use local Vite imports, responsive `srcSet`/`sizes`, explicit dimensions, meaningful alternatives and lazy loading. The hero image is eager and high priority; its mobile crop is selected separately. The tooling/CNC search in the company's public media did not yield a clearly identified tool-room photo; the tooling row intentionally remains text-led rather than showing unrelated machinery.

The company section now carries a simple Engineering → Manufacturing → Quality → Delivery rail. Capability photos use a restrained 2% hover scale on hover-capable devices; reduced-motion preferences still suppress transitions. The 320px horizontal-scroll issue was traced to a fixed body minimum width and removed. Capability image heights now respect their aspect ratios instead of their intrinsic HTML height attributes.

### Final verification for the visual polish

- `npm run lint`: passed, no warnings.
- `npm run build -- --outDir C:\Users\darmi\AppData\Local\Temp\opencode\darpa-final-check-dist --emptyOutDir`: passed (33 modules; JS 205.48kB / 63.80kB gzip; CSS 14.57kB / 3.72kB gzip; no new dependencies).
- `npm audit`: 0 vulnerabilities.
- `git diff --check`: passed; Git printed only its LF-to-CRLF working-copy advisories.
- Production-preview browser layout checks at 320, 360, 390, 430 and 1440px reported zero horizontal range. Desktop and capability-section screenshots at the requested widths were reviewed. Local images loaded successfully from the built `/darpa-engineering/` paths; menu Escape handling and native form validity/labels still pass, and the clean production-preview reload had no HTTP or browser console errors.
- No commit, push or deployment was performed. The existing `dist/` directory was left untouched; the live Pages site was not redeployed or checked.

## 12. Full visual composition rebuild — 2026-10-05

The later rebuild intentionally changes the page composition; it is not a second image-only polish. Comparing the stored pre-rebuild 1440px screenshot with the final production-preview screenshot shows these differences:

- **Hero:** changed from a contained, centered-width hero with a three-line capability heading, two CTAs and location/division stats to a full-bleed asymmetric cover. The left editorial panel now says “Metal parts. Made for industry.” and the factory photo extends to the right viewport edge.
- **Navigation:** the enquiry action is now an underlined text link, alongside the logo and section links, rather than a button treatment.
- **Capabilities:** stamping uses a wide press-line image paired with a real stamped bracket; casting uses the furnace photo on the opposite side; tooling is a large type-led section without an image. No three-card grid is used.
- **Company and industries:** the company statement remains split from the verified company/location copy; the Engineering / Manufacturing / Quality / Delivery sequence now has numbered stages. The served industries are presented as a large typographic list.
- **Process and contact:** the three enquiry columns are replaced by a six-step vertical manufacturing workflow. The closing section now leads with “LET'S BUILD / WHAT'S NEXT.” above the contact details and form.

The current image sources and WebP variants are documented in `README.md`. Tooling/CNC remains text-only because the reviewed first-party media did not identify a tooling photograph. The verified capability, industry and contact details, native anchor targets, GitHub repository URL, mobile disclosure behavior and email-draft form remain in place.

### Final redesign checks

- `npm run lint`: passed.
- `npm run build -- --outDir C:\Users\darmi\AppData\Local\Temp\opencode\darpa-stardance-final-dist --emptyOutDir`: passed (35 modules; JavaScript 206.37kB / 63.91kB gzip; CSS 17.67kB / 4.21kB gzip; responsive WebP variants total about 757.46kB).
- `npm audit`: 0 vulnerabilities.
- `git diff --check`: passed; only Git's LF-to-CRLF working-copy advisories were printed.
- Production-preview screenshots were inspected at 320, 360, 390, 430, 768, 1024, 1440 and 1920 CSS pixels. All had zero horizontal scroll range and all fragment links resolved.
- Production browser checks: local images loaded, mobile navigation opened and closed on Escape, the contact form's required fields/labels/native submit remained valid, and the fresh page had no HTTP or browser console errors.
- The live Pages site was not redeployed, and no commit or push was made.
