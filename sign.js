<script>
    function toggleForms() {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } 
        else {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    }

    // Add event listener to the "Sign Up" form
    document.getElementById('signupFormHandler').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission behavior

        // Collect input values
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        // Simple form validation example
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // For demonstration purposes, log the form data
        console.log('User Info:', { name, email, password });

        // Clear the form fields (optional)
        document.getElementById('signupFormHandler').reset();
    });
</script>
