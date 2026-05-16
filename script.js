// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  let menu = document.getElementById('mobile-menu');
  if (!menu) {
    menu = document.createElement('div');
    menu.id = 'mobile-menu';
    menu.className = 'mobile-menu';
    menu.innerHTML = `
      <a href="#about" onclick="closeMenu()">À propos</a>
      <a href="#experience" onclick="closeMenu()">Expérience</a>
      <a href="#projects" onclick="closeMenu()">Projets</a>
      <a href="#skills" onclick="closeMenu()">Compétences</a>
      <a href="#contact" onclick="closeMenu()">Contact</a>
    `;
    document.body.appendChild(menu);
  }
  menu.classList.toggle('open', menuOpen);
}

function closeMenu() {
  menuOpen = false;
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.remove('open');
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.timeline-card, .project-card, .skill-group, .info-card, .contact-card, .about-text p'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 90;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--navy)'
      : '';
  });
});
