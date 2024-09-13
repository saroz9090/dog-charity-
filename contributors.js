// Function to load and display contributors
function loadContributors() {
    fetch('contributors.json')
        .then(response => response.json())
        .then(data => {
            const contributorsList = document.getElementById('contributors-list');
            contributorsList.innerHTML = '';

            data.contributors.forEach(contributor => {
                const listItem = document.createElement('li');
                listItem.textContent = `${contributor.name} donated Rs ${contributor.amount}`;
                contributorsList.appendChild(listItem);
            });
        });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadContributors();
});
