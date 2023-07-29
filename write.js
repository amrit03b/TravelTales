// JavaScript for write.html

// Get the form element
const journalForm = document.getElementById('journalForm');

// Add a submit event listener to the form
journalForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server for now
    
    // Get form data
    const formData = new FormData(journalForm);
    const title = formData.get('title');
    const content = formData.get('content');
    const image = formData.get('image');
    const publishOption = formData.get('publishOption');

    // Perform any other actions with form data, such as saving to a database or showing a confirmation message
    // For now, we will just log the data to the console
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);
    console.log('Publish Option:', publishOption);

    // Reset the form
    journalForm.reset();
});
