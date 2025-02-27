document.addEventListener('DOMContentLoaded', () => {
  // Load FontAwesome
  const loadFontAwesome = () => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fontAwesome = document.createElement('link');
      fontAwesome.rel = 'stylesheet';
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      document.head.appendChild(fontAwesome);
    }
  };

  // Create theme toggle button
  const createThemeToggle = () => {
    let themeToggle = document.querySelector('.theme-toggle');
    
    if (!themeToggle) {
      themeToggle = document.createElement('button');
      themeToggle.className = 'theme-toggle';
      document.body.appendChild(themeToggle);
    }

    const sunIcon = document.createElement('i');
    sunIcon.className = 'fas fa-sun';
    
    const moonIcon = document.createElement('i');
    moonIcon.className = 'fas fa-moon';
    
    themeToggle.innerHTML = '';
    themeToggle.appendChild(moonIcon);
    themeToggle.appendChild(sunIcon);

    return themeToggle;
  };

  // Initialize theme
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  };

  // Toggle theme function
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Initialize everything
  loadFontAwesome();
  initializeTheme();
  const themeToggle = createThemeToggle();
  themeToggle.addEventListener('click', toggleTheme);
});