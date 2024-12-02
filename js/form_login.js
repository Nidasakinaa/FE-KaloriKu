document.addEventListener("DOMContentLoaded", () => {
    // Login functionality
    const loginForm = document.getElementById("login-form");
    const loginBtn = document.getElementById("login-btn");

    loginBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            alert(`Welcome, ${username}!`);
        } else {
            alert("Please fill in both username and password!");
        }
    });

    // Calorie Calculator functionality
    const calorieForm = document.getElementById("calorie-form");
    const calculateBtn = document.getElementById("calculate-btn");
    const calorieResult = document.getElementById("calorie-result");

    calculateBtn.addEventListener("click", () => {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const age = parseInt(document.getElementById("age").value, 10);
        const gender = calorieForm.querySelector("input[name='gender']:checked")?.value;
        const activityLevel = parseFloat(document.getElementById("activity-level").value);

        if (!weight || !height || !age || !gender) {
            calorieResult.textContent = "Mohon lengkapi semua data!";
            return;
        }

        let bmr;
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        const dailyCalories = bmr * activityLevel;
        calorieResult.textContent = `Kebutuhan kalori harian Anda adalah ${dailyCalories.toFixed(2)} kkal.`;
    });
});
