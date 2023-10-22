document.addEventListener('DOMContentLoaded', function() {
    const loginStatusElement = document.getElementById('loginStatus');

    
    if (localStorage.getItem("login")!=null) {
        // Nếu đã đăng nhập, hiển thị tên người dùng
        const username = 'JohnDoe'; // Thay bằng tên người dùng thực tế
        loginStatusElement.textContent = `Xin chào, ${username}!`;
    } else {
        // Nếu chưa đăng nhập, hiển thị nút đăng nhập
        const loginLink = document.createElement('a');
        loginLink.href = '#';
        loginLink.textContent = 'Đăng nhập';
        loginStatusElement.appendChild(loginLink);
    }
});
/*button */
document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    products.forEach(product => {
        const addToCartButton = product.querySelector('.add-to-cart');
        const productName = product.dataset.name;
  
        addToCartButton.addEventListener('click', function() {
            cart.push(productName);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`Đã thêm ${productName} vào giỏ hàng!`);
        });
    });
  });
  /*mua nhiều mặt hàng */