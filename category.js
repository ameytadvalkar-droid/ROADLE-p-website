// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to filter products based on category
function filterProducts(type) {
    return products.filter(product => {
        const nameLower = product.name.toLowerCase();
        if (type === 'accessories') {
            return product.category === 'accessories';
        } else if (type === 'helmets') {
            return product.category === 'protective' && nameLower.includes('helmet');
        } else if (type === 'jackets') {
            return product.category === 'protective' && nameLower.includes('jacket');
        } else if (type === 'pants') {
            return product.category === 'protective' && nameLower.includes('pant');
        } else if (type === 'gloves') {
            return product.category === 'protective' && nameLower.includes('glove');
        }
        return false;
    });
}

// Function to display products
function displayProducts(filteredProducts, categoryName) {
    const productGrid = document.getElementById('product-grid');
    const categoryTitle = document.getElementById('category-title');
    categoryTitle.textContent = categoryName;

    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <a href="product.html?id=${product.id}">
                <img src="${product.images[0]}" alt="${product.description}">
                <h3>${product.name}</h3>
            </a>
            <p>₹${product.price}</p>
        `;
        productGrid.appendChild(productDiv);
    });
}

// Main function
document.addEventListener('DOMContentLoaded', function() {
    const type = getUrlParameter('type');
    let categoryName = '';

    if (type === 'accessories') {
        categoryName = 'Accessories';
    } else if (type === 'helmets') {
        categoryName = 'Helmets';
    } else if (type === 'jackets') {
        categoryName = 'Jackets';
    } else if (type === 'pants') {
        categoryName = 'Pants';
    } else if (type === 'gloves') {
        categoryName = 'Gloves';
    } else {
        categoryName = 'Category';
    }

    const filteredProducts = filterProducts(type);
    displayProducts(filteredProducts, categoryName);
});
