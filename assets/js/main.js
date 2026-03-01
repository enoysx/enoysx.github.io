import { } from "";

// main.js (module)
const personal = window.personalInfo || {};
const skills = window.skills || [];
const projects = window.projects || [];

// Utilities
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// Render skills
function renderSkills(){
  const container = document.getElementById('skills-grid');
  if(!container) return;
  container.innerHTML = '';
  skills.forEach(cat =>{
    const card = document.createElement('div');
    card.className = 'project-card p-4 rounded-md bg-white/5 border border-white/6';
    const title = document.createElement('h4');
    title.className = 'font-semibold mb-2';
    title.textContent = cat.category;
    const list = document.createElement('div');
    list.className = 'flex flex-wrap gap-2';
    cat.items.forEach(it =>{
      const tag = document.createElement('span');
      tag.className = 'px-2 py-1 text-sm rounded bg-white/6';
      tag.textContent = it;
      list.appendChild(tag);
    });
    card.appendChild(title);
    card.appendChild(list);
    container.appendChild(card);
  });
}

// Render projects
function renderProjects(filter='All'){
  const grid = document.getElementById('projects-grid');
  if(!grid) return;
  grid.innerHTML = '';
  const list = projects.filter(p => filter==='All' || (p.tags && p.tags.includes(filter)));
  list.forEach(p =>{
    const el = document.createElement('article');
    el.className = 'project-card rounded-md overflow-hidden bg-white/5 border border-white/6';
    el.innerHTML = `
      <div class="h-44 bg-black/10 overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
      </div>
      <div class="p-4">
        <h4 class="font-semibold mb-2">${p.title}</h4>
        <p class="text-sm text-neutral-300 mb-3">${p.description}</p>
        <div class="flex items-center justify-between">
          <div class="flex gap-2">${(p.tags||[]).map(t => `<span class=\"px-2 py-1 text-xs rounded bg-white/6\">${t}</span>`).join('')}</div>
          <div class="flex gap-2">
            <a href="${p.demoUrl}" target="_blank" class="px-2 py-1 bg-white/6 rounded">Demo</a>
            <a href="${p.repoUrl}" target="_blank" class="px-2 py-1 bg-white/6 rounded">Code</a>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

function renderFilters(){
  const filters = ['All'];
  projects.forEach(p => (p.tags||[]).forEach(t => { if(!filters.includes(t)) filters.push(t); }));
  const container = document.getElementById('project-filters');
  if(!container) return;
  container.innerHTML = '';
  filters.forEach(f =>{
    const btn = document.createElement('button');
    btn.className = 'px-3 py-1 rounded bg-white/6';
    btn.textContent = f;
    btn.addEventListener('click', ()=>{ renderProjects(f); $$('button').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); });
    container.appendChild(btn);
  });
}

// Theme toggle
function initTheme(){
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if(stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  if(toggle){
    toggle.addEventListener('click', ()=>{
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });
  }
}

// Mobile menu
function initMobileMenu(){
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if(btn && menu){
    btn.addEventListener('click', ()=> menu.classList.toggle('hidden'));
  }
}

// Copy email
function initCopyEmail(){
  const copyBtn = document.getElementById('copy-email');
  const emailLink = document.getElementById('email-link');
  if(copyBtn && emailLink){
    copyBtn.addEventListener('click', async ()=>{
      try{ await navigator.clipboard.writeText(emailLink.textContent); copyBtn.textContent='Copied'; setTimeout(()=>copyBtn.textContent='Copy',1500);}catch(e){console.warn(e);}
    });
  }
}

// Smooth scroll for anchor links
function initSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
}

// Init
function init(){
  renderSkills();
  renderFilters();
  renderProjects();
  initTheme();
  initMobileMenu();
  initCopyEmail();
  initSmoothScroll();
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
