document.addEventListener('DOMContentLoaded', function () {
  const journalDataString = localStorage.getItem('journalData');
  const journalData = JSON.parse(journalDataString);
  const journalContentSection = document.getElementById('journalContent');

  if (journalData && journalData.isPublic) {
    // Create a container div for all the cards
    const cardContainer = document.createElement('div');

    // Create a card for the current journal entry
    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = `
      <img src="${journalData.image ? journalData.image : 'images/cards.jpg'}" alt="Journal Image">
      <div class="card-body">
        <h1>${journalData.title}</h1>
        <p>${journalData.content}</p>
        <p>${journalData.isPublic ? 'Public' : 'Private'}</p>
      </div>
    `;

    card.innerHTML = cardContent;

    // Append the card to the card container
    cardContainer.appendChild(card);

    // Append the card container to the journalContentSection
    journalContentSection.appendChild(cardContainer);
  } else {
    journalContentSection.innerHTML = '<p style="margin-top: 5px;">No public content available.</p>';
  }
});

// search bar implementation code
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search');
  const journalList = document.getElementById('journalContent'); //this will search all keywords under journalContent id
  

  searchButton.addEventListener('click', function () {
      const searchTerm = searchInput.value.toLowerCase();

      // Loop through journal entries and show/hide based on search term
      const journalEntries = journalList.getElementsByTagName('li');
      for (const entry of journalEntries) {
          const entryText = entry.innerText.toLowerCase();
          if (entryText.includes(searchTerm)) {
              entry.style.display = 'block';
          } else {
              entry.style.display = 'none';
          }
      }
  });
});

