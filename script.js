// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        emailjs.send("service_nmtqchf", "template_ys318sr").then(alert("email sent!"))
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});