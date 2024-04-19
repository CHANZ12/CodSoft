
    // JavaScript for handling form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Extract values from form inputs
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var sub = document.getElementById('sub').value;
        var mes = document.getElementById('mes').value;
        

        // Construct email message
        var message = "Name: " + name + "\n" +
                      "Phone Number: " + phone + "\n" +
                      "Email: " + email+ "\n" +
                      "Subject: "+sub+"\n"+
                      "Message: "+mes+"\n";

        // Open default email client with pre-filled message
        window.location.href = "mailto:chandru.itbtech@gmail.com?subject=Contact Form Submission&body=" + encodeURIComponent(message);
    });

