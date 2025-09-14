const toggle = document.getElementById('darkModeToggle');

// Apply saved mode on load
if (toggle && localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggle.innerText = 'O';
} else if (toggle) {
  toggle.innerText = 'I';
}

// Toggle mode on click
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      toggle.innerText = 'O';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      toggle.innerText = 'I';
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}
