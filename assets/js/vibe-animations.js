// vibe-animations.js
// handles glitch effects, particle background, konami easter egg, etc.

// particle network background inside hero canvas
function initParticles(){
  const canvas = document.getElementById('particle-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  const particles = [];
  const config = { count: 80, speed: 0.5, proximity: 100 };

  function resize(){
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function create(){
    for(let i=0;i<config.count;i++){
      particles.push({
        x: Math.random()*width,
        y: Math.random()*height,
        vx: (Math.random()-0.5)*config.speed,
        vy: (Math.random()-0.5)*config.speed
      });
    }
  }
  function draw(){
    ctx.clearRect(0,0,width,height);
    particles.forEach(p=>{
      ctx.fillStyle='#00f0ff';
      ctx.beginPath();
      ctx.arc(p.x,p.y,2,0,Math.PI*2);
      ctx.fill();
      // connect
      particles.forEach(q=>{
        const dx=p.x-q.x; const dy=p.y-q.y;
        const dist=Math.hypot(dx,dy);
        if(dist<config.proximity){
          ctx.strokeStyle='rgba(0,240,255,'+(1-dist/config.proximity)+')';
          ctx.lineWidth=0.5;
          ctx.beginPath();
          ctx.moveTo(p.x,p.y);
          ctx.lineTo(q.x,q.y);
          ctx.stroke();
        }
      });
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>width) p.vx*=-1;
      if(p.y<0||p.y>height) p.vy*=-1;
    });
    requestAnimationFrame(draw);
  }
  create();
  draw();
}

// glitch effect on elements with class 'glitch'
function initGlitch(){
  const els = document.querySelectorAll('.glitch');
  els.forEach(el=>{
    el.addEventListener('mouseenter',()=>{
      el.classList.add('do-glitch');
      setTimeout(()=>el.classList.remove('do-glitch'),500);
    });
  });
}

// Konami code easter egg
function initKonami(){
  const seq=[38,38,40,40,37,39,37,39,66,65];
  let pos=0;
  document.addEventListener('keydown',e=>{
    if(e.keyCode===seq[pos]){
      pos++;
      if(pos===seq.length){
        activateKonami();
        pos=0;
      }
    } else {
      pos=0;
    }
  });
}
function activateKonami(){
  document.body.classList.add('konami');
  // maybe open chat as well
  const chatSection = document.getElementById('ai-chat');
  if(chatSection) chatSection.classList.remove('hidden');
}

// initialization
document.addEventListener('DOMContentLoaded',()=>{
  initParticles();
  initGlitch();
  initKonami();
});

export {};// module placeholder
