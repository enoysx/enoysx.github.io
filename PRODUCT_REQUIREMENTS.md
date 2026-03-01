# PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Portfolio Website - Dandy Syahputra**

**Platform:** Jekyll + GitHub Pages  
**Target:** Mobile-First Responsive Design  
**Version:** 1.0  
**Date:** 1 Maret 2026

---

## 1. EXECUTIVE SUMMARY

### 1.1 Tujuan
Membuat portfolio website profesional yang clean, responsive, dan well-documented untuk menampilkan keahlian Reporting, Analysis & Data Visualization serta Graphic Design.

### 1.2 Target Audience
- Hiring manager dan recruiter
- Klien potensial untuk freelance graphic design
- Professional network di LinkedIn

### 1.3 Data Diri (Berdasarkan LinkedIn)

| Field        | Informasi                                                          |
|--------------|--------------------------------------------------------------------|
| Nama         | Dandy Syahputra                                                    |
| Profesi      | Reporting, Analysis & Data Visualization &#124; Freelancer Graphic Designer |
| Lokasi       | Jakarta, Indonesia                                                 |
| Keahlian Utama | Data management, reporting, data visualization, graphic design  |
| Pengalaman   | PT. Tirta Varia Inti Pratama + 3 perusahaan lain                   |
| Pendidikan   | Universitas Bung Karno                                             |
| Deskripsi    | A proficient support staff with a strong focus on data management  |

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Tech Stack

| Komponen           | Teknologi                 | Alasan                                                    |
|--------------------|---------------------------|-----------------------------------------------------------|
| Static Site Generator | Jekyll                  | Native support GitHub Pages, simple, markdown-friendly     |
| Hosting            | GitHub Pages              | Free, custom domain support, CI/CD built-in               |
| Templating         | Liquid                    | Default Jekyll, powerful dan flexible                     |
| Styling            | SCSS + Bootstrap 5        | Mobile-first, responsive grid system                     |
| Icons              | Font Awesome / Bootstrap Icons | Professional icon set                             |
| Fonts              | Google Fonts (Inter/Poppins) | Modern, readable, web-optimized                        |

### 2.2 Struktur Folder
```plain
portfolio/
├── _config.yml                 # Konfigurasi utama Jekyll
├── _data/                      # Data YAML untuk konten
│   ├── experience.yml          # Data pengalaman kerja
│   ├── skills.yml              # Data keahlian
│   └── projects.yml            # Data portfolio projects
├── _includes/                  # Reusable components
│   ├── head.html              # HTML head section
│   ├── header.html            # Navigation header
│   ├── footer.html            # Footer section
│   ├── about.html             # About section
│   ├── skills.html            # Skills section
│   ├── experience.html        # Experience timeline
│   ├── portfolio.html         # Portfolio grid
│   └── contact.html           # Contact section
├── _layouts/                   # Page layouts
│   ├── default.html           # Layout utama
│   └── home.html              # Layout homepage
├── _sass/                      # SCSS partials (well-documented)
│   ├── _variables.scss        # Variables & theme colors
│   ├── _mixins.scss           # Reusable mixins
│   ├── _base.scss             # Base styles
│   ├── _responsive.scss       # Media queries
│   ├── _sections.scss         # Section-specific styles
│   └── _utilities.scss        # Utility classes
├── assets/                     # Static assets
│   ├── css/
│   │   └── main.scss          # Main stylesheet entry
│   ├── js/
│   │   └── main.js            # Custom JavaScript
│   ├── images/
│   │   ├── profile.jpg        # Foto profil
│   │   └── projects/          # Screenshot portfolio
│   └── resume.pdf             # CV/Resume download
├── _site/                      # Generated site (gitignored)
├── index.html                  # Homepage
├── about.md                    # About page (optional)
├── 404.html                    # Custom 404 page
├── CNAME                       # Custom domain config
├── Gemfile                     # Ruby dependencies
├── README.md                   # Dokumentasi lengkap
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions (optional)
```

---

## 3. DESIGN SPECIFICATIONS

### 3.1 Design Principles

| Principle       | Implementasi                                                                 |
|-----------------|------------------------------------------------------------------------------|
| Clean & Minimal | White space yang cukup, typography yang jelas                               |
| Mobile-First    | Base styles untuk mobile, enhance untuk desktop                             |
| Professional    | Warna netral dengan aksen biru (trust & professionalism)                   |
| Accessible      | WCAG 2.1 AA compliance, semantic HTML                                       |

### 3.2 Color Palette
```scss
// _sass/_variables.scss
:root {
  // Primary Colors
  --primary-color: #2563eb;        // Biru profesional
  --primary-dark: #1d4ed8;         // Hover state
  --primary-light: #dbeafe;        // Background accent
  
  // Neutral Colors
  --text-primary: #1f2937;         // Dark gray untuk heading
  --text-secondary: #6b7280;       // Medium gray untuk body
  --text-muted: #9ca3af;           // Light gray untuk caption
  
  // Background Colors
  --bg-primary: #ffffff;           // White
  --bg-secondary: #f9fafb;         // Light gray sections
  --bg-dark: #111827;              // Dark sections (footer)
  
  // Semantic Colors
  --success: #10b981;              // Green
  --warning: #f59e0b;              // Orange
  --error: #ef4444;                // Red
  
  // Spacing Scale (8px base)
  --space-xs: 0.5rem;   // 8px
  --space-sm: 1rem;     // 16px
  --space-md: 1.5rem;   // 24px
  --space-lg: 2rem;     // 32px
  --space-xl: 3rem;     // 48px
  --space-2xl: 4rem;    // 64px
  
  // Typography
  --font-primary: 'Inter', -apple-system, sans-serif;
  --font-heading: 'Poppins', sans-serif;
  
  // Border Radius
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  // Shadows
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

### 3.3 Typography Scale

| Element | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|---------------|----------------|--------|-------------|
| H1      | 2rem (32px)   | 3rem (48px)    | 700    | 1.2         |
| H2      | 1.75rem (28px) | 2.25rem (36px) | 600    | 1.3         |
| H3      | 1.5rem (24px) | 1.875rem (30px)| 600    | 1.4         |
| Body    | 1rem (16px)   | 1rem (16px)    | 400    | 1.6         |
| Small   | 0.875rem (14px) | 0.875rem (14px)| 400  | 1.5         |
| Caption | 0.75rem (12px) | 0.75rem (12px)| 400    | 1.5         |

### 3.4 Breakpoints (Mobile-First)

```scss
// _sass/_mixins.scss

// Mobile: Default (0px - 575px)
// Small devices (landscape phones)
@mixin sm {
  @media (min-width: 576px) { @content; }
}

// Medium devices (tablets)
@mixin md {
  @media (min-width: 768px) { @content; }
}

// Large devices (desktops)
@mixin lg {
  @media (min-width: 992px) { @content; }
}

// Extra large devices
@mixin xl {
  @media (min-width: 1200px) { @content; }
}
```

---

## 4. CONTENT SECTIONS

### 4.1 Hero Section
**Purpose:** First impression, value proposition  
**Content:**
- Nama: Dandy Syahputra
- Tagline: "Reporting, Analysis & Data Visualization Specialist"
- Sub-tagline: "Transforming complex data into actionable insights & compelling visual designs"
- CTA Buttons: "View Portfolio" | "Download Resume"
- Social links: LinkedIn, GitHub, Email

**Layout:**
- Mobile: Centered, stacked vertically
- Desktop: 2-column (text left, illustration/profile right)

### 4.2 About Section
**Purpose:** Personal introduction  
**Content:**
- Bio singkat (2-3 paragraf)
- Foto profil
- Key highlights (icons + text)
  - 📊 Data Analysis
  - 📈 Reporting & Visualization
  - 🎨 Graphic Design
  - 📍 Jakarta, Indonesia

### 4.3 Skills Section
**Purpose:** Showcase technical competencies  
**Categories:**
| Data & Analysis        | Design & Tools      | Soft Skills        |
|------------------------|---------------------|--------------------|
| Excel / Google Sheets  | Adobe Photoshop     | Problem Solving    |
| Power BI / Tableau     | Adobe Illustrator   | Attention to Detail|
| SQL (Basic)            | Figma / Canva       | Communication      |
| Python (Pandas)        | UI/UX Principles    | Time Management    |
| Data Cleaning          | Branding            | Team Collaboration |

Visual: Progress bars atau skill tags

### 4.4 Experience Section
**Purpose:** Professional timeline  
```yaml
# _data/experience.yml
experiences:
  - company: "PT. Tirta Varia Inti Pratama"
    position: "Reporting & Data Analysis Staff"
    period: "2022 - Present"
    location: "Jakarta, Indonesia"
    description: "Responsible for data management, reporting, and visualization to support business decisions."
    achievements:
      - "Developed automated reporting system reducing manual work by 40%"
      - "Created dashboard for executive decision making"
      - "Managed data visualization for monthly performance reports"
  
  - company: "[Company 2]"
    position: "Freelance Graphic Designer"
    period: "2020 - Present"
    location: "Remote"
    description: "Providing graphic design services for various clients including branding, social media, and marketing materials."
```  
Visual: Vertical timeline dengan alternating sides (desktop), single column (mobile)

### 4.5 Portfolio Section
**Purpose:** Showcase projects  
**Categories:**
- Data Visualization Projects (dashboards, reports)
- Graphic Design Projects (branding, social media, print)

Layout: Masonry grid atau 2-column grid  
Hover effect: Overlay dengan project details

### 4.6 Contact Section
**Purpose:** Call to action  
**Content:**
- Headline: "Let's Work Together"
- Subheadline: "Open for freelance projects and full-time opportunities"
- Contact info:
  - Email: [email]
  - LinkedIn: linkedin.com/in/dandy-syahputra-08984a207
  - Location: Jakarta, Indonesia
- Simple contact form (optional, bisa pakai Formspree)

---

## 5. FILE DOCUMENTATION
Setiap file harus memiliki header dokumentasi seperti ini:

### 5.1 Contoh Dokumentasi File SCSS
```scss
/**
 * _variables.scss
 * 
 * DESCRIPTION:
 * Centralized variables for consistent theming across the portfolio.
 * Contains color palette, spacing scale, typography, and shadow definitions.
 * 
 * USAGE:
 * Import in other SCSS files: @import 'variables';
 * Access via CSS variables: var(--primary-color)
 * 
 * MAINTENANCE:
 * - Update color values here to change global theme
 * - Follow 8px spacing scale for consistency
 * - Use semantic naming (primary, secondary) not literal (blue, red)
 * 
 * AUTHOR: Dandy Syahputra
 * LAST UPDATED: 2026-03-01
 */

:root {
  // Colors
  --primary-color: #2563eb;
  // ... rest of variables
}
```

### 5.2 Contoh Dokumentasi Include HTML
```html
{% comment %}
  about.html
  
  DESCRIPTION:
  About section component displaying personal bio, profile image,
  and key highlights with icons.
  
  PARAMETERS:
  None (uses _data/about.yml for content)
  
  DEPENDENCIES:
  - _data/about.yml
  - Font Awesome icons
  - _sass/_sections.scss for styling
  
  USAGE:
  {% include about.html %}
  
  RESPONSIVE BEHAVIOR:
  - Mobile: Single column, stacked
  - Desktop: 2-column grid (image + text)
{% endcomment %}

<section id="about" class="section about-section">
  <!-- content -->
</section>
```

### 5.3 Contoh Dokumentasi Layout
```html
---
# home.html
# 
# DESCRIPTION:
# Homepage layout extending default layout. Includes all sections
# in single-page scrolling format.
#
# SECTIONS:
# 1. Hero - Introduction and CTA
# 2. About - Personal bio
# 3. Skills - Technical competencies
# 4. Experience - Work history
# 5. Portfolio - Project showcase
# 6. Contact - Contact information
#
# CONFIGURATION:
# Set in front matter below
---

<!DOCTYPE html>
<html lang="id">
  {% include head.html %}
  <body>
    {% include header.html %}
    <main>
      {% include hero.html %}
      {% include about.html %}
      {% include skills.html %}
      {% include experience.html %}
      {% include portfolio.html %}
      {% include contact.html %}
    </main>
    {% include footer.html %}
  </body>
</html>
```

---

## 6. RESPONSIVE BEHAVIOR

### 6.1 Mobile (< 768px)
- Single column layout
- Hamburger menu navigation
- Stacked sections
- Full-width buttons
- Reduced font sizes
- Touch-friendly tap targets (min 44px)

### 6.2 Tablet (768px - 991px)
- 2-column grid untuk skills
- Timeline tetap single column
- Sidebar navigation muncul

### 6.3 Desktop (> 992px)
- Multi-column layouts
- Horizontal navigation
- Alternating timeline (left-right)
- Hover effects aktif
- Max-width container (1200px)

---

## 7. PERFORMANCE & SEO

### 7.1 Performance Targets

| Metric                   | Target                         |
|--------------------------|-------------------------------|
| First Contentful Paint   | < 1.5s                        |
| Time to Interactive      | < 3s                          |
| Lighthouse Score         | > 90                          |
| Page Size                | < 500KB                       |

### 7.2 SEO Requirements
- Semantic HTML5 tags (<header>, <main>, <section>, <article>)
- Meta tags lengkap (title, description, Open Graph)
- Structured data (JSON-LD) untuk Person
- Alt text untuk semua gambar
- Proper heading hierarchy (H1 > H2 > H3)

### 7.3 JSON-LD Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dandy Syahputra",
  "jobTitle": "Reporting, Analysis & Data Visualization Specialist",
  "url": "https://dandysyahputra.github.io/portfolio/",
  "sameAs": [
    "https://id.linkedin.com/in/dandy-syahputra-08984a207"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta",
    "addressCountry": "Indonesia"
  }
}
```

---

## 8. PROMPT UNTUK AI CODE GENERATION

**PROMPT 1: Project Setup**

```
Create a Jekyll portfolio website for Dandy Syahputra with the following specifications:

PERSONAL INFO:
- Name: Dandy Syahputra
- Title: Reporting, Analysis & Data Visualization | Freelancer Graphic Designer
- Location: Jakarta, Indonesia
- LinkedIn: linkedin.com/in/dandy-syahputra-08984a207
- Education: Universitas Bung Karno
- Summary: A proficient support staff with a strong focus on data management, transforming complex data into actionable insights and compelling visual designs.

TECHNICAL REQUIREMENTS:
1. Use Jekyll static site generator
2. GitHub Pages compatible (no plugins yang tidak support)
3. Mobile-first responsive design using Bootstrap 5 or pure CSS Grid/Flexbox
4. SCSS for styling with CSS variables for theming
5. Well-documented code dengan header comments di setiap file
6. Single-page scrolling layout dengan sections: Hero, About, Skills, Experience, Portfolio, Contact

DESIGN SPECIFICATIONS:
- Color scheme: Professional blue (#2563eb) as primary, neutral grays for text
- Typography: Inter for body, Poppins for headings (Google Fonts)
- Clean, minimal, modern aesthetic
- Smooth scrolling navigation
- Fade-in animations on scroll

FOLDER STRUCTURE:
portfolio/
├── _config.yml
├── _data/ (experience.yml, skills.yml, projects.yml)
├── _includes/ (head.html, header.html, footer.html, section components)
├── _layouts/ (default.html, home.html)
├── _sass/ (variables.scss, mixins.scss, base.scss, responsive.scss, sections.scss)
├── assets/ (css/, js/, images/)
├── index.html
├── 404.html
└── README.md (comprehensive documentation)

DELIVERABLES:
1. Complete Jekyll project structure
2. All SCSS files with CSS variables and mixins
3. Responsive HTML includes untuk setiap section
4. Sample data YAML files
5. Comprehensive README dengan setup instructions
6. Well-commented code explaining setiap component

Make sure the code is production-ready, clean, and follows Jekyll best practices.
```

**PROMPT 2: Specific Component**

```
Create the Experience section for Jekyll portfolio with these requirements:

DATA STRUCTURE (YAML):
Create _data/experience.yml dengan format:
- company: string
  position: string
  period: string
  location: string
  description: string
  achievements: array of strings

CONTENT (Dandy Syahputra):
1. PT. Tirta Varia Inti Pratama - Reporting & Data Analysis Staff - Jakarta - 2022-Present
   - Developed automated reporting system
   - Created executive dashboards
   - Managed monthly performance reports

2. Freelance Graphic Designer - Remote - 2020-Present
   - Branding projects
   - Social media design
   - Marketing materials

DESIGN:
- Vertical timeline layout
- Mobile: single column dengan timeline di kiri
- Desktop: alternating left-right layout
- Icons untuk setiap milestone
- Hover effects pada timeline items
- Responsive dengan breakpoints 768px

CODE REQUIREMENTS:
- Jekyll/Liquid syntax untuk loop data
- SCSS dengan BEM methodology
- Well-commented code
- Reusable mixins untuk timeline styling

Create file: _includes/experience.html dan _sass/_experience.scss
```

**PROMPT 3: Styling & Responsive**

```
Create complete SCSS architecture for Jekyll portfolio:

FILES TO CREATE:

1. _sass/_variables.scss
   - CSS custom properties untuk colors, spacing, typography
   - Color palette: primary blue #2563eb, neutral grays, semantic colors
   - 8px spacing scale
   - Typography scale dengan Inter dan Poppins fonts

2. _sass/_mixins.scss
   - Responsive breakpoints (mobile-first)
   - Flexbox utilities
   - Container mixins
   - Typography mixins

3. _sass/_base.scss
   - CSS reset/normalize
   - Base typography styles
   - Utility classes

4. _sass/_responsive.scss
   - Media queries for sm (576px), md (768px), lg (992px), xl (1200px)
   - Responsive utilities
   - Mobile navigation styles

5. _sass/_sections.scss
   - Common section styling
   - Hero section styles
   - About, Skills, Experience, Portfolio, Contact sections
   - Animation keyframes

REQUIREMENTS:
- Mobile-first approach
- CSS Grid dan Flexbox
- Smooth transitions dan hover effects
- Accessible focus states
- Well-commented dengan dokumentasi setiap section
- Import di assets/css/main.scss

Create production-ready, clean SCSS dengan proper architecture.
```

---

## 9. IMPLEMENTATION CHECKLIST

**Phase 1: Setup**
- [ ] Install Jekyll locally
- [ ] Create repository structure
- [ ] Setup _config.yml
- [ ] Create Gemfile

**Phase 2: Styling**
- [ ] Create SCSS variables
- [ ] Create mixins dan base styles
- [ ] Setup responsive breakpoints
- [ ] Create section styles

**Phase 3: Content**
- [ ] Create data files (YAML)
- [ ] Create includes untuk setiap section
- [ ] Create layouts
- [ ] Setup navigation

**Phase 4: Assets**
- [ ] Prepare profile photo
- [ ] Prepare portfolio images
- [ ] Optimize images
- [ ] Create resume PDF

**Phase 5: Testing**
- [ ] Test responsive di berbagai device
- [ ] Test di Chrome, Firefox, Safari
- [ ] Validate HTML/CSS
- [ ] Check Lighthouse score
- [ ] Test GitHub Pages deployment

**Phase 6: Launch**
- [ ] Setup custom domain (optional)
- [ ] Configure CNAME
- [ ] Final content review
- [ ] Deploy ke GitHub Pages

---

## 10. REFERENCE & RESOURCES
- Jekyll Documentation: https://jekyllrb.com/docs/
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Bootstrap 5: https://getbootstrap.com/
- Google Fonts: https://fonts.google.com/
- Font Awesome: https://fontawesome.com/

---

END OF PRD
