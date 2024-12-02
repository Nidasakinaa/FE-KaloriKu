document.addEventListener("DOMContentLoaded", () => {
    // Login functionality
    const loginForm = document.getElementById("login-form");
    const loginBtn = document.getElementById("login-btn");

    loginBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            alert(`Welcome, ${username}!`);
            // Redirect after login success
            window.location.href = "index.html";  // Ganti URL sesuai dengan halaman index Anda
        } else {
            alert("Please fill in both username and password!");
        }
    });
});
