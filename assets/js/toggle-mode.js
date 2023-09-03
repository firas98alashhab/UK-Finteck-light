// Get the darkModePreference from localStorage
const darkModePreference = localStorage.getItem('darkModePreference');

// Apply the appropriate stylesheet based on the darkModePreference
const styleLink = document.getElementById('style-stylesheet'); // Change the ID accordingly
if (darkModePreference === 'enabled') {
    styleLink.href = 'assets/css/style-dark-mode.css';
} else {
    styleLink.href = 'assets/css/style.css';
}
