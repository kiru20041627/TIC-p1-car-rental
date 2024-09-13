//document.getElementById('sign-in-form').addEventListener('submit', function(event) {
   // event.preventDefault();
   // alert('Logging in...');
//window.location.href = "signin.html";
//});


//document.getElementById('sign-up').addEventListener('click', function() {
    //alert('Redirecting to Sign Up...');
    //window.location.href = "userregistation.html";
    
//});


// document.getElementById('sign-in-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find(user => user.username === username && user.password === password);

//     if (user) {
//         // Redirect to member dashboard
//         window.location.href = 'customerdashboard.html';
//     } else {
//         alert('Invalid username or password!');
//     }
// });

// document.getElementById('sign-up').addEventListener('click', function() {
//     window.location.href = 'userregistation.html';
// });


document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Store username in localStorage
        localStorage.setItem('loggedInUser', username);
        // Redirect to customer dashboard
        window.location.href = 'customerdashboard.html';
    } else {
        alert('Invalid username or password!');
    }
});

document.getElementById('sign-up').addEventListener('click', function() {
    window.location.href = 'userregistation.html';
});
