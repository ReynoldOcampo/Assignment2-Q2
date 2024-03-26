document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const confirmationDiv = document.getElementById('confirmation');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(registrationForm);
        const registrationData = {};
        formData.forEach((value, key) => {
            registrationData[key] = value;
        });

        // Calculate fee based on status
        let fee = 0;
        switch (registrationData.status) {
            case 'student':
                fee = 10;
                break;
            case 'staff':
                fee = 50;
                break;
            case 'volunteer':
                fee = 0;
                break;
            default:
                fee = 0;
        }

        // Display confirmation notice
        confirmationDiv.innerHTML = `<h2>Confirmation Notice</h2>
                                      <p><strong>ID:</strong> ${registrationData.id}</p>
                                      <p><strong>Full Name:</strong> ${registrationData['full-name']}</p>
                                      <p><strong>Address:</strong> ${registrationData.address}</p>
                                      <p><strong>Status:</strong> ${registrationData.status}</p>
                                      <p><strong>Fee:</strong> $${fee}</p>`;

        // Hide the form
        registrationForm.style.display = 'none';
        confirmationDiv.style.display = 'block';
    });
});
