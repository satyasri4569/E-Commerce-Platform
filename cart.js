let cartItems = [
  { id: 1, title: "Smart Watch", price: 199.99, quantity: 1, image: "Images/smart watch.webp" },
  { id: 2, title: "Designer Bag", price: 149.99, quantity: 1, image: "Images/bag.jpg" },
  { id: 3, title: "Table Lamp", price: 79.99, quantity: 1, image: "Images/lamp.avif" },
]
function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalPrice = document.getElementById('cart-total');
  
  if (cartItems.length === 0) {
      cartContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
      totalPrice.textContent = '$0.00';
      return;
  }

  cartContainer.innerHTML = '';
  let totalAmount = 0;

  cartItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      totalAmount += itemTotal;

      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div class="item-details">
              <span class="item-title">${item.title}</span>
              <span class="item-price">$${item.price.toFixed(2)}</span>
          </div>
          <div class="quantity-controls">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
              <span>${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
  });

  totalPrice.textContent = `$${totalAmount.toFixed(2)}`;
}

function updateQuantity(itemId, change) {
  const item = cartItems.find(item => item.id === itemId);
  if (item) {
      item.quantity = Math.max(1, item.quantity + change); // Ensure quantity is at least 1
      updateCart();
  }
}

function removeItem(itemId) {
  cartItems = cartItems.filter(item => item.id !== itemId);
  updateCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // You can pass cart data to the checkout page if needed using localStorage or URL parameters
  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save cart data to localStorage
  window.location.href = "checkout.html"; // Redirect to checkout page
});

updateCart();
