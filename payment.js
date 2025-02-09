// payment.js

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get the values from the input fields
    const nameOnCard = document.getElementById('name-on-card').value.trim();
    const expirationDate = document.getElementById('expiration-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    // Basic validation (can be extended further)
    if (!nameOnCard || !expirationDate || !cvv) {
        alert('Please fill out all fields.');
        return;
    }

    // Simple pattern validation for CVV
    const cvvPattern = /^[0-9]{3}$/; // Basic CVV check

    if (!cvvPattern.test(cvv)) {
        alert('Invalid CVV format. It should be 3 digits.');
        return;
    }

    // Simulate a successful payment and redirect to the complete payment page
    // You can replace this with actual payment gateway API integration if needed

    // Redirect to completepayment.html after successful payment
    localStorage.setItem('paymentDetails', JSON.stringify({
        nameOnCard,
        expirationDate,
        cvv
    }));

    window.location.href = 'completepayment.html'; // Redirect to the complete payment page
});
