# Portfolio Website

This repository contains the source code for the Jekyll-based portfolio website for Dandy Syahputra.

## Setup

1. Install Ruby and Jekyll (see https://jekyllrb.com/docs/).
2. Run `bundle install` to install dependencies.
3. Build the site locally:
   ```bash
   bundle exec jekyll serve
   ```
4. Visit `http://localhost:4000` in your browser.

## Project Structure

See `PRODUCT_REQUIREMENTS.md` for detailed design, requirements, and file documentation guidelines.

- `_config.yml` – Jekyll configuration
- `_data/` – YAML data for experience, skills, projects
- `_includes/` – Reusable HTML components
- `_layouts/` – Page layouts
- `_sass/` – SCSS partials
- `assets/` – CSS, JS, images, resume

## Deployment

The site is hosted on GitHub Pages. Push to the `main` branch to deploy automatically via the workflow in `.github/workflows/deploy.yml`.

## License

MIT License.

