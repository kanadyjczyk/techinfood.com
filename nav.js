// TechInFood — Shared JS
function openModal() { document.getElementById('modal').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal() { document.getElementById('modal').classList.remove('open'); document.body.style.overflow = ''; }
function submitForm() {
  document.getElementById('modal-inner').innerHTML = `<div style="text-align:center;padding:24px 0;"><div style="font-size:48px;margin-bottom:18px;">✓</div><p style="font-family:'Playfair Display',serif;font-size:20px;color:var(--cream);margin-bottom:10px;">We'll reply within 1 business day</p><p style="font-size:12px;color:var(--muted);line-height:1.8;margin-bottom:24px;">Thanks — we answer every question personally.</p><button onclick="closeModal()" style="background:var(--amber);color:#0d0d0b;border:none;padding:11px 24px;font-family:'DM Mono',monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;">Close</button></div>`;
}
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  if (modal) modal.addEventListener('click', function(e) { if(e.target===this) closeModal(); });
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e,i) => { if(e.isIntersecting) { setTimeout(()=>e.target.classList.add('visible'),i*50); obs.unobserve(e.target); } });
  }, { threshold:0.07, rootMargin:'0px 0px -24px 0px' });
  reveals.forEach(el=>obs.observe(el));
});
