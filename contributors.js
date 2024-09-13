// Function to load and display contributors
function loadContributors() {
    fetch('contributors.json')
        .then(response => response.json())
        .then(data => {
            const contributorsList = document.getElementById('contributors-list');
            contributorsList.innerHTML = '';

            data.contributors.forEach(contributor => {
                // Create an HTML string with styles
                const listItem = document.createElement('li');
                listItem.innerHTML = `<span class="contributor-name">${contributor.name}</span> donated <span class="donation-amount">Rs ${contributor.amount}</span>`;
                contributorsList.appendChild(listItem);
            });
        });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadContributors();
});
