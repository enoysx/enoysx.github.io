// main.js (module style)
// global data variables (supporting older names for backwards compatibility)
const personal = window.personalData || window.personalInfo || {};
const skills = window.vibeStack || window.skills || {};
const projects = window.projectsData || window.projects || [];
const experience = window.experienceData || window.experience || [];
const education = window.educationData || [];

// helpers
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

/* render functions */
function renderHeroStats(){
  const container = $('#hero-stats');
  if(!container || !personal.stats) return;
  personal.stats && Object.entries(personal.stats).forEach(([k,v])=>{
    const label = k.replace(/([A-Z])/g, ' $1').replace(/^./,s=>s.toUpperCase());
    const item = document.createElement('div');
    item.className='stats-item';
    item.innerHTML=`<div class="value">${v}</div><div class="label text-sm">${label}</div>`;
    container.appendChild(item);
  });
  // tagline
  const desc = $('#hero-description');
  if(desc && personal.tagline){ desc.textContent = personal.tagline; }
}

function renderAboutSection(){
  const textContainer = $('#about-text');
  const heading = $('#about-heading');
  if(personal.about){
    if(heading && personal.about.short) heading.textContent = personal.about.short;
    if(textContainer && personal.about.paragraphs){
      personal.about.paragraphs.forEach(p=>{
        const el=document.createElement('p');
        el.textContent = p;
        textContainer.appendChild(el);
      });
    }
  }
  // set email links
  if(personal.email){
    const aboutEmail = $('#about-email');
    const contactEmail = $('#contact-email');
    if(aboutEmail) aboutEmail.textContent = personal.email;
    if(contactEmail){
      contactEmail.textContent = personal.email;
      contactEmail.href = `mailto:${personal.email}`;
    }
  }
}

function renderSkills(){
  const container = $('#skills-grid');
  if(!container) return;
  container.innerHTML='';
  Object.keys(skills).forEach(cat=>{
    const section = document.createElement('div');
    section.className='skill-category';
    section.innerHTML=`<h4 class="font-semibold mb-2">${cat}</h4>`;
    const list = document.createElement('div');
    list.className='flex flex-wrap gap-2';
    skills[cat].forEach(s=>{
      const tag = document.createElement('span');
      tag.className='px-2 py-1 text-sm rounded bg-white/6 inline-flex items-center gap-1';
      let content = '';
      if(s.icon){
        content += `<i data-lucide="${s.icon}" class="w-4 h-4"></i>`;
      }
      content += s.name;
      if(s.role){
        content += ` <span class="text-xs italic">(${s.role})</span>`;
      }
      tag.innerHTML = content;
      list.appendChild(tag);
    });
    section.appendChild(list);
    container.appendChild(section);
  });
  lucide.replace();
}

function renderProjects(filter='All'){
  const grid = $('#projects-grid');
  if(!grid) return;
  grid.innerHTML='';
  const list = projects.filter(p=>{
    if(filter==='All') return true;
    if(p.category && p.category.toLowerCase()===filter.toLowerCase()) return true;
    if((p.tags||[]).includes(filter)) return true;
    return false;
  });
  list.forEach(p=>{
    const el=document.createElement('article');
    el.className='project-card rounded-md overflow-hidden bg-white/5 border border-white/6 group';
    // include vibeMethod badge if present
    const vibeBadge = p.vibeMethod ? `<span class="px-2 py-1 text-xs rounded bg-accent text-neutral-900">AI Assisted</span>` : '';
    el.innerHTML=`
      <div class="h-44 bg-black/10 overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
      </div>
      <div class="p-4">
        <h4 class="font-semibold mb-2">${p.title} ${vibeBadge}</h4>
        <p class="text-sm text-neutral-300 mb-3 line-clamp-2">${p.description}</p>
        ${(p.vibeMethod)?`<p class="text-xs italic text-secondary-300 mb-2">${p.vibeMethod}</p>`:''}
        <div class="flex items-center justify-between">
          <div class="flex gap-2">${(p.tags||[]).map(t=>`<span class=\"px-2 py-1 text-xs rounded bg-white/6\">${t}</span>`).join('')}</div>
          <div class="flex gap-2">
            ${p.demoUrl?`<a href="${p.demoUrl}" target="_blank" class="px-2 py-1 bg-white/6 rounded"><i data-lucide="external-link"></i></a>`:''}
            ${p.repoUrl?`<a href="${p.repoUrl}" target="_blank" class="px-2 py-1 bg-white/6 rounded"><i data-lucide="github"></i></a>`:''}
          </div>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
  lucide.replace();
}

function renderFilters(){
  const container = $('#project-filters');
  if(!container) return;
  const base = ['All','Vibe','Traditional','Academic'];
  const filtersSet = new Set(base);
  projects.forEach(p=>{(p.tags||[]).forEach(t=>filtersSet.add(t));});
  const filters = Array.from(filtersSet);
  filters.forEach(f=>{
    const btn=document.createElement('button');
    btn.className='px-3 py-1 rounded bg-white/6 filter-btn';
    btn.textContent=f;
    btn.addEventListener('click',()=>{
      renderProjects(f);
      $$('.filter-btn').forEach(b=>b.classList.remove('bg-primary-500','text-neutral-900'));
      btn.classList.add('bg-primary-500','text-neutral-900');
    });
    container.appendChild(btn);
  });
}

function renderExperience(){
  const container=$('#experience-list');
  if(!container) return;
  experience.forEach(item=>{
    const el=document.createElement('div');
    el.className='timeline-item';
    el.innerHTML=`
      <h4 class="font-semibold">${item.role} <span class="text-sm font-normal">@ ${item.company}</span></h4>
      <span class="text-sm text-neutral-400">${item.period} • ${item.location}</span>
      <p class="mt-2 text-neutral-300">${item.description}</p>
      ${(item.achievements && item.achievements.length)?`<ul class="list-disc list-inside text-neutral-300 mt-1">${item.achievements.map(a=>`<li>${a}</li>`).join('')}</ul>`:''}
    `;
    container.appendChild(el);
  });
}

function renderEducation(){
  const container=$('#education-list');
  if(!container) return;
  education.forEach(item=>{
    const el=document.createElement('div');
    el.className='timeline-item';
    el.innerHTML=`
      <h4 class="font-semibold">${item.degree} <span class="text-sm font-normal">${item.field}</span></h4>
      <span class="text-sm text-neutral-400">${item.school} — ${item.location}</span>
      <span class="text-sm text-neutral-400 block">${item.period}</span>
      <p class="mt-2 text-neutral-300">${item.description}</p>
      ${(item.achievements && item.achievements.length)?`<ul class="list-disc list-inside text-neutral-300 mt-1">${item.achievements.map(a=>`<li>${a}</li>`).join('')}</ul>`:''}
    `;
    container.appendChild(el);
  });
}

function typeWriter(el, text, speed=100){
  if(!el||!text) return;
  let i=0;
  el.textContent='';
  const cursor = document.createElement('span');
  cursor.className='blink';
  el.appendChild(cursor);
  function type(){
    if(i<text.length){
      el.insertBefore(document.createTextNode(text.charAt(i)),cursor);
      i++;
      setTimeout(type,speed);
    }
  }
  type();
}

function initTheme(){
  const html=document.documentElement;
  const toggle=$('#theme-toggle');
  const stored=localStorage.getItem('theme');
  if(stored==='dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  swapThemeIcon();
  if(toggle){
    toggle.addEventListener('click',()=>{
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark')?'dark':'light');
      swapThemeIcon();
    });
  }
}

function swapThemeIcon(){
  const icon = $('#theme-icon');
  if(!icon) return;
  if(document.documentElement.classList.contains('dark')){
    icon.setAttribute('data-lucide','sun');
  } else {
    icon.setAttribute('data-lucide','moon');
  }
  lucide.replace();
}

function initMobileMenu(){
  const btn = $('#mobile-menu-btn');
  const menu = $('#mobile-menu');
  if(btn && menu){
    btn.addEventListener('click', ()=> menu.classList.toggle('hidden'));
  }
}

function initCopyEmail(){
  const copyBtn = $('#copy-email');
  const emailLink = $('#contact-email') || $('#about-email');
  if(copyBtn && emailLink){
    copyBtn.addEventListener('click', async ()=>{
      try{ await navigator.clipboard.writeText(emailLink.textContent); copyBtn.textContent='Copied'; setTimeout(()=>copyBtn.textContent='Copy',1500);}catch(e){console.warn(e);}
    });
  }
}

function initSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href=a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
}

function initScrollSpy(){
  const sections=document.querySelectorAll('section[id]');
  const links=document.querySelectorAll('nav a');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id=entry.target.id;
        links.forEach(l=>{
          l.classList.toggle('text-primary-500', l.getAttribute('href')===`#${id}`);
        });
      }
    });
  },{threshold:0.6});
  sections.forEach(s=>obs.observe(s));
}

function initBackToTop(){
  const btn = $('#back-to-top');
  if(!btn) return;
  window.addEventListener('scroll',()=>{
    if(window.scrollY>400) btn.classList.remove('hidden');
    else btn.classList.add('hidden');
  });
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

// vibe mode toggle switches between chill/hype pacing
function initVibeMode(){
  const html = document.documentElement;
  const toggle = $('#vibe-toggle');
  const icon = $('#vibe-icon');
  const stored = localStorage.getItem('vibeMode');
  function apply(mode){
    html.classList.remove('vibe-chill','vibe-hype');
    html.classList.add(mode);
    if(icon){
      icon.setAttribute('data-lucide', mode==='vibe-hype' ? 'zap' : 'minus');
    }
  }
  if(stored==='hype') apply('vibe-hype');
  else apply('vibe-chill');
  if(toggle){
    toggle.addEventListener('click',()=>{
      const current = html.classList.contains('vibe-hype')?'hype':'chill';
      const next = current==='hype'?'chill':'hype';
      apply('vibe-'+next);
      localStorage.setItem('vibeMode', next);
    });
  }
}

function initLiveCoding(){
  const container = $('#live-coding');
  if(!container) return;
  // fetch latest public events from GitHub user
  fetch('https://api.github.com/users/enoysx/events/public')
    .then(r=>r.json())
    .then(events=>{
      const commits = events.filter(e=>e.type==='PushEvent').slice(0,3);
      if(commits.length===0){ container.textContent='No recent activity'; return; }
      commits.forEach(ev=>{
        const repo = ev.repo.name;
        const msg = ev.payload.commits && ev.payload.commits[0] && ev.payload.commits[0].message;
        const item = document.createElement('div');
        item.className='text-xs mb-1';
        item.textContent = `📦 ${repo}: ${msg}`;
        container.appendChild(item);
      });
    }).catch(e=>{ console.warn('live coding fetch error',e); });
}

function initChatSimulator(){
  const toggle = $('#chat-toggle');
  const windowEl = $('#chat-window');
  if(!toggle||!windowEl) return;
  toggle.addEventListener('click',()=>{
    const chatSection = $('#ai-chat');
    if(chatSection){
      chatSection.classList.toggle('hidden');
      if(!chatSection.classList.contains('hidden')) {
        populateChat();
      }
    }
  });
}

function populateChat(){
  const windowEl = $('#chat-window');
  if(!windowEl) return;
  if(windowEl.dataset.filled) return;
  windowEl.dataset.filled = '1';
  const convo = [
    {who:'You',text:'How can I build that dashboard quickly?'},
    {who:'AI',text:'Use React + Tailwind and ask Copilot for component boilerplate.'},
    {who:'You',text:'Maybe add a particle background?'},
    {who:'AI',text:'Sure, canvas with connected dots. I can show you example code.'}
  ];
  convo.forEach(m=>{
    const line = document.createElement('div');
    line.innerHTML = `<strong>${m.who}:</strong> ${m.text}`;
    windowEl.appendChild(line);
  });
}

function init(){
  renderHeroStats();
  renderAboutSection();
  renderSkills();
  renderFilters();
  renderProjects();
  renderExperience();
  renderEducation();
  initTheme();
  initMobileMenu();
  initVibeMode();
  initCopyEmail();
  initSmoothScroll();
  initScrollSpy();
  initBackToTop();
  initLiveCoding();
  initChatSimulator();
  const roleEl = $('#hero-role');
  if(roleEl) typeWriter(roleEl, personal.role || '');
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{init();});
else init();

