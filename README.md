# enoysx.github.io — Personal Portfolio

Static portfolio site for Dandy Syahputra. Deploys to GitHub Pages from the `main` branch.

## Features
- Single Page static site (HTML/CSS/JS)
- Tailwind CDN styling
- Dark / Light theme toggle (persisted in `localStorage`)
- Projects & skills data in `assets/js/data.js`
- Contact form (Formspree) — replace `YOUR_FORM_ID`
- Auto-deploy via GitHub Actions

## Local preview
Open `index.html` in a browser or run a simple static server, e.g.:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

## Configure
- Replace email in `assets/js/data.js` and in the contact form in `index.html`.
- Sign up to Formspree and replace the `action` URL in the contact form with your form ID.
- In repo Settings → Pages, ensure source is `main` branch and folder `/ (root)`.

## Files to edit content
- `assets/js/data.js` — personal info, skills, projects
- `assets/css/custom.css` — styling variables and overrides

## Deploy
Push to `main`; GitHub Actions will publish the repository root to GitHub Pages using `peaceiris/actions-gh-pages`.
