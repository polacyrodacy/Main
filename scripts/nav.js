 // Pobieramy elementy
  const navToggle = document.querySelector('.nav-toggle');
  const navPanel = document.querySelector('.nav-panel');
  const navOverlay = document.querySelector('.nav-overlay');
  const navClose = document.querySelector('.nav-close');

  // Funkcja otwierania panelu
  function openNav() {
    navPanel.classList.add('show');
    navOverlay.classList.add('show');
  }

  // Funkcja zamykania panelu
  function closeNav() {
    navPanel.classList.remove('show');
    navOverlay.classList.remove('show');
  }

  // Eventy
  navToggle.addEventListener('click', openNav);
  navClose.addEventListener('click', closeNav);
  navOverlay.addEventListener('click', closeNav);