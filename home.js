// Add any necessary JavaScript here
document.querySelectorAll('.date-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Date picker not implemented');
    });
});
document.querySelector('.sign-button').addEventListener('click', () => {
   // alert('Sign In/Sign Up not implemented');
});
//pop up js starts

document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('closePopupBtn');

    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

//pop up button js ends

//sign/login Js start
document.getElementById('sign-up').addEventListener('click', function() {
    // alert('Redirecting to Sign Up...');
    window.location.href = "userregistation.html";
 });
 
 document.getElementById('log-in').addEventListener('click', function() {
    // alert('Redirecting to Log In...');
    window.location.href = "Signin.html";
 });

 


 //sign/login Js end

 //Date select function
 function handleSubmit() {
    const dateFrom = document.getElementById('date-from').value;
    const dateTo = document.getElementById('date-to').value;

    if (!dateFrom || !dateTo) {
        alert('Please select both dates.');
        return;
    }
    if (new Date(dateFrom) > new Date(dateTo)) {
        alert('The "Sent From" date cannot be after the "Sent To" date.');
        return;
    }
    // Here you can handle the date range, e.g., send it to a server or display it
    alert(`Date Range Selected: ${dateFrom} to ${dateTo}`);
}
// Date select function ends

/// Signin Popup starts
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
   // alert('Logging in...');
window.location.href = "signin.html";
});


document.querySelector('.sign-button').addEventListener('click', () => {
     alert('Sign In/Sign Up not implemented');
 });





document.getElementById('sign-up').addEventListener('click', function() {
    //alert('Redirecting to Sign Up...');
    window.location.href = "userregistation.html"; 
});

// Signin popup Ends here
