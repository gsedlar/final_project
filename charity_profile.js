// Get the button and form elements
const volunteerButton = document.getElementById('volunteer-button');
const volunteerForm = document.getElementById('volunteer-form');

// Add event listener to the button
volunteerButton.addEventListener('click', function() {
    // Toggle the visibility of the form
    if (volunteerForm.style.display === 'none') {
        volunteerForm.style.display = 'block';
        volunteerButton.style.display = 'none';
    } else {
        volunteerForm.style.display = 'none';
    }
});

//displays a confirmation message with the user's name inserted
volunteerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    
    alert(`Thank you, ${name}! Your submission has been received.`);
});