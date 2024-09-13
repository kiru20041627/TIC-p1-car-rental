//document.getElementById('otpButton').addEventListener('click', function() {
  //  alert('OTP sent!');
//});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(this);
  const userData = {};

  formData.forEach((value, key) => {
      userData[key] = value;
  });

  // Check for existing users in local storage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Add new user data to the users array
  users.push(userData);

  // Save updated users array to local storage
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful!');

  // Optionally, redirect to another page or clear the form
  window.location.href = 'signin.html';
  this.reset(); // Clear form fields
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

