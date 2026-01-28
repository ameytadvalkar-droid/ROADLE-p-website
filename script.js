// Simple cart functionality
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

// Function to add item to cart
function addToCart(productName, price, imageSrc) {
    const numericPrice = parseFloat(price.replace('₹', ''));
    const id = productIds[productName];
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === id && item.size === null && item.color === null);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name: productName, price: numericPrice, quantity: 1, image: imageSrc, size: null, color: null });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart!`);
    updateCartCount();
}

// Function to update cart count (for future use)
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    console.log(`Cart items: ${cart.reduce((total, item) => total + item.quantity, 0)}`);
}

// Add event listeners to category cards
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            window.location.href = `category.html?type=${type}`;
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If section doesn't exist on current page, navigate to index.html with the hash
                window.location.href = 'index.html' + targetId;
            }
        });
    });

    // Sidebar navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    // Toggle sidebar on hamburger click
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('show');
    });

    // Close sidebar on X click
    sidebarClose.addEventListener('click', function() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
    });

    // Close sidebar on overlay click
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
    });

    // Handle sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                // Scroll to section
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Navigate to page (cart.html)
                window.location.href = href;
            }
            // Close sidebar after navigation
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('show');
        });
    });

    // Create search dropdown
    const searchInput = document.getElementById('product-search');
    const searchDropdown = document.createElement('div');
    searchDropdown.className = 'search-dropdown';
    searchInput.parentElement.appendChild(searchDropdown);

    // Function to show suggestions
    function showSuggestions(filteredProducts) {
        searchDropdown.innerHTML = '';
        if (filteredProducts.length === 0) {
            searchDropdown.classList.remove('show');
            return;
        }
        filteredProducts.forEach(product => {
            const item = document.createElement('div');
            item.className = 'search-item';
            item.innerHTML = `
                <div class="search-item-name">${product.name}</div>
                <div class="search-item-category">${product.category}</div>
                <div class="search-item-price">₹${product.price}</div>
            `;
            item.addEventListener('click', () => {
                window.location.href = `product.html?id=${product.id}`;
            });
            searchDropdown.appendChild(item);
        });
        searchDropdown.classList.add('show');
    }

    // Function to hide dropdown
    function hideDropdown() {
        searchDropdown.classList.remove('show');
    }

    // Event listeners for search
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (query === '') {
            hideDropdown();
            return;
        }
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        showSuggestions(filtered);
    });

    searchInput.addEventListener('focus', function() {
        const query = this.value.toLowerCase().trim();
        if (query !== '') {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            showSuggestions(filtered);
        }
    });

    searchInput.addEventListener('blur', function() {
        // Delay to allow click on dropdown
        setTimeout(hideDropdown, 150);
    });

    // Hide dropdown on outside click
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            hideDropdown();
        }
    });


});
