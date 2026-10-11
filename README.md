# DARPA Engineering website

A single-page company website built with React and Vite. It presents DARPA Engineering's manufacturing divisions, company information and a direct enquiry path.

Demo: <https://darmigan2011-ops.github.io/darpa-engineering/>

The October 11 redesign uses existing company photographs and product media, a warm neutral palette, a keyboard-accessible division selector, and a separate parts gallery. Stamping, casting and tooling illustrations remain labeled as illustrative. See `RECOVERY_REPORT.md` for changes, validation and limitations.

## AI assistance and authorship

The latest revision adds a lazy-loaded Three.js manufacturing study. Scroll through six chapters to see an exploded stamping tool, a sheet blank, forming, a separate casting route, tool-room machining and a finished conceptual component. The model supports assembly/explosion, mouse rotation, keyboard rotation and reset. Lenis smooths wheel scrolling; reduced-motion mode disables scrolling inertia and automatic stage switching. Touch scrolling remains native. A text/SVG fallback remains available when WebGL cannot initialize.

The October 11 redesign was implemented by Codex with the project owner's authorization. AI contributed the updated React components, copy, CSS, bug fixes, documentation and browser-check scripts. These changes must not be described as independently handwritten by the owner. File-level authorship of the earlier source is not established by commit metadata. This repository makes no claim to satisfy a particular Stardance AI-use percentage.

## Local development

Install the locked dependencies and start the Vite development server:

```sh
npm ci
npm run dev
```

Available checks:

```sh
npm run lint
npm run build
npm run preview
```

## Page structure

- `src/components/Navbar.jsx` — desktop links and mobile navigation disclosure.
- `src/components/Hero.jsx` — full-bleed editorial cover and factory photograph.
- `src/components/Services.jsx` — stamping, non-ferrous casting and tooling.
- `src/components/ProductLibrary.jsx` — a separate gallery of selected company components.
- `src/components/StampingSequence.jsx`, `CastingDetails.jsx`, `ToolingDie.jsx` — interactive manufacturing explanations.
- `src/components/About.jsx` and `Industries.jsx` — company and listed markets.
- `src/components/Process.jsx` — the six-stage manufacturing workflow.
- `src/components/Contact.jsx` — contact details and email-draft form.
- `src/index.css` — layout, typography, responsive rules and interaction states.
- `src/design.css` — the current public-facing layout and visual styling; technical diagram styles remain in `index.css`.

The desktop hero uses a local responsive copy of DARPA Engineering's `pressshop2` photo from <https://darpaengi.com/wp-content/uploads/2024/04/pressshop2.jpg>. On small screens it uses the square press-shop view from <https://darpaengi.com/wp-content/uploads/2024/04/cropped-Veritas_Press_Shop-scaled-1-1.jpg>.

The capability images are optimized local copies of first-party media:

- Press line: <https://darpaengi.com/wp-content/uploads/2026/04/1000428182-scaled.jpg>
- Furnace: <https://darpaengi.com/wp-content/uploads/2024/04/cast8-1.jpg>
- Stamped bracket: <https://darpaengi.com/wp-content/uploads/2024/05/Stamping_Bracket-Galvanized.png>

The reviewed company media did not provide a tooling/CNC-specific photograph, so that capability remains text-led. Company details and capability wording are based on the first-party pages at <https://darpaengi.com/>, <https://darpaengi.com/service/>, <https://darpaengi.com/about/>, and <https://darpaengi.com/stampings/>. Confirm changes to published company information with the business before adding new claims.

The contact form does not post to a server. It creates a draft addressed to the published company email in the visitor's email application; the visitor must review and send it.

## GitHub Pages

The project uses Vite's `/darpa-engineering/` base path and deploys from `.github/workflows/main.yml`.

- Repository: <https://github.com/darmigan2011-ops/darpa-engineering>
- Pages path: `/darpa-engineering/`
