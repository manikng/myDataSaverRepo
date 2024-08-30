document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const email = document.getElementById('email').value;
    alert(`Thank you for signing up, ${email}!`);
    document.getElementById('signup-form').reset(); // Reset the form
});
