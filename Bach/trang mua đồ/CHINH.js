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