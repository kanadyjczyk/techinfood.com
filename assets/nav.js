/* TechInFood — Shared JS v2 */
(function() {

  /* ── Modal ── */
  window.openModal = function() {
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeModal = function() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  };
  window.submitForm = function() {
    document.getElementById('modal-inner').innerHTML = `
      <div style="text-align:center;padding:32px 0;">
        <div style="width:56px;height:56px;background:#E6F7F3;border-radius:50%;display:grid;place-items:center;font-size:1.5rem;margin:0 auto 16px;">✓</div>
        <div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#0C9E80;margin-bottom:8px;font-family:'Plus Jakarta Sans',sans-serif;">Message received</div>
        <h3 style="font-family:'Instrument Serif',serif;font-size:1.3rem;color:#0F172A;margin-bottom:8px;">We'll reply within 1 business day</h3>
        <p style="font-size:.875rem;color:#64748B;line-height:1.75;max-width:280px;margin:0 auto 24px;">Thanks — we answer every question personally.</p>
        <button onclick="closeModal()" style="background:#1B62F8;color:white;border:none;border-radius:10px;padding:11px 24px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.875rem;font-weight:700;cursor:pointer;">Close</button>
      </div>`;
  };

  /* ── Subscribe ── */
  window.subscribe = function() {
    const el = document.getElementById('sub-email') || document.getElementById('nl-email');
    if (el && el.value) { el.value = ''; el.placeholder = '✓ You\'re subscribed!'; }
  };

  /* ── FAQ ── */
  window.faq = function(el) {
    const a = el.nextElementSibling;
    const open = el.classList.contains('open');
    document.querySelectorAll('.faq-q.open').forEach(q => {
      q.classList.remove('open');
      q.nextElementSibling.classList.remove('open');
    });
    if (!open) { el.classList.add('open'); a.classList.add('open'); }
  };
  /* Alias for pages using toggleFaq */
  window.toggleFaq = window.faq;

  /* ── Reveal on scroll ── */
  document.addEventListener('DOMContentLoaded', function() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 55);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.rev').forEach(el => obs.observe(el));

    /* Close modal on backdrop click */
    const modal = document.getElementById('modal');
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  });

})();
