// Mobile‐Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav   = document.querySelector('.site-nav');

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

// Smooth Scroll für Ankerlinks
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    siteNav.classList.remove('open');
  });
});
