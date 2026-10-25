# Mubarak Ali Portfolio

React + Vite portfolio using muted tones sampled from the supplied reference: sage `#BEC0AB`, cream `#F0F1E1`, and moss `#728D64`. Near-black `#171A14` text and darker moss `#3D5432` controls maintain readable contrast, with the existing personal details and Blender gallery. Web & AI projects include When to Wander with a themed derivative of the supplied cover, the portfolio, and **AI Assistant**, replacing the Increnity card. AI Assistant links to [its repository](https://github.com/MubarakAli05/NEXUS); its description reflects the Python/PySide6 desktop interface, AI/voice/intent/memory modules, and Windows action layer. No hosted demo is claimed. Skills include Full Stack and AI/ML Engineering, explicitly marked as currently learning. Agrivo appears in AI/ML Projects as **in development**, with its agricultural AI vision and no invented live or repository links.

## Development and verification

```powershell
npm ci
npm run dev
npm run build
npm run test:seo
npm run lint
npm run preview
```

The build prerenders the same React app into `dist/index.html`, then hydrates it in the browser. Deploy the `dist` directory using `npm run build`; running only `vite build` skips prerendering. Existing project links, image previews, and the contact form remain interactive.

## Visual identity

Full-width background bands distinguish each section while sharing a centered 1160px content gutter: sage hero, cream About, pale olive Skills, sage 3D gallery with cream cards, pale olive Web & AI projects, soft olive Agrivo, and cream contact with an olive information panel. The footer closes with sage. Near-black hero headings and darker moss buttons and focus indicators keep the reference's muted character without sacrificing text contrast. The subtle editorial redesign keeps the palette, content, artwork, and interactions intact. The hero balances its text against an arched portrait, circular moss decoration, pill badges, and an inset statistics panel. About has a full-width eyebrow above a split introduction, with three equal-height cards and softened asymmetric corners. Skills places its heading and live spotlight above four aligned desktop cards, reducing to two and then one column on smaller screens. Project headings share a left alignment; the 3D carousel uses inset rounded image frames. Web & AI rows retain alternating image/text placement with leaf-like preview corners, while Agrivo uses an arched image panel. Contact gains complementary curved panels, and circular social buttons finish the footer. Layouts stack on mobile, and the gallery shares the same readable text, links, and focus colors as the rest of the page. All nine 3D carousel projects remain intact. Their “View Gallery” buttons now group 25 matching renders and Blender process screenshots by filename family (`light`, `arch`, `archh`, `archhh`, `game`, `atmosp`, `ev`, `cl`, `atmos`). Each gallery keeps its original cover first, provides descriptive captions, previous/next buttons, arrow-key navigation, and Escape to close. Additional images load only when viewed; unrelated planetary, modeling, and outdoor studies remain unused.

[ScrollMotion](src/components/ScrollMotion.jsx) adds staggered, one-time fade-up reveals. [PageMotion](src/components/PageMotion.jsx) adds scroll progress, hero parallax shapes, masked headline entrances and rotating words, a one-shot role typewriter and the existing 15+ project count-up, and a mouse-only magnetic hero button. CSS supplies hover lift/zoom, link underlines, button sweep/arrow/press feedback, and a skeleton only while the portrait is actually loading (including error cleanup). No artificial loading delay or scroll hijacking is used.

There is no floating Pause motion control. System reduced-motion preferences skip/cancel animations and restore complete text. The headline performs a short two-word rotation sequence, then settles within five seconds; it stops early if the tab is hidden or the hero is offscreen. Screen readers receive stable full text. Prerendered content remains visible without JavaScript, and keyboard focus cancels entrance/magnetic movement.

[SurfaceInteractions](src/components/SurfaceInteractions.jsx) adds subtle pointer-following section/footer backgrounds and a restrained portrait tilt for mouse users only. These effects reset on scroll/leave and are disabled for touch and reduced motion. The original portrait has an arched editorial frame, name caption, and pill-shaped role badges. Skill highlights, project previews, visible contact labels/focus feedback, email link, social hover states, and a Back to top link extend the interactions through the footer.

Each section has a distinct interaction: the hero uses pointer depth; About uses staggered card reveals and subtle icon hover motion; expertise buttons update a live tool spotlight; the 3D carousel shows its visible work range and scroll-position track; web cards reveal an accent line on hover or keyboard focus; Agrivo has native expandable panels describing planned capabilities (not shipped features); contact fields activate their label and form accent; and the footer enters with a restrained reveal. Entrance styles vary by section without hiding server-rendered content. Muted sage, cream, and moss accents carry the reference palette throughout the page. All controls support keyboard use, with system reduced-motion preferences disabling decorative animation.

Below the hero, faint rings, dots, light washes, and diagonal lines drift by just 36px over each section's scroll journey using CSS view timelines. They remain static in unsupported browsers and with reduced motion, require no animation loop, and cannot intercept clicks or overflow their section. About retains its parallel cards with small decorative concept/code/cube icons and softly tinted surfaces.

The custom folded-ribbon symbol replaces plain initials, using three green facets to suggest code and 3D depth. [logo.svg](public/logo.svg) appears in the navigation and as the SVG favicon, with matching PNG favicon, Apple touch icon, and social preview. Regenerate raster assets on Windows using `powershell -File scripts\generate-brand-assets.ps1`; keep its ribbon coordinates aligned with the SVG.

All nine original 3D projects remain individually visible in one compact horizontal carousel, with previous/next controls, swipe/scroll support, and full-image previews. Three cards fit on desktop, two on tablet, and one on mobile; movement is user-controlled and respects reduced-motion preferences.

Project covers use a consistent light/green palette. The supplied When to Wander artwork is preserved as the source for its themed derivative; original Blender artwork is unchanged.

## SEO and accessibility

- Canonical URL, Open Graph/Twitter previews, and Person/WebSite/ProfilePage JSON-LD are maintained in [index.html](index.html).
- [robots.txt](public/robots.txt) and [sitemap.xml](public/sitemap.xml) target `https://mubarak-ali-portfolio.vercel.app/`. Update these, metadata, and [SEO tests](scripts/seo.test.mjs) together if the production domain changes.
- Prerendered content is readable without JavaScript. Project images load lazily; an optimized portrait and smaller icons reduce initial image transfers while preserving original assets.
- Navigation supports keyboard use, forms have accessible names, and focus indicators are visible. Image previews use native modal dialogs with Escape dismissal and focus management. CSS transitions respect reduced-motion preferences.
- The current layout uses [design.css](src/design.css). Blocking loaders, continuous tilt/typewriter effects, and unused Bootstrap styles are excluded from the rendered app.
- GitHub: https://github.com/MubarakAli05. LinkedIn: https://www.linkedin.com/in/mubarak5. The When to Wander card retains its specific repository link.

After deployment, verify the production URL in Google Search Console, submit the sitemap, and inspect indexing and Core Web Vitals. Metadata and technical checks do not guarantee rankings or indexing.
