// Credit: https://bit.ly/3tNilSN
// Credit: https://www.emailjs.com/
let emailjs;

// Create sendEmail() Function
function sendEmail(contactForm) {
    emailjs.send('gmail', 'produck', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
        .then(
            // Alert Sent When Email Is Successful
            function () {
                alert("Your email has been sent. We'll get back to you as soon as possible!");
                window.location.reload(true);
                // Credit: https://bit.ly/3uLAoKt
            },

            // Alert Sent When Email Fails
            function () {
                alert("Sorry! Your email could not be sent. Please try again, thank you.");
                window.location.reload(true);
                // Credit: https://bit.ly/3uLAoKt
            });

    // Stops Reloading Page
    return false;
}