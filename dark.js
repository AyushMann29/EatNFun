const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const nav = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    nav.classList.toggle('dark-mode');
    nav.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});