# Mubarak Ali Portfolio

React + Vite portfolio redesigned with a professional light/graphite layout, restrained green accents, and the existing personal details and Blender gallery. Web & AI projects include When to Wander with a themed derivative of the supplied cover, the portfolio, and **AI Assistant**, replacing the Increnity card. AI Assistant links to [its repository](https://github.com/MubarakAli05/NEXUS); its description reflects the Python/PySide6 desktop interface, AI/voice/intent/memory modules, and Windows action layer. No hosted demo is claimed. Skills include Full Stack and AI/ML Engineering, explicitly marked as currently learning. Agrivo appears in AI/ML Projects as **in development**, with its agricultural AI vision and no invented live or repository links.

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
