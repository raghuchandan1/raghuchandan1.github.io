/* ── Nav: hamburger + scroll header ── */
const hamburger   = document.querySelector('.hamburger');
const mobileMenu  = document.querySelector('.nav-list ul');
const menuItems   = document.querySelectorAll('.nav-list ul li a');
const header      = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.backgroundColor = 'rgba(6, 13, 26, 0.85)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

/* ── Scroll-Reveal: Intersection Observer ── */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealEls.forEach((el) => observer.observe(el));
