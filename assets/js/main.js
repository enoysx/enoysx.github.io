/**
 * main.js
 * Main JavaScript for portfolio interactivity and animations
 * 
 * Features:
 * - Smooth scroll navigation
 * - Scroll-triggered fade-in animations
 * - Active nav link highlighting
 * - Mobile menu toggle
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    setTimeout(() => {
      observer.observe(item);
    }, index * 100);
  });

  // Observe portfolio cards
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.opacity = '0';
    setTimeout(() => {
      observer.observe(card);
    }, index * 100);
  });

  // ===== SMOOTH SCROLL NAVIGATION =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just '#'
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        // Close mobile menu if open
        const navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse && navCollapse.classList.contains('show')) {
          navCollapse.classList.remove('show');
        }
        
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active nav link
        updateActiveNav(href);
      }
    });
  });

  // ===== ACTIVE NAV LINK HIGHLIGHTING =====
  function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === sectionId) {
        link.classList.add('active');
      }
    });
  }

  // Update active nav on scroll
  window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('.section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      updateActiveNav('#' + current);
    }
  });

  // ===== MOBILE MENU TOGGLE =====
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      const navCollapse = document.querySelector('.navbar-collapse');
      if (navCollapse) {
        navCollapse.classList.toggle('show');
      }
    });
  }

  // ===== PARALLAX EFFECT (OPTIONAL) =====
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    
    if (hero && scrolled < hero.clientHeight) {
      hero.style.backgroundPosition = '0 ' + (scrolled * 0.5) + 'px';
    }
  });

  // ===== LAZY LOAD IMAGES =====
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ===== ADD ANIMATION STYLES DYNAMICALLY =====
  const style = document.createElement('style');
  style.textContent = `
    .section,
    .timeline-item,
    .card {
      opacity: 1;
      animation: none;
    }
    
    .section.fade-in,
    .timeline-item.fade-in,
    .card.fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .nav-link.active {
      color: var(--primary-color) !important;
      font-weight: 600;
      border-bottom: 2px solid var(--primary-color);
      padding-bottom: 0.25rem;
    }
    
    @media (max-width: 767px) {
      .navbar-collapse {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }
      
      .navbar-collapse.show {
        max-height: 500px;
      }
    }
  `;
  document.head.appendChild(style);

  // ===== ADD SMOOTH SCROLL BEHAVIOR GLOBALLY =====
  document.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
      link.style.scrollBehavior = 'smooth';
    }
  });

});
