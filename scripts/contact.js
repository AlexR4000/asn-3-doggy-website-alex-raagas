// Select the submit button and the contact page container
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// Add an event listener to the submit button
submitButton.addEventListener('click', function (event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Create a new <p> element for the thank you message
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = "Thank you for your message";

    // Change the font size of the message to 24px
    thankYouMessage.style.fontSize = '24px';

    // Add margin-top to position the message 10px below the header
    thankYouMessage.style.marginTop = '10px';

    // Clear the existing content of the contact page
    contactPage.innerHTML = '';

    // Append the thank you message to the contact page
    contactPage.appendChild(thankYouMessage);
});
