// Function to create a new journal
function createJournal(event) {
    event.preventDefault();
    const journalForm = document.getElementById('journal-form');
    const journalTitle = journalForm.elements['journalTitle'].value;
    const journalContent = journalForm.elements['journalContent'].value;
    const journalImage = journalForm.elements['journalImage'].files[0];
    const publicCheck = journalForm.elements['publicCheck'].checked;

    // Create a new card to display the journal details
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${journalImage ? URL.createObjectURL(journalImage) : 'placeholder.jpg'}" class="card-img-top" alt="Journal Image">
        <div class="card-body">
            <h5 class="card-title">${journalTitle}</h5>
            <p class="card-text">${journalContent}</p>
            <p class="card-text">${publicCheck ? 'Public' : 'Private'}</p>
        </div>
    `;

    // Add the new card to the published journals container
    const publishedJournals = document.getElementById('publishedJournals');
    publishedJournals.appendChild(card);

    // Reset the form fields
    journalForm.reset();
}

// Event listener for the form submission
const journalForm = document.getElementById('journal-form');
journalForm.addEventListener('submit', createJournal);
