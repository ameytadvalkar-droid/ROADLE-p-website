// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display order summary
function displayOrderSummary() {
    const orderItemsDiv = document.getElementById('order-items');
    const orderSubtotal = document.getElementById('order-subtotal');
    const orderTax = document.getElementById('order-tax');
    const orderTotal = document.getElementById('order-total');
    const shipping = document.getElementById('shipping');

    if (cart.length === 0) {
        orderItemsDiv.innerHTML = '<p>No items in cart.</p>';
        return;
    }

    let subtotal = 0;
    orderItemsDiv.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        itemDiv.innerHTML = `
            <img src="${item.image || 'placeholder.jpg'}" alt="${item.name}" class="order-item-image">
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: ₹${itemTotal}</p>
            </div>
        `;
        orderItemsDiv.appendChild(itemDiv);
        subtotal += itemTotal;
    });

    const tax = subtotal * 0.18;
    const shippingCost = subtotal > 500 ? 0 : 50;
    const total = subtotal + tax + shippingCost;

    orderSubtotal.textContent = `₹${subtotal}`;
    orderTax.textContent = `₹${tax.toFixed(2)}`;
    shipping.textContent = `₹${shippingCost}`;
    orderTotal.textContent = `₹${total.toFixed(2)}`;
}

// Function to handle payment method changes
function handlePaymentChange() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    document.getElementById('card-details').classList.toggle('hidden', paymentMethod !== 'card');
    document.getElementById('upi-details').classList.toggle('hidden', paymentMethod !== 'upi');
}

// Function to validate form
function validateForm() {
    const requiredFields = ['name', 'email', 'phone', 'address', 'billing-name', 'billing-address', 'city', 'state', 'zip'];
    for (const field of requiredFields) {
        if (!document.getElementById(field).value.trim()) {
            alert(`Please fill in the ${field.replace('-', ' ')} field.`);
            return false;
        }
    }
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    if (paymentMethod === 'card') {
        const cardFields = ['card-number', 'expiry', 'cvv'];
        for (const field of cardFields) {
            if (!document.getElementById(field).value.trim()) {
                alert(`Please fill in the ${field.replace('-', ' ')} field.`);
                return false;
            }
        }
    } else if (paymentMethod === 'upi') {
        if (!document.getElementById('upi-id').value.trim()) {
            alert('Please enter your UPI ID.');
            return false;
        }
    }
    return true;
}

// Function to place order
function placeOrder() {
    if (!validateForm()) return;

    // Simulate order placement
    document.getElementById('order-confirmation-modal').classList.remove('hidden');
    // In a real app, you'd send this data to a server
    console.log('Order placed:', {
        customer: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        },
        billing: {
            name: document.getElementById('billing-name').value,
            address: document.getElementById('billing-address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value
        },
        payment: document.querySelector('input[name="payment"]:checked').value,
        items: cart
    });
}

// Function to close modal
function closeModal() {
    document.getElementById('order-confirmation-modal').classList.add('hidden');
    // Redirect to home or order confirmation page
    window.location.href = 'index.html';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    displayOrderSummary();

    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', handlePaymentChange);
    });

    document.getElementById('place-order-btn').addEventListener('click', placeOrder);
    document.getElementById('close-modal').addEventListener('click', closeModal);
});
