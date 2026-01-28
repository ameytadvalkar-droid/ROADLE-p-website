// Product details page functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productIds = {
    "CRASH Guards": 1,
    "BIKE AUXILIARY LIGHTS": 2,
    "Chigee AIO-5 Play BMW Motorcycle Smart Display With Navigation": 3,
    "MOTORCYCLE Helmet": 4,
    "RIDING Jacket": 5,
    "PANTS": 6,
    "RIDING Gloves": 7
};

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    // Get product ID from URL using URLSearchParams
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        alert('Product ID not found in URL');
        return;
    }

    // Convert product ID to Number before matching
    const product = products.find(p => p.id === Number(productId));

    if (!product) {
        alert('Product not found');
        return;
    }

    // Display product image, name, price, description
    document.getElementById('product-image').src = product.images[0];
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `₹${product.price}`;
    document.getElementById('product-description').textContent = product.description;

    // Render size options dynamically
    const sizeSelector = document.getElementById('size-selector');
    const sizeSelect = document.getElementById('size-select');
    if (product.sizes && product.sizes.length > 0) {
        sizeSelector.style.display = 'block';
        product.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });
    }

    // Render color options dynamically
    const colorSelector = document.getElementById('color-selector');
    const colorSelect = document.getElementById('color-select');
    if (product.colors && product.colors.length > 0) {
        colorSelector.style.display = 'block';
        product.colors.forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            colorSelect.appendChild(option);
        });
    }

    // Add to cart functionality with validation
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
        let selectedSize = null;
        let selectedColor = null;

        // Allow selecting ONLY one size
        if (product.sizes && product.sizes.length > 0) {
            selectedSize = sizeSelect.value;
            if (!selectedSize) {
                alert('Please select a size');
                return;
            }
        }

        // Allow selecting ONLY one color
        if (product.colors && product.colors.length > 0) {
            selectedColor = colorSelect.value;
            if (!selectedColor) {
                alert('Please select a color');
                return;
            }
        }

        // Add product using EXACT cart object structure
        addToCart(product.name, `₹${product.price}`, product.images[0], selectedSize, selectedColor);
    });
});

// Function to update cart count
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    console.log(`Cart items: ${cart.reduce((total, item) => total + item.quantity, 0)}`);
}

// Modified addToCart to accept size and color
function addToCart(productName, price, imageSrc, size = null, color = null) {
    const numericPrice = parseFloat(price.replace('₹', ''));
    const id = productIds[productName];
    // Check if item already exists in cart (same product + size + color)
    const existingItem = cart.find(item => item.id === id && item.size === size && item.color === color);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name: productName, price: numericPrice, quantity: 1, image: imageSrc, size, color });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
    updateCartCount();
}
