(function () {
  ("use strict");

  /*
  Template Name: Product Details Page HTML Template
  Author: Rokunuzzaman Bhuiya
  Description: Product Details Page HTML Template
  File Description: Main JS file of the template
  */

  // Thumbnail Change Based On Color Selection
  const colorImages = {
    violet: "./assets/img/product/big-violet.png",
    cyan: "./assets/img/product/big-cyan.png",
    blue: "./assets/img/product/big-blue.png",
    black: "./assets/img/product/big-black.png",
  };

  // Get The Product Thumbnail
  const productThumbnail = document.getElementById("productThumbnail");

  document.querySelectorAll('input[name="bandColor"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const selectedColor = event.target.id.replace("color", "").toLowerCase();
      productThumbnail.src = colorImages[selectedColor];
    });
  });

  // Calculate Total Price Based on Wrist Size nad QTY
  const sizeOptions = document.querySelectorAll('input[name="bandSize"]');
  const quantityInput = document.getElementById("quantity");
  const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const totalPriceDisplay = document.getElementById("totalPrice");
  let selectedPrice = 69;

  // Update total price
  function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value, 10);
    const totalPrice = selectedPrice * quantity;
    totalPriceDisplay.textContent = `$${totalPrice}`;
  }

  // Handle size selection
  sizeOptions.forEach((option) => {
    option.addEventListener("change", () => {
      selectedPrice = parseInt(option.value, 10);
      updateTotalPrice();
    });
  });

  // Handle quantity decrement
  decrementButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
      updateTotalPrice();
    }
  });

  // Handle quantity increment
  incrementButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
    updateTotalPrice();
  });

  // At The End
})();
