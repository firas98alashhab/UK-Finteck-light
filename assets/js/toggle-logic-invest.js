const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const styleStylesheet = document.getElementById('style-stylesheet');
const landingStylesheet = document.getElementById('landing-stylesheet'); // Add this line
const investLinkBtn = document.getElementById('invest-link-btn');

// Set default dark mode preference if not stored in localStorage
if (!localStorage.getItem('darkModePreference')) {
    localStorage.setItem('darkModePreference', 'disabled');
}

// Update the link for "Invest with us" button based on the stored preference
function updateInvestPageLink() {
    const darkModePreference = localStorage.getItem('darkModePreference');
    const investPage = darkModePreference === 'enabled' ? 'html/invest-dark.html' : 'html/invest.html';
    investLinkBtn.href = investPage;
}

// Apply the correct styles and update button link based on preference
function applyStylesAndPreference(preference) {
    if (preference === 'enabled') {
        styleStylesheet.href = 'assets/css/style-dark-mode.css';
        modeIcon.src = 'assets/images/button-toggle-icons/brightness-1.png';
    } else {
        styleStylesheet.href = 'assets/css/style.css';
        modeIcon.src = 'assets/images/button-toggle-icons/night-mode-1.png';
        landingStylesheet.href = 'assets/css/landing.css';
    }
    updateInvestPageLink();
}

// Initialize styles and button link based on stored preference
applyStylesAndPreference(localStorage.getItem('darkModePreference'));

// Toggle dark mode and update button link on toggle button click
modeToggle.addEventListener('click', () => {
    const currentPreference = localStorage.getItem('darkModePreference');
    const newPreference = currentPreference === 'enabled' ? 'disabled' : 'enabled';
    localStorage.setItem('darkModePreference', newPreference);
    applyStylesAndPreference(newPreference);
});