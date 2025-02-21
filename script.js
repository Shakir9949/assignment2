const usernameInput = document.getElementById('username');
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Load saved name on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        displayName.textContent = `Welcome back, ${savedName}!`;
    }
});

// Save name to localStorage
saveButton.addEventListener('click', () => {
    const name = usernameInput.value;
    if (name) {
        localStorage.setItem('username', name);
        displayName.textContent = `Welcome, ${name}!`;
        usernameInput.value = '';
    }
});

// Clear name from localStorage
clearButton.addEventListener('click', () => {
    localStorage.removeItem('username');
    displayName.textContent = '';
});