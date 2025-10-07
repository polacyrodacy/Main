  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('i');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') icon.classList.replace('fa-moon', 'fa-sun');

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });