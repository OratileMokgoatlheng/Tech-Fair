// Get the login and signup boxes
const loginBox = document.querySelector(".signin");
const signupBox = document.querySelector(".signup");

// Show the login box by default
loginBox.style.display = 'block'

// Get the signup button
const signupButton = document.querySelector(".signin .signup1 input[value='Signup']");

// // // Add event listener to the signup button
signupButton.addEventListener("click", function() {
    // Hide the login box
    loginBox.style.display = "none";
    // Show the signup box
    signupBox.style.display = "block";
});

// // // Get the signup form
const signupForm = document.querySelector(".signup .signupButton input[value='Signup']");

// // // Add event listener to the signup form submission
signupForm.addEventListener("click", function() {
    //event.preventDefault(); // Prevent form submission

    // Perform form validation here

    // Hide the signup box
    signupBox.style.display = "none";
    // Show the login box
    loginBox.style.display = "block";
});

// // // Get the login form
const loginForm = document.querySelector(".signin .signinButton input[value='Login']");

// Add event listener to the login form submission
loginForm.addEventListener("click", function() {
    //event.preventDefault(); // Prevent form submission

    // Get the entered username and password
    const username = document.querySelector(".signin").querySelector("input[type='text']").value;
    const password = document.querySelector(".signin").querySelector("input[type='password']").value;

    // Perform login authentication here
    if (username === "example@gmail.com" && password === "password") {
        // Show the main form
        document.querySelector("main-form").style.display = "block";
    } else {
        // Display error message
        alert("Incorrect password or username. Try again.");
    }
});
