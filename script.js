const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeIcon.className = isDark ? 'bi bi-sun-fill fs-4' : 'bi bi-moon-fill fs-4';
});
