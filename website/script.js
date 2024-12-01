let selectedLanguage = 'ta'; // Default language: Tamil

// Function to handle input change based on selected language
function openTranslation() {
    const userInput = document.getElementById('userInput').value.trim();
    if (!userInput) {
        alert("Please enter some text to translate!");
        return;
    }

    // Modify userInput to replace dots with hyphens
    const formattedInput = userInput.replace(/\./g, '-');

    const translateURL = `https://${encodeURIComponent(formattedInput)}.translate.goog/?_x_tr_sl=auto&_x_tr_tl=${selectedLanguage}&_x_tr_hl=en&_x_tr_pto=wapp`;
    
    // Open the translation URL in a new tab
    const newTab = window.open(translateURL);

    // Check if the tab was opened successfully
    if (!newTab) {
        alert("Unable to open a new tab. Please check your browser settings.");
    }
}

// Change the selected language based on the dropdown menu
function setLanguage(languageCode) {
    selectedLanguage = languageCode;
}

// Set default link from dropdown
function setDefaultLink() {
    const dropdown = document.getElementById('defaultLinks');
    const userInput = document.getElementById('userInput');
    
    // If a default link is selected, populate the input field
    if (dropdown.value) {
        userInput.value = dropdown.value;
    }
}

// Event listener for 'Enter' key press to trigger translation
document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        openTranslation();
    }
});
