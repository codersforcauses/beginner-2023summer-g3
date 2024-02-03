
var products = [
    { name: 'Product 1', description: 'Description of Product 1.', price: '$54.00', category: 'Dress' },
    { name: 'Product 2', description: 'Description of Product 2.', price: '$1.00', category: 'Shoes' },

];

function showHome() {
    alert('Displaying Home Page');
}

function showShop() {
    alert('Displaying Shop Page');
}

function showCart() {
    alert('Displaying Cart Page');
}

function showContact() {
    alert('Contact Information:\nEmail: shoppyyy@shop.com\nPhone: 04 3945 58502 294');
}

function viewProduct(name, description) {
    alert(`Viewing ${name}\n${description}`);
}

function hoverImage(img) {
    img.style.transform = 'scale(1.1)';
}

function unhoverImage(img) {
    img.style.transform = 'scale(1.0)';
}

function showShopDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
}

function hideShopDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
}






document.addEventListener('DOMContentLoaded', function() {
    // Get the dress link element by its ID
    var dressLink = document.getElementById('dressLink');

    // Add a click event listener to the dress link
    dressLink.addEventListener('click', function(event) {
        // Prevent the default behavior of the link (preventing page reload)
        event.preventDefault();

        // Navigate to "a.html"
        window.location.href = 'dress.html';
    });
});
