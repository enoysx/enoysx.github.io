# Vibe Coder Portfolio (enoysx.github.io)

A fast, playful, fully responsive single‑page portfolio built using the **vibe coding** philosophy: rapid, intuition‑driven development powered by AI tools. Designed for GitHub Pages, it showcases projects, experience, and the developer's stack with neon aesthetics, glitch effects, and interactive widgets.

Live site: https://enoysx.github.io/

## Key Features ✅
- **Hero section** with animated gradient, glitch name, typing role and live GitHub activity
- **About & Vibe Stack** sections populated from separate data file
- **Experience & Education** timelines
- **Projects grid** with filters, AI‑assisted badges, and dynamic tags
- **Dark/light theme toggle** + **vibe mode switch** (chill/hype animations)
- **Particle network background**, **neon/glitch effects**, and **konami easter egg**
- **Contact form** (Formspree) and copy‑email button
- **Bonus widgets**: live coding feed and AI chat simulator
- Responsive, performance‑minded (Lighthouse >90) and hosted via GitHub Actions

## Local preview 🚀

```bash
# serve from workspace root
python3 -m http.server 8000
# visit http://localhost:8000 in your browser
```

Any simple static server will also work (npm http‑server, nginx, etc.).

## Customizing content ✍️
All editable content lives in `assets/js/data.js`. The structure is commented but summarised below:

- `personalData` – name, role, tagline, contact, about paragraphs, stats, social links
- `vibeStack` – grouped arrays for "Vibe Tools", frontend/backend/frameworks, and other tools
- `experienceData` – timeline items (role, company, period, achievements, technologies)
- `educationData` – schooling information in timeline form
- `projectsData` – card data including title, description, tags, image path, repo/demo URLs, and `vibeMethod` notes

You can update the arrays directly; the page will regenerate when it loads.

### Adding images
Put screenshots or thumbnails under `assets/images/projects/`.
Recommended size: **1200×800px JPEG or WebP** optimized for web (use `imagemin` or similar). Keep file names lowercase and dashes.

### Styling
Global colors/typography can be tweaked in `assets/css/custom.css`. Tailwind classes are used throughout.

## Contact form (Formspree) 📬
1. Create a form at [Formspree.io](https://formspree.io).
2. Copy the form endpoint (e.g. `https://formspree.io/f/xyz`) and replace the `action` attribute in `index.html`.
3. Optionally adjust success/failure messages directly in HTML or via CSS.

Test by submitting and verifying receipt at your email.

## Deployment ⚙️
Push any changes to the `main` branch. A GitHub Action (`.github/workflows/deploy.yml`) automatically builds and deploys the root directory to GitHub Pages.

You can also manually build/serve or use another hosting provider if desired.

## Development notes
- JavaScript lives in `assets/js/` (split into `data.js`, `main.js`, `vibe-animations.js`).
- Tailwind is loaded via CDN; there is no build step.
- SVG icons come from Lucide (via CDN).

## License & Attribution
Feel free to fork and remix! This project is open‑source (MIT) — see license in repository.
