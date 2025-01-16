// Function to fetch menu data from the backend
async function fetcMenu() {
    try {
        const response = await fetch('http://127.0.0.1:8080/menus'); // Adjust endpoint if needed
        if (!response.ok) {
            throw new Error('Failed to fetch menus');
        }

        const data = await response.json(); // Get the JSON data

        // Get the table body element
        const tableBody = document.querySelector('#menu-table tbody');
        tableBody.innerHTML = ''; // Clear any existing rows

        // Loop through the menus and add rows to the table
        data.menus.forEach(menuItem => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${menuItem.id}</td>
                <td>${menuItem.name}</td>
                <td>${menuItem.description}</td>
                <td>${menuItem.category}</td>
                <td>${menuItem.image}</td>
                <td><img src="http://127.0.0.1:8080/uploads/${menuItem.image}" alt="Menu Image" width="100"></td>
                <td>
                    <button class="edit-btn" data-id="${menuItem.id}">Edit</button>
                    <button class="delete-btn" data-id="${menuItem.id}">Delete</button>
                </td>
            `;
            
            tableBody.appendChild(row); // Add the new row to the table
        });
    } catch (error) {
        console.error('Error fetching menus:', error);
    }
}

// Call fetchMenus function on page load
document.addEventListener('DOMContentLoaded', fetchMenus);

// Handle "Input" button click to redirect to menus input page
document.getElementById('input-button').addEventListener('click', function () {
    window.location.href = '/pages/admin/input-menu.html'; // Adjust the URL for the input form
});

// Function to handle editing menu (just a placeholder)
function editMenu(menuItemId) {
    console.log(`Edit menu with ID: ${menuItemId}`);
    // Implement edit functionality here (e.g., open a modal, go to an edit page, etc.)
}

// Function to handle deleting menu (just a placeholder)
function deleteMenu(menuItemId) {
    if (confirm(`Are you sure you want to delete menu with ID: ${menuItemId}?`)) {
        // Call API to delete menu (to be implemented)
        console.log(`Menu with ID ${menuItemId} deleted`);
    }
}

// Call the function to fetch and display menu data when the page loads
fetchMenus();