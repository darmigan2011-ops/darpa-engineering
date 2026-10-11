# DARPA Engineering redesign — October 11, 2026

## Scope and contribution

The owner requested implementation of a clearer and more distinctive company website. Codex implemented this change. No independent human code contribution or coding hours are claimed for this session. This work does not establish Stardance eligibility, and no recertification was submitted.

Starting commit: `63209df4fd5eeea0ce501b0816e8df9ac298ec0b`.
Recovery branch: `stardance-recertification`.

## Visitor experience

- Warm off-white, charcoal, sage and restrained rust-orange accents, using system fonts.
- Factory photography leads the page; generic promotional copy is reduced.
- Stamping, casting and tooling are selected through keyboard-accessible tabs. Existing stamping, casting and tooling interactions are retained.
- Selected products have their own navigation target and gallery.
- Company information is shorter and does not feature an unverified current certification badge or export percentage.
- Mobile-menu Escape restores focus to its toggle, and switching to desktop closes the mobile disclosure.
- Enquiry fields reject whitespace-only names/messages. Successful preparation opens an email draft, displays truthful status, and offers a copy/view fallback. There is no delivery backend.
- Tooling deselection clears hover/focus preview state so the visible explanation matches deselection.

## Content basis

Company source: https://darpaengi.com/about/
Capabilities: https://darpaengi.com/service/
Product gallery: https://darpaengi.com/stampings/
Contact information: https://darpaengi.com/contact/

Media is reused from the existing repository. No AI factory photographs, customers, testimonials or production statistics were added. The casting detail retains its note about the different electric-furnace figures and units on the company pages. Current technical figures and permission to reuse company media should be confirmed by the company before publication as its official website.

## Validation

- Locked dependency installation succeeded and reported zero known vulnerabilities at the time of installation.
- Oxlint and production build passed.
- Browser checks passed for all three divisions at 320, 375, 768, 1024 and 1440 CSS pixels, with no horizontal overflow.
- Mobile-menu Escape closed the disclosure and returned focus to the toggle.
- Division tabs supported arrow keys, Home and End. Casting tabs and stamping stage selection worked.
- Tooling selection and deselection worked.
- Whitespace-only enquiries were rejected; correcting the fields allowed draft preparation with trimmed content and no delivery claim.
- Fragment targets resolved, the page had one H1, and no browser page errors were observed.

## Remaining limits

### Scroll and 3D revision

The opening was subsequently refined into the company homepage: a clear Hosur manufacturing introduction and enquiry/process links sit beside a larger, frameless exploded model. The explanatory title above the model was removed, mobile reading order was adapted, and the 3D ground became a subtle shadow/grid rather than a bright panel. One page H1 is retained and the factory-photography section follows the explainer. Desktop and mobile screenshots were inspected, with zero horizontal overflow at the five documented widths.

The owner requested slower smooth scrolling and an exploded 3D explanation after reviewing the first design. Codex added Lenis and Three.js, a separate lazy-loaded WebGL scene, and six detailed process chapters. Casting is explicitly a separate route rather than a stage after stamping. The models are schematic and do not claim to represent production drawings or specific company machines.

The 3D view supports assembly/explosion, mouse and arrow-key rotation, reset, scroll-driven stage selection and manual stage buttons. Reduced-motion preferences are applied live: smooth scrolling and automatic stage switching stop, model transitions become immediate, and explanations remain readable. Touch scroll is native. Rendering settles rather than rotating continuously, pauses off-screen, and all scene resources/listeners are released on unmount.

Browser checks verified an actual WebGL canvas, all six scroll-driven states, assembly/explosion, keyboard/reset controls, layout at 320/375/768/1024/1440px, and changing reduced-motion preferences without a reload. No page errors were observed. The large Three.js chunk is dynamically imported when the section approaches the viewport; it is an intentional additional download for the requested feature.

Production validation repeated successfully after the revision. The WebGL-disabled browser displayed its fallback and all six explanatory chapters. Existing division interactions, menu focus and contact validation also passed regression checks. At a 375 × 900 viewport, the sticky viewer occupied vertical coordinates 74–554px, leaving space for the explanatory text below. Physical-phone GPU performance remains untested.

No real email was sent. These checks do not establish full WCAG conformance, real-device behavior, current company certification, official media-use permission or Stardance acceptance. GitHub publication status must be verified separately; local build success is not deployment evidence.
