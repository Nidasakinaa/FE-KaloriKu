// Function to get the value of a specific cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Retrieve the 'Auth' token, 'ID', and 'Role' cookies
const userId = getCookie('ID');       // User ID for identifying menu
const userRole = getCookie('Role');   // Role of the user (e.g., 2 for menu)

console.log('User ID:', userId);
console.log('User Role:', userRole);


async function fetchCostumerData() {
    const userId = getCookie('ID'); // Get the user ID from the cookie
    const authToken = getCookie('Auth'); // Get the Auth token if necessary

    try {
        const response = await fetch(`http://127.0.0.1:8080/profile/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch costumer data');
        }

        const costumerData = await response.json();

        // Populate form fields with costumer data
        document.querySelector('input[name="username"]').value = costumerData.username;
        document.querySelector('input[name="email"]').value = costumerData.email;
        document.querySelector('input[name="phone"]').value = costumerData.phone;
        document.querySelector('select[name="role"]').value = costumerData.role;

    } catch (error) {
        console.error('Error fetching costumer data:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchCostumerData);
