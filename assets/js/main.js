// Vibe Coder Portfolio - Main JavaScript
// Data sources
const personal = window.personalData || {};
const vibeStack = window.vibeStack || {};
const projects = window.projectsData || [];
const experience = window.experienceData || [];

// DOM Helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== HERO CONTENT =====
function renderHeroContent() {
  const eyebrow = $('#hero .hero-eyebrow');
  const nameElem = $('#hero .hero-name');
  const tagline = $('#hero .hero-tagline');
  const desc = $('#hero .hero-description');

  if (eyebrow && personal.role) eyebrow.textContent = personal.role;
  if (nameElem && personal.name) nameElem.textContent = personal.name;
  if (tagline && personal.tagline) tagline.textContent = personal.tagline;
  if (desc && personal.about && personal.about.short) {
    desc.textContent = personal.about.short;
  }
}

// ===== HERO STATS =====
function renderHeroStats() {
  const container = $('#hero-stats');
  if (!container || !personal.stats) return;

  Object.entries(personal.stats).forEach(([key, value], index) => {
    const label = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (s) => s.toUpperCase())
      .trim();

    const item = document.createElement('div');
    item.className = 'hero-stat-item';
    item.style.animationDelay = `${index * 100}ms`;
    item.innerHTML = `
      <span class="hero-stat-value">${value}</span>
      <span class="hero-stat-label">${label}</span>
    `;
    container.appendChild(item);
  });

  lucide.replace();
}

// ===== ABOUT SECTION =====
function renderAboutSection() {
  const textContainer = $('#about-text');
  const statsContainer = $('#about-stats');

  if (!textContainer || !personal.about) return;

  // Clear existing content
  textContainer.innerHTML = '';
  statsContainer.innerHTML = '';

  // Render paragraphs
  if (personal.about.paragraphs) {
    personal.about.paragraphs.forEach((paragraph) => {
      const p = document.createElement('p');
      p.style.fontSize = '18px';
      p.style.lineHeight = '1.7';
      p.style.color = 'var(--secondary)';
      p.style.marginBottom = 'var(--space-md)';
      p.textContent = paragraph;
      textContainer.appendChild(p);
    });
  }

  // Render stats
  if (personal.stats) {
    Object.entries(personal.stats).forEach(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (s) => s.toUpperCase())
        .trim();

      const statCard = document.createElement('div');
      statCard.className = 'stat-card';
      statCard.innerHTML = `
        <div class="stat-card-number">${value}</div>
        <div class="stat-card-label">${label}</div>
      `;
      statsContainer.appendChild(statCard);
    });
  }
}

// ===== VIBE STACK SECTION =====
function renderVibeStack() {
  const aiToolsGrid = $('#ai-tools-grid');
  const techGrid = $('#tech-grid');

  if (!aiToolsGrid || !vibeStack) return;

  // AI Tools
  if (vibeStack['Vibe Tools']) {
    aiToolsGrid.innerHTML = '';
    vibeStack['Vibe Tools'].forEach((tool) => {
      const toolCard = document.createElement('div');
      toolCard.className = 'tool-card';
      toolCard.innerHTML = `
        <svg class="tool-icon" data-lucide="${tool.icon || 'cpu'}" width="48" height="48"></svg>
        <div class="tool-name">${tool.name}</div>
        <div class="tool-role">${tool.role || ''}</div>
      `;
      aiToolsGrid.appendChild(toolCard);
    });
  }

  // Traditional Stack
  if (techGrid) {
    techGrid.innerHTML = '';
    
    // Combine all other categories
    Object.entries(vibeStack).forEach(([category, items]) => {
      if (category !== 'Vibe Tools') {
        items.forEach((item) => {
          const techItem = document.createElement('div');
          techItem.className = 'tech-item';
          
          if (item.level) {
            techItem.innerHTML = `
              <div class="tech-label">${item.name}</div>
              <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${item.level}%"></div>
              </div>
            `;
          } else {
            techItem.innerHTML = `
              <div class="tech-label">${item.name}</div>
              <div style="color: var(--secondary); font-size: 14px;">${item.role || ''}</div>
            `;
          }
          
          techGrid.appendChild(techItem);
        });
      }
    });
  }

  lucide.replace();
}

// ===== EXPERIENCE SECTION =====
function renderExperience() {
  const container = $('#experience-list');
  if (!container || !experience.length) return;

  container.innerHTML = '';

  experience.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <h4>${item.role}</h4>
      <span class="timeline-period">${item.period}</span>
      <span style="font-size: 14px; color: var(--secondary);">${item.company}</span>
      <p class="timeline-description">${item.description}</p>
      ${
        item.achievements && item.achievements.length
          ? `
        <ul class="timeline-achievements">
          ${item.achievements.map((achievement) => `<li>${achievement}</li>`).join('')}
        </ul>
      `
          : ''
      }
      ${
        item.technologies && item.technologies.length
          ? `
        <div class="timeline-tags">
          ${item.technologies.map((tech) => `<span class="tag">${tech}</span>`).join('')}
        </div>
      `
          : ''
      }
    `;
    container.appendChild(timelineItem);
  });
}

// ===== PROJECTS SECTION =====
function renderProjectFilters() {
  const container = $('#project-filters');
  if (!container) return;

  container.innerHTML = '';

  const filters = new Set(['All']);
  projects.forEach((project) => {
    if (project.category) filters.add(project.category);
    if (project.tags) project.tags.forEach((tag) => filters.add(tag));
  });

  Array.from(filters).forEach((filter) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    if (filter === 'All') btn.classList.add('active');
    btn.textContent = filter;
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(filter);
    });
    container.appendChild(btn);
  });
}

function renderProjects(filter = 'All') {
  const grid = $('#projects-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = projects.filter((p) => {
    if (filter === 'All') return true;
    if (p.category === filter) return true;
    if (p.tags && p.tags.includes(filter)) return true;
    return false;
  });

  filtered.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const vibeBadge = project.vibeMethod
      ? `<span class="badge-vibe">AI-Assisted</span>`
      : '';

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-card-image" />
      ${vibeBadge ? `<div class="project-card-vibe-badge">${vibeBadge}</div>` : ''}
      <div class="project-card-content">
        <div class="project-card-category">${project.category || 'Portfolio'}</div>
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-description">${project.description}</p>
        ${
          project.tags && project.tags.length
            ? `
          <div class="project-card-tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
        `
            : ''
        }
        <div class="project-card-links">
          ${
            project.demoUrl
              ? `<a href="${project.demoUrl}" target="_blank" rel="noopener">
              <svg data-lucide="external-link" width="16" height="16"></svg>
              <span>Live Demo</span>
            </a>`
              : ''
          }
          ${
            project.repoUrl
              ? `<a href="${project.repoUrl}" target="_blank" rel="noopener">
              <svg data-lucide="github" width="16" height="16"></svg>
              <span>Source</span>
            </a>`
              : ''
          }
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  lucide.replace();
}

// ===== NAVIGATION =====
function initMobileMenu() {
  const btn = $('#mobile-menu-btn');
  const menu = $('#mobile-menu');
  const navLinks = $('.nav-links');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Populate mobile menu
  if (navLinks && menu) {
    menu.innerHTML = navLinks.innerHTML;
    $$('#mobile-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
      });
    });
  }
}

// ===== SMOOTH SCROLL & SCROLL SPY =====
function initSmoothScroll() {
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = $(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

function initScrollSpy() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-links a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ===== CONTACT EMAIL =====
function initContactEmail() {
  if (personal.email) {
    const emailLink = $('#contact-email');
    if (emailLink) {
      emailLink.textContent = personal.email;
      emailLink.href = `mailto:${personal.email}`;
    }
  }
}

// ===== ANIMATIONS =====
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe elements with animation classes
  $$('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });
}

// ===== INITIALIZATION =====
function init() {
  // Render content
  renderHeroContent();
  renderHeroStats();
  renderAboutSection();
  renderVibeStack();
  renderExperience();
  renderProjectFilters();
  renderProjects('All');
  initContactEmail();

  // Initialize interactions
  initMobileMenu();
  initSmoothScroll();
  initScrollSpy();
  initScrollReveal();

  // Replace Lucide icons
  lucide.replace();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

