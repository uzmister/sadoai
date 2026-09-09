const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const toast = document.querySelector('.toast');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });
}

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.classList.remove('open');
    mobileNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileNav?.setAttribute('aria-hidden', 'true');
  });
});

// The page is a concept presentation, so actions gently explain the MVP status instead of pretending to perform a purchase.
document.querySelectorAll('.language-picker, .socials a').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    showToast('Til va ijtimoiy tarmoq integratsiyasi keyingi bosqichda qo‘shiladi.');
  });
});

let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3600);
}

const steps = document.querySelectorAll('.step-item');
steps.forEach((step) => {
  step.addEventListener('mouseenter', () => {
    steps.forEach((item) => item.classList.remove('active'));
    step.classList.add('active');
  });
});
