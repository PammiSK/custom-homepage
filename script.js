// Function to toggle dark mode
function toggleMode() {
    document.body.classList.toggle('light-mode');
    // Save user preference in localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        document.getElementById('mode-toggle').textContent = 'Dark Mode';
    } else {
        localStorage.setItem('theme', 'dark');
        document.getElementById('mode-toggle').textContent = 'Light Mode';
    }
}

// Ensure the DOM is fully loaded before running the script
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('mode-toggle').textContent = 'Dark Mode';
    } else {
        document.getElementById('mode-toggle').textContent = 'Light Mode';
    }

    // Add event listener for the toggle button
    document.getElementById('mode-toggle').addEventListener('click', toggleMode);
}
