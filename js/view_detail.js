document.addEventListener('DOMContentLoaded', () => {
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    
    quantityButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Handle quantity selection (optional feature)
        console.log(`Selected Quantity: ${e.target.textContent}`);
      });
    });
  });
  