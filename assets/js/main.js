/* 3W Co Ltd — Site interactions */
(function () {
  'use strict';

  // ===== AOS init =====
  if (window.AOS) {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  // ===== Navbar scroll state =====
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    const back = document.getElementById('backToTop');
    if (back) {
      if (window.scrollY > 400) back.classList.add('visible');
      else back.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== Smooth-close mobile menu on link click =====
  const navCollapse = document.getElementById('navMenu');
  if (navCollapse) {
    navCollapse.querySelectorAll('.nav-link, .btn-cta').forEach((link) => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show') && window.bootstrap) {
          const bs = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse, { toggle: false });
          bs.hide();
        }
      });
    });
  }

  // ===== Footer year =====
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ===== Animated counters for stats =====
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length && 'IntersectionObserver' in window) {
    const animate = (el) => {
      const target = parseInt(el.dataset.target || '0', 10);
      const duration = 1400;
      const start = performance.now();
      const step = (t) => {
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toString();
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toString();
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.35 });
    counters.forEach((c) => io.observe(c));
  }

  // ===== Contact form: friendly inline confirmation =====
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="bi bi-check2-circle me-2"></i> Inquiry received — we\'ll be in touch';
      btn.classList.add('btn-success');
      btn.classList.remove('btn-primary');
      form.reset();
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
        btn.classList.remove('btn-success');
        btn.classList.add('btn-primary');
      }, 4200);
    });
  }
})();
