// Credit: https://bit.ly/3tNilSN
// Credit: https://www.emailjs.com/
let emailjs;

// Create sendEmail() Function
function sendEmail(newsletterForm) {
    emailjs.send('gmail', 'produck', {
        "from_email": newsletterForm.email.value,
    })
        .then(
            // Alert Sent When Email Is Successful
            function () {
                alert("Thanks for subcribing to our newsletter!");
                window.location.reload(true);
                // Credit: https://bit.ly/3uLAoKt
            },

            // Alert Sent When Email Fails
            function () {
                alert("Sorry! Could you please try again with a valid email?");
                window.location.reload(true);
                // Credit: https://bit.ly/3uLAoKt
            });

    // Stops Reloading Page
    return false;
}