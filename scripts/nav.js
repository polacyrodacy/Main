const toggle = document.getElementById('nav-toggle');
const overlay = document.getElementById('nav-overlay');
const panel = document.getElementById('nav-panel');
const close = document.getElementById('nav-close');

toggle.addEventListener('click', () => {
  overlay.classList.add('show');
  panel.classList.add('show');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
  panel.classList.remove('show');
});

close.addEventListener('click', () => {
  overlay.classList.remove('show');
  panel.classList.remove('show');
});