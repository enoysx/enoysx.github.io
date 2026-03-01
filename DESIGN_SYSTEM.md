# Vibe Coder Portfolio - Design System Implementation

## Overview

This document outlines the complete design system implementation for the Vibe Coder Portfolio website, based on clean, elegant, minimalist tech design principles.

---

## Color System

### Primary Palette
- **Background**: `#FAFAFA` (Warm white, not stark white)
- **Surface**: `#FFFFFF` (Pure white for cards)
- **Primary**: `#0A0A0A` (Near-black, not pure #000)
- **Secondary**: `#525252` (Neutral gray-600)
- **Accent**: `#3B82F6` (Tech blue — use sparingly)

### Semantic Colors
- **Success**: `#10B981` (Emerald)
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)

### Color Usage Rules
- 90% background white/surface
- 8% primary black (text, key elements)
- 2% accent blue (CTAs, highlights only)
- Gray for secondary text and borders

---

## Typography

### Font Stack
- **Primary**: Inter (Google Fonts)
  - Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Monospace**: JetBrains Mono (for code elements)
  - Weights: 400, 500

### Type Scale (Major Third — 1.25)

| Element | Size | Weight | Letter-spacing | Line-height |
|---------|------|--------|-----------------|-------------|
| Hero Display | 80px | 700 | -0.02em | 1.1 |
| H1 | 48px | 700 | -0.02em | 1.2 |
| H2 | 40px | 600 | -0.01em | 1.3 |
| H3 | 32px | 600 | 0 | 1.4 |
| H4 | 24px | 600 | 0 | 1.4 |
| Body Large | 20px | 400 | 0 | 1.6 |
| Body | 16px | 400 | 0 | 1.6 |
| Body Small | 14px | 400 | 0 | 1.5 |
| Caption | 12px | 500 | 0.05em | 1.4 |

### Typography Rules
- **Headings**: Tight letter-spacing for modern feel
- **Body**: Comfortable line-height (1.6) for readability
- **Code elements**: Mono font with background #F3F4F6, rounded 4px, padding 2px 6px
- **Max-width text**: 65ch for optimal reading

---

## Spacing System (8px Base)

### Scale
```
4px (xs)
8px (sm)
16px (md)
24px (lg)
32px (xl)
48px (2xl)
64px (3xl)
96px (4xl)
128px (5xl)
```

### Section Spacing
- Between sections: 96px-128px (desktop), 64px (mobile)
- Container padding: 24px (mobile), 48px (tablet), 64px (desktop)
- Component internal: 16px-24px

### Container
- Max-width: 1200px
- Center aligned
- Responsive padding

---

## Components

### Buttons

#### Primary Button
- **Background**: `#0A0A0A`
- **Text**: `#FFFFFF`
- **Padding**: 14px 28px
- **Border-radius**: 8px
- **Font**: 14px / 600 / 0.01em
- **Hover**: Background #262626, translateY(-1px)
- **Transition**: `all 200ms cubic-bezier(0.4, 0, 0.2, 1)`

#### Secondary Button
- **Background**: transparent
- **Border**: 1px solid #E5E5E5
- **Text**: `#0A0A0A`
- **Hover**: Background #FAFAFA, border #0A0A0A

#### Tertiary Button (Text)
- **Background**: transparent
- **Text**: `#0A0A0A`
- **Underline on hover**
- **Padding**: 8px 0

### Cards

#### Project Card
- **Background**: `#FFFFFF`
- **Border**: 1px solid #F0F0F0
- **Border-radius**: 16px
- **Padding**: 0 (image full bleed) + 24px (content)
- **Shadow**: none (flat design)
- **Hover**: Border #E5E5E5, subtle shadow 0 4px 20px rgba(0,0,0,0.05)
- **Transition**: `all 300ms ease`

#### Stat Card
- **Background**: `#FFFFFF`
- **Border**: 1px solid #F0F0F0
- **Border-radius**: 12px
- **Padding**: 24px
- **Number**: 48px / 700 / primary color
- **Label**: 14px / 500 / secondary color / uppercase / 0.05em spacing

### Navigation

#### Navbar
- Fixed top
- **Background**: `rgba(255, 255, 255, 0.8)`
- **Backdrop-filter**: blur(12px)
- **Border-bottom**: 1px solid #F0F0F0
- **Height**: 72px
- **Padding**: 0 48px

#### Nav Links
- **Font**: 14px / 500
- **Color**: #525252
- **Hover**: #0A0A0A
- **Active**: #0A0A0A with underline 2px offset 4px

#### Logo
- **Font**: 20px / 700 / Inter
- **Text**: "enoysx"
- **Color**: #0A0A0A

### Tags/Badges

#### Tech Tag
- **Background**: #F5F5F5
- **Text**: #525252
- **Padding**: 6px 12px
- **Border-radius**: 6px
- **Font**: 12px / 500
- **Hover**: Background #EBEBEB

#### Vibe Badge (Special)
- **Background**: #EFF6FF (blue-50)
- **Text**: #3B82F6
- **Border**: 1px solid #BFDBFE
- **Font**: 11px / 600 / uppercase / 0.05em

---

## Sections Design

### 1. HERO SECTION

**Layout**
- Full viewport height (100vh) minus navbar
- Centered content, max-width 800px
- Generous padding top (160px)

**Elements**
- **Eyebrow**: "VIBE CODER" — 12px / 600 / uppercase / #525252 / 0.1em letter-spacing
- **Name**: "Dandy Syahputra" — 80px / 700 / #0A0A0A / -0.02em
- **Tagline**: "Building with intuition, shipping with AI" — 32px / 600 / #525252 / 1.3
- **Description**: 20px / 400 / #525252 / max-width 600px / margin-top 24px
- **CTA Group**: margin-top 40px, gap 16px
  - Primary: "View My Work"
  - Secondary: "Get in Touch"
- **Scroll indicator**: Bottom center, subtle bounce animation, chevron icon

**Visual Treatment**
- Pure whitespace
- Optional: Very subtle gradient mesh (opacity 0.03) in corners — barely visible

### 2. ABOUT SECTION

**Layout**
- Left: 5 columns (image)
- Right: 7 columns (content)
- Gap: 64px
- Vertical center alignment

**Image Treatment**
- Aspect ratio: 4:5
- Object-fit: cover
- Border-radius: 16px
- No border, no shadow

**Content**
- **Eyebrow**: "ABOUT" — 12px / 600 / uppercase / #3B82F6
- **Heading**: "The Vibe Coder Approach" — 40px / 600 / #0A0A0A
- **Body**: 3 paragraphs, 18px / 1.7 / #525252
- **Stats row**: 3 stat cards horizontal, gap 24px, margin-top 48px

### 3. VIBE STACK SECTION

**Layout**
- Background: #FFFFFF (different from main bg for section break)
- Padding: 96px 0
- Centered heading

**Content**
- **Eyebrow**: "TOOLS" — 12px / 600 / uppercase / #3B82F6
- **Heading**: "Vibe Coder Stack" — 40px / 600 / center
- **Subheading**: 18px / 400 / #525252 / center / max-width 600px

**AI Tools Grid**
- 5 columns (desktop), 3 (tablet), 2 (mobile)
- Gap: 24px
- Each item:
  - Icon: 48px, Lucide icon, stroke-width 1.5
  - Name: 16px / 600 / #0A0A0A / margin-top 16px
  - Role: 14px / 400 / #525252

**Tech Stack**
- Below AI tools, margin-top 64px
- Heading: "Traditional Stack" — 24px / 600
- Grid: 6 columns (desktop), 3 (tablet), 2 (mobile)
- Progress bars for skill levels
- Height: 4px, background #F0F0F0, fill #0A0A0A, border-radius 2px

### 4. EXPERIENCE SECTION

**Layout**
- Timeline vertical
- Left: timeline line (2px, #F0F0F0)
- Right: content cards
- Gap between items: 48px

**Timeline Item**
- **Dot**: 12px circle, #0A0A0A, centered on line
- **Period**: 14px / 500 / #525252 / mono font
- **Role**: 24px / 600 / #0A0A0A
- **Company**: 16px / 500 / #525252
- **Description**: 16px / 1.6 / #525252 / margin-top 12px
- **Achievements**: Bullet list, 14px / 1.5 / #525252
- **Tech tags**: margin-top 16px, flex wrap, gap 8px

### 5. PROJECTS SECTION

**Layout**
- Filter tabs: center, gap 8px, margin-bottom 48px
- Grid: 2 columns (desktop), 1 (mobile)
- Gap: 32px

**Filter Tabs**
- Active: #0A0A0A bg, #FFFFFF text
- Inactive: transparent, #525252 text
- Padding: 8px 16px
- Border-radius: 20px (pill shape)
- Font: 14px / 500

**Project Card**
- **Image**: 16:9 ratio, object-cover, border-radius 12px 12px 0 0
- **Content padding**: 24px
- **Category badge**: Top-left of image, absolute position, margin 16px
- **Title**: 20px / 600 / #0A0A0A
- **Description**: 16px / 1.5 / #525252 / 2 lines max (truncate)
- **Tech tags**: flex wrap, gap 8px, margin-top 12px
- **Links**: margin-top 16px, flex, gap 16px, 14px / 500
  - "Live Demo" with external link icon
  - "Source" with GitHub icon

**Vibe Badge**
- Absolute top-right of card
- "AI-Assisted"
- Background: #EFF6FF, text: #3B82F6
- Padding: 4px 8px, border-radius: 4px
- Font: 11px / 600 / uppercase

### 6. CONTACT SECTION

**Layout**
- Background: #0A0A0A (inverted — dark section)
- Text: #FFFFFF
- Padding: 128px 0
- Centered content, max-width 600px

**Content**
- **Eyebrow**: "CONTACT" — 12px / 600 / uppercase / #3B82F6
- **Heading**: "Let's Build Something Together" — 48px / 700 / #FFFFFF / center
- **Subtext**: 18px / 1.6 / #A3A3A3 / center / margin-top 16px

**Contact Methods**
- Flex row, center, gap 32px, margin-top 48px
- Each: Icon (24px) + Label (14px / 500)
- Email: clickable, hover underline
- Social icons: GitHub, LinkedIn, Twitter

### 7. FOOTER

**Layout**
- Background: #FAFAFA
- Border-top: 1px solid #F0F0F0
- Padding: 48px 0
- Flex between: Logo left, links right

**Content**
- Logo: "enoysx"
- Copyright: "© 2026 Dandy Syahputra. Built with vibe."
- Links: GitHub, LinkedIn, Twitter (icons only, 20px, gap 16px)

---

## Micro-Interactions & Animations

### Principles
- Subtle, purposeful, never distracting
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` — standard ease
- Duration: 200ms for micro, 300-500ms for larger transitions

### Specific Animations

**Page Load**
- Navbar: fade in from top, 200ms delay
- Hero eyebrow: fade in, 100ms delay
- Hero name: fade in + translateY(20px), 200ms delay, 500ms duration
- Hero tagline: fade in, 400ms delay
- Hero description: fade in, 500ms delay
- Hero CTAs: fade in, 600ms delay

**Scroll Reveal**
- Elements fade in + translateY(30px) when entering viewport
- Threshold: 0.1 (10% visible)
- Duration: 500ms
- Stagger: 100ms between items

**Hover States**
- Buttons: translateY(-2px), shadow appears
- Cards: border color darkens, subtle lift
- Links: color transition to primary
- Images: scale(1.02), overflow hidden on container

**Focus States**
- Outline: 2px solid #3B82F6
- Outline-offset: 2px
- Remove default browser outline

**Active States**
- Buttons: scale(0.98)
- Cards: subtle shadow increase

---

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

### Mobile Adaptations
- Hero name: 48px (from 80px)
- Section padding: 64px 0 (from 96px)
- Grid: single column
- Navbar: hamburger menu
- Timeline: horizontal line becomes left border

---

## Assets & Icons

### Icons
- **Library**: Lucide Icons
- **Stroke width**: 1.5 (consistent)
- **Size**: 20px (default), 24px (large), 16px (small)

### Images
- **Format**: WebP with fallback JPG
- **Optimization**: Max 200KB per image
- **Lazy loading**: Native lazy loading
- **Aspect ratios**: 16:9 (projects), 4:5 (portrait), 1:1 (square)

### Profile Photo
- Style: Professional but approachable
- Background: Clean, minimal
- Treatment: Slight desaturate for cohesive look

---

## Accessibility

- **Contrast ratio**: Minimum 4.5:1 for text
- **Focus indicators**: Visible, consistent
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Alt text**: Descriptive for all images
- **ARIA labels**: For icon-only buttons
- **Reduced motion**: Respect `prefers-reduced-motion`

---

## CSS Variables Reference

All design tokens are defined as CSS custom properties in `:root`:

```css
:root {
  /* Colors */
  --bg: #fafafa;
  --surface: #ffffff;
  --primary: #0a0a0a;
  --secondary: #525252;
  --accent: #3b82f6;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;
  
  /* Fonts */
  --font-inter: 'Inter', system-ui, ...;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Transitions */
  --transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties support required
- Graceful degradation for older browsers

---

## Performance Optimizations

- **Fonts**: Preconnected to Google Fonts
- **Icons**: Lucide Icons (SVG, lightweight)
- **Images**: Optimized for web, responsive sizes
- **CSS**: Minimal, system fonts as fallback
- **JavaScript**: Vanilla JS, no heavy frameworks

---

## Future Enhancements

- Dark mode variant
- Advanced animations using Framer Motion
- Custom cursor effects
- Parallax scrolling
- 3D transforms on hero section
- Video integration
- Advanced filtering for projects
- Contact form with email integration

---

Created: March 1, 2026
Design System Version: 1.0.0
