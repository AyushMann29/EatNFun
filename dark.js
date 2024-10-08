const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const nav = document.querySelector('nav');

// Set mode based on localStorage or default to light mode
const setMode = (mode) => {
    body.classList.toggle('dark-mode', mode === 'dark');
    body.classList.toggle('light-mode', mode === 'light');
    nav.classList.toggle('dark-mode', mode === 'dark');
    nav.classList.toggle('light-mode', mode === 'light');
    toggleButton.textContent = mode === 'dark' ? '☀️' : '🌙';
};

const savedMode = localStorage.getItem('mode') || 'light';
setMode(savedMode);

toggleButton.addEventListener('click', () => {
    const newMode = body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('mode', newMode);
    setMode(newMode);
});
