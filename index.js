const quantities = [
  { inputId: "quantity1", price: 10, totalId: "total1" },
  { inputId: "quantity2", price: 15, totalId: "total2" },
  { inputId: "quantity3", price: 20, totalId: "total3" },
  { inputId: "quantity4", price: 200, totalId: "total4" },
];

// Function to calculate and display total price
quantities.forEach((item) => {
  const quantityInput = document.getElementById(item.inputId);
  const totalLabel = document.getElementById(item.totalId);

  quantityInput.addEventListener("input", () => {
    const quantity = parseInt(quantityInput.value) || 0; // Default to 0 if input is empty
    const totalPrice = quantity * item.price;
    totalLabel.textContent = `Total Price: $${totalPrice}`;
  });
});

