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
    card.classList.add('card', 'journal-card', 'mb-4');
    card.innerHTML = `
        <img src="${journalImage ? URL.createObjectURL(journalImage) : 'images/cards.jpg'}" class="card-img-top" alt="Journal Image">
        <div class="card-body">
            <h5 class="card-title">${journalTitle}</h5>
            <p class="card-text">${journalContent}</p>
            <hr />
            <p class="card-text text-end">${publicCheck ? 'Public' : 'Private'}</p>
        </div>
    `;

    // Add the new card to the published journals container
    const publishedJournals = document.getElementById('publishedJournals');
    publishedJournals.appendChild(card);

    // console.log(publishedJournals);

    const journalData = {
        title: journalTitle,
        content: journalContent,
        image: journalImage ? URL.createObjectURL(journalImage) : null,
        isPublic: publicCheck
    };
    // console.log(journalData);
    localStorage.setItem('journalData', JSON.stringify(journalData));

    // Reset the form fields
    journalForm.reset();
}

// Event listener for the form submission
const journalForm = document.getElementById('journal-form');
journalForm.addEventListener('submit', createJournal);
