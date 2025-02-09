const products = [
  {
      id: 1,
      name: "Smart Watch",
      price: 199.99,
      description: "Latest generation smartwatch with health tracking",
      image: "/api/placeholder/250/200"
  },
  {
      id: 2,
      name: "Designer Bag",
      price: 149.99,
      description: "Elegant leather bag for everyday use",
      image: "/api/placeholder/250/200"
  },
  {
      id: 3,
      name: "Table Lamp",
      price: 79.99,
      description: "Modern LED table lamp with adjustable brightness",
      image: "/api/placeholder/250/200"
  },
  {
      id: 4,
      name: "Wireless Earbuds",
      price: 129.99,
      description: "High-quality sound with active noise cancellation",
      image: "/api/placeholder/250/200"
  },
  {
      id: 5,
      name: "Coffee Maker",
      price: 89.99,
      description: "Programmable coffee maker with thermal carafe",
      image: "/api/placeholder/250/200"
  },
  {
      id: 6,
      name: "Fitness Tracker",
      price: 69.99,
      description: "Track your daily activities and health metrics",
      image: "/api/placeholder/250/200"
  }
];

const productList = document.querySelector(".product-list");

function renderProducts() {
  productList.innerHTML = ''; // Clear existing products
  
  products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      
      productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="price">$${product.price.toFixed(2)}</div>
          <button class="add-to-cart" onclick="addToCart(${product.id})">
              Add to Cart
          </button>
      `;
      
      productList.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const selectedProduct = products.find((product) => product.id === productId);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === productId);
  
  if (existingProduct) {
      existingProduct.quantity += 1;
  } else {
      cart.push({
          ...selectedProduct,
          quantity: 1
      });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Show notification
  showNotification(`${selectedProduct.name} added to cart!`);
  
  // Update cart counter if it exists
  updateCartCounter();
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerHTML = message;
  
  // Add notification styles
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.backgroundColor = "#28a745";
  notification.style.color = "white";
  notification.style.padding = "1rem 2rem";
  notification.style.borderRadius = "4px";
  notification.style.animation = "slideIn 0.5s ease-out";
  
  // Add animation keyframes
  const style = document.createElement("style");
  style.textContent = `
      @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
      }
  `;
  document.head.appendChild(style);
  
  // Add to document
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
      notification.style.animation = "slideOut 0.5s ease-in";
      notification.addEventListener("animationend", () => {
          notification.remove();
      });
  }, 3000);
}

function updateCartCounter() {
  const cartCounter = document.getElementById("cart-counter");
  if (cartCounter) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCounter.textContent = totalItems;
      cartCounter.style.display = totalItems > 0 ? "block" : "none";
  }
}

// Filter products by category
function filterProducts(category) {
  const buttons = document.querySelectorAll('.filter-button');
  buttons.forEach(button => {
      if (button.textContent === category) {
          button.classList.add('active');
      } else {
          button.classList.remove('active');
      }
  });

  const filteredProducts = category === 'All' 
      ? products 
      : products.filter(product => product.category === category);
      
  renderProducts(filteredProducts);
}

// Sort products by price
function sortProducts(order) {
  const sortedProducts = [...products].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
  });
  renderProducts(sortedProducts);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartCounter();
  
  // Add event listeners for filter buttons if they exist
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          filterProducts(button.textContent);
      });
  });
});