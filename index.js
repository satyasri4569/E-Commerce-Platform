// Function to toggle between Login and Sign Up forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Handle login form submission
document.getElementById('loginFormHandler').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // For demo purposes, just log the login details
    console.log('Login Info:', { email, password });

    // Simulating successful login
    setTimeout(() => {
        // Show the account section after login success
        document.getElementById('account-section').style.display = 'block';

        // Redirect to the homepage
        alert('Login successful! Welcome!');
        window.location.href = 'index.html';  // Redirect to homepage (or any other page)
    }, 1000);

    // Reset the form
    document.getElementById('loginFormHandler').reset();
});

// Handle signup form submission
document.getElementById('signupFormHandler').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Check if password and confirm password are at least 8 characters long
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // For demo purposes, just log the signup details
    console.log('Sign Up Info:', { name, email, password });

    // Simulating successful signup
    setTimeout(() => {
        alert('Sign up successful! Please log in.');
        toggleForms();  // Show the login form
    }, 1000);

    // Reset the form
    document.getElementById('signupFormHandler').reset();
});
