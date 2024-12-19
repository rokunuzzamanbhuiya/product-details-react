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

  const productImages = {
    violet: "./assets/img/product/small-violet.png",
    cyan: "./assets/img/product/small-cyan.png",
    blue: "./assets/img/product/small-blue.png",
    black: "./assets/img/product/small-black.png",
  };

  // Get The Product Thumbnail
  const productThumbnail = document.getElementById("productThumbnail");

  document.querySelectorAll('input[name="bandColor"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const selectedColor = event.target.id.replace("color", "").toLowerCase();
      productThumbnail.src = colorImages[selectedColor];
    });
  });

  // Calculate Total Price Based on Watch Size and QTY
  const sizeOptions = document.querySelectorAll('input[name="bandSize"]');
  const quantityInput = document.getElementById("quantity");
  const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const totalPriceDisplay = document.getElementById("totalPrice");
  let selectedPrice = 69;

  // Update Total Price
  function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value, 10);
    const totalPrice = selectedPrice * quantity;
    totalPriceDisplay.textContent = `$${totalPrice}`;
  }

  // Handle Size Selection
  sizeOptions.forEach((option) => {
    option.addEventListener("change", () => {
      selectedPrice = parseInt(option.value, 10);
      updateTotalPrice();
    });
  });

  // Handle Quantity Decrement
  decrementButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
      updateTotalPrice();
    }
  });

  // Handle Quantity Increment
  incrementButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
    updateTotalPrice();
  });

  // Add to Cart
  function updateCartModal() {
    const cartBody = document.getElementById("cartBody");
    const cartFooter = document.getElementById("cartFooter");
    const emptyCartMessage = document.getElementById("emptyCartMessage");
    const totalQuantity = document.getElementById("cartTotalQuantity");
    const totalPrice = document.getElementById("cartTotalPrice");

    // Clear the cart body
    cartBody.innerHTML = "";

    if (cart.length === 0) {
      emptyCartMessage.style.display = "table-row";
      cartFooter.style.display = "none";
    } else {
      // Calculate totals
      let totalQnt = 0;
      let totalPriceValue = 0;

      // Add items to the cart table
      cart.forEach((item) => {
        totalQnt += item.quantity;
        totalPriceValue += item.quantity * item.price;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td><span style="width:38px; display:inline-block;margin-right:4px;"><img src="${
            item.product_img
          }" alt="${
          item.name
        }" /> </span> <p class="item-name" style="display:inline-block;">${
          item.name
        }</p></td>
          <td><p style="display:inline-block">${item.color}</p></td>
          <td><strong>${item.size}</strong></td>
          <td>${item.quantity}</td>
          <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartBody.appendChild(row);
      });

      totalQuantity.textContent = totalQnt;
      totalPrice.textContent = `$${totalPriceValue.toFixed(2)}`;
    }
  }

  let cart = [];
  const total_item_cart = document.getElementById("total_item");
  function addToCart() {
    const name = document.querySelector(".product-title").textContent;

    const selectedColorInput = document.querySelector(
      'input[name="bandColor"]:checked'
    );
    const color = selectedColorInput?.id.replace("color", "");
    const selectedSizeInput = document.querySelector(
      'input[name="bandSize"]:checked'
    );

    const size = selectedSizeInput?.labels[0].textContent.trim()[0];
    if (!selectedColorInput || !selectedSizeInput) {
      alert("Please select both a color and a size.");
      return;
    }

    const product_img = productImages[color.toLowerCase()];
    const price = parseFloat(selectedSizeInput?.value || "69");
    const quantity = parseInt(document.querySelector("#quantity").value);
    const existingItem = cart.find(
      (item) => item.name === name && item.color === color && item.size === size
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product_img, name, color, size, price, quantity });
    }
    total_item_cart.textContent = cart.length;
    console.log(cart);
    updateCartModal();
    alert("Item added to cart!");
  }

  document
    .querySelector(".add-to-cart-btn")
    .addEventListener("click", addToCart);

  // At The End
})();
