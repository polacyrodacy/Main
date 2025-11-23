// Pobieramy elementy
const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.querySelector('.nav-panel');
const navOverlay = document.querySelector('.nav-overlay');

// Funkcja otwierania panelu
function openNav() {
  navPanel.classList.add('show');
  navOverlay.classList.add('show');
  navToggle.innerHTML = "&times;"; // zmiana hamburgera na X
}

// Funkcja zamykania panelu
function closeNav() {
  navPanel.classList.remove('show');
  navOverlay.classList.remove('show');
  navToggle.innerHTML = "&#9776;"; // powrót do hamburgera
}

// Jeden event handler — otwieranie i zamykanie
navToggle.addEventListener('click', () => {
  if (navPanel.classList.contains('show')) {
    closeNav();
  } else {
    openNav();
  }
});

// Kliknięcie overlay też zamyka
navOverlay.addEventListener('click', closeNav);