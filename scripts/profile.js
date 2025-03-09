document.addEventListener("DOMContentLoaded", function() {
    let user = JSON.parse(localStorage.getItem("user")) || { email: "", orders: [] };

    document.getElementById("email").value = user.email;
    document.getElementById("orders").innerText = user.orders.length + " заказов";

    document.getElementById("save-profile").addEventListener("click", function() {
        user.email = document.getElementById("email").value;
        localStorage.setItem("user", JSON.stringify(user));
        alert("Данные сохранены!");
    });
});
