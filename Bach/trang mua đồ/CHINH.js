document.addEventListener('DOMContentLoaded', function() {
    const loginStatusElement = document.getElementById('loginStatus');

    if (localStorage.getItem("login")!=null) {
        // Nếu đã đăng nhập, hiển thị tên người dùng
        const username = localStorage.getItem("login");
        console.log(username) // Thay bằng tên người dùng thực tế
        loginStatusElement.textContent = `Xin chào, ${username}!`;
    } else {
        // Nếu chưa đăng nhập, hiển thị nút đăng nhập
        const loginLink = document.createElement('a');
        loginLink.href = '#';
        loginLink.textContent = 'Đăng nhập';
        loginStatusElement.appendChild(loginLink);
    }
});



const muasp  = document.getElementById("muasp");
const cart = JSON.parse(localStorage.getItem('cart')) || [];
muasp.addEventListener("click",(e)=>
{
    const products  = document.querySelectorAll(".product");
    e.preventDefault();
    products.forEach(product=>
        {
            
            const productName = product.dataset.name;
            cart.push(productName);
          localStorage.setItem('cart', JSON.stringify(cart));
          alert(`Đã thêm ${productName} vào giỏ hàng!`); 
        }
        )  
}
)