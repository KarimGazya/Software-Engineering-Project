// script.js





// script.js

// Function to handle login
function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password match
    if (username === "organization@gmail.com" && password === "org") {
        // If matched, redirect to the organization profile page
        window.location.href = "OrganizationHomePage.html";
    } 
    else if (username === "donor@gmail.com" && password === "donor") {
        // If matched, redirect to the organization profile page
        localStorage.setItem("selectedRole", "donor");
        window.location.href = "category.html";
    }
   else if (username === "admin@gmail.com" && password === "admin") {
        // If matched, redirect to the organization profile page
        window.location.href = "adminOption.html";
    }
    else {
        // If not matched, show an alert or handle it accordingly
        alert("Invalid username or password. Please try again.");
    }
}

// Add event listener to the login button
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    handleLogin(); // Call the function to handle login
});

// Redirect function
function redirectToPage() {
    if (isLoggedIn) {
        // If logged in, redirect to the dashboard
        window.location.href = "/dashboard.html";
    } else {
        // If not logged in, redirect to the login page
        window.location.href = "/login.html";
    }
}

// Call the redirect function when the page loads
redirectToPage();
