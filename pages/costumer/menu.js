async function fetchMenus() {
    try {
        const response = await fetch('http://127.0.0.1:8080/menus', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Allow cookies to be included if needed
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData); // Debug response to check structure

            // Extract the `menus` array
            const data = responseData.menus;

            if (Array.isArray(data)) {
                const container = document.querySelector('.container');

                // Clear any existing menu items
                container.innerHTML = `
                    <h1>Menu Item</h1>
                `;

                // Loop through the data and create menu items
                data.forEach(menu => {
                    const menuItem = document.createElement('div');
                    menuItem.className = 'menu-item';
                    menuItem.innerHTML = `
                        <img src="http://127.0.0.1:8080/uploads/${menuItem.image}" alt="${menu.title}" style="width: 50%; height: auto;">
                        <h2>${menuItem.name}</h2>
                        <p>${menuItem.description}</p>
                        <span class="design-type">${menuItem.category}</span>
                        <hr>
                    `;
                    container.appendChild(menuItem);
                });
            } else {
                console.error("Menu data is not an array:", data);
            }
        } else {
            console.error("Failed to fetch menu data:", response.status);
        }
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
}

// Function to handle editing menu (placeholder)
function editMenu(menuItemId) {
    console.log(`Edit menu with ID: ${menuItemId}`);
    // Implement edit functionality here (e.g., open a modal, go to an edit page, etc.)
}

// Function to handle deleting menu (placeholder)
function deleteMenu(menuItemId) {
    if (confirm(`Are you sure you want to delete menu with ID: ${menuItemId}?`)) {
        // Call API to delete menu (to be implemented)
        console.log(`Menu with ID ${menuItemId} deleted`);
    }
}

// Call the function to fetch and display menu data when the page loads
fetchMenus();