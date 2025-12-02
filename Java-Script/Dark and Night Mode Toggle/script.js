const toggleButton = document.getElementById('theme-toggle');
let isDarkMode = false;


function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    if (isDarkMode) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
}


toggleButton.addEventListener('click', toggleTheme);
