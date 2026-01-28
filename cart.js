// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const emptyCartDiv = document.getElementById('empty-cart-message');
    const subtotalDiv = document.getElementById('subtotal');
    const totalDiv = document.getElementById('total');

    cartItemsDiv.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        emptyCartDiv.style.display = 'block';
        cartItemsDiv.style.display = 'none';
        subtotalDiv.textContent = '₹0';
        totalDiv.innerHTML = '<strong>₹0</strong>';
        return;
    } else {
        emptyCartDiv.style.display = 'none';
        cartItemsDiv.style.display = 'block';
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="item-image">
                <img src="${item.image || 'placeholder.jpg'}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h4>${item.name}</h4>
                ${item.size ? `<p class="item-size">Size: ${item.size}</p>` : ''}
                ${item.color ? `<p class="item-color">Color: ${item.color}</p>` : ''}
                <p class="item-price">₹${item.price} each</p>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${index}, -1)" class="quantity-btn">-</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)" class="quantity-input">
                    <button onclick="changeQuantity(${index}, 1)" class="quantity-btn">+</button>
                </div>
                <p class="item-subtotal">Subtotal: ₹${itemTotal}</p>
            </div>
            <button onclick="removeFromCart(${index})" class="remove-btn">×</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += itemTotal;
    });

    subtotalDiv.textContent = `₹${total}`;
    totalDiv.innerHTML = `<strong>₹${total}</strong>`;
}

// Function to change quantity
function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to update quantity directly
function updateQuantity(index, newQuantity) {
    const qty = parseInt(newQuantity);
    if (qty > 0) {
        cart[index].quantity = qty;
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to clear cart
function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Display cart on load
displayCart();
