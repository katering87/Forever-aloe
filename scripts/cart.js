let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}
