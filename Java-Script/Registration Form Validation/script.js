document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('successMsg').innerText = '';

    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let phone = document.getElementById('phone').value.trim();

    let isValid = true;

    
    if (fullName === '') {
        document.getElementById('nameError').innerText = 'Full Name is required.';
        isValid = false;
    }

    
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').innerText = 'Enter a valid email.';
        isValid = false;
    }

    
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters.';
        isValid = false;
    }

    
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    
    if (!/^\d+$/.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must contain only digits.';
        isValid = false;
    }

    
    if (isValid) {
        document.getElementById('successMsg').innerText = 'Registration Successful!';
        
        
    }
});
