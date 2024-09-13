// Initial setup
const goalAmount = 50000;
let collectedAmount = 0;

// Function to update progress
function updateProgress() {
    let progressPercentage = (collectedAmount / goalAmount) * 100;
    let progressBar = document.querySelector('.progress-bar');
    let circumference = 2 * Math.PI * 45; // Circumference of the circle (2 * π * radius)
    let offset = circumference - (progressPercentage / 100) * circumference;

    // Update the progress bar
    if (progressBar) {
        progressBar.style.strokeDashoffset = offset;
    }

    // Update the progress text
    let progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.textContent = progressPercentage.toFixed(2) + '%';
    }

    // Format numbers using Arabic numerals
    const numberFormat = new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });

    // Update the displayed amounts
    let goalAmountElem = document.getElementById('goal-amount');
    let collectedAmountElem = document.getElementById('collected-amount');
    if (goalAmountElem && collectedAmountElem) {
        goalAmountElem.textContent = numberFormat.format(goalAmount);
        collectedAmountElem.textContent = numberFormat.format(collectedAmount);
    }
}

// Function to load and display contributors
function loadContributors() {
    fetch('contributors.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Contributors data:', data); // Debugging statement
            collectedAmount = 0; // Reset collected amount

            data.contributors.forEach(contributor => {
                collectedAmount += contributor.amount;
            });

            // Update the progress after calculating the total amount
            updateProgress();
        })
        .catch(error => console.error('Error loading contributors:', error));
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadContributors();
});
