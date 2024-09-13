

const adminUserName = "admin";
const adminPassword = "admin1234";


document.getElementById('login-form').addEventListener('submit' , (event)=>{
    event.preventDefault();
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;

    if(username === adminUserName && password === adminPassword){
        window.location.href = "admin-dashboard.html";
    }else{
        alert("Wrong username or password");
    }
    event.target.reset();
    
})
