function display() {
    const username = document.getElementById("username").value.trim();
    const userNamePattern = /^[A-Z]/;

    if (username.length < 5 || username.length > 15) {
        alert("Username must be between 5 and 15 characters.");
    } else if (!userNamePattern.test(username)){
        alert("Username must start with a uppercase letter.");
    } else {
        alert("Username is valid.");
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Email is valid.");

    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(!passwordPattern.test(password)){
        alert("Password must be at least 8 characters long and include at least one letter and one digit.");
        return false;
    }
    alert("Password is valid");
}