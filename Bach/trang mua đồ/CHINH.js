const loginStatusElement = document.getElementById('loginStatus');
document.addEventListener('DOMContentLoaded', function() {

    if (localStorage.getItem("login")!=null) {
        // Nếu đã đăng nhập, hiển thị tên người dùng
        const username = localStorage.getItem("login");
        console.log(username) // Thay bằng tên người dùng thực tế
        loginStatusElement.textContent = `Xin chào, ${username}!`;
    } else {
        // Nếu chưa đăng nhập, hiển thị nút đăng nhập
        const loginLink = document.createElement('a');
        loginLink.href = '/Lam/html/login.html';
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
function logout() {
    const out = localStorage.getItem("login");
    localStorage.removeItem(out);
    loginStatusElement.textContent = '';
    alert('Đăng xuất thành công!');
}



document.getElementById('toggleButton').addEventListener('click', function() {
    var dropdownContent = document.getElementById('dropdownContent');
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
});
document.getElementById('toggleButton1').addEventListener('click', function() {
    var dropdownContent1 = document.getElementById('dropdownContent1');
    if (dropdownContent1.style.display === 'none' || dropdownContent1.style.display === '') {
        dropdownContent1.style.display = 'block';
    } else {
        dropdownContent1.style.display = 'none';
    }
});