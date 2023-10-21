let accounts = [];//tạo mảng accounts
const btnDangky = document.getElementById("buttonDangnhap")
btnDangky.addEventListener('click',(e)=>
 {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) { //nếu username và pass rỗng
      const existingAccount = accounts.find(account => account.username === username);

      if (existingAccount) {
        document.getElementById("check").innerHTML=('Username đã tồn tại. Vui lòng chọn username khác.');
      } else {
          const account = { username, password };
          accounts.push(account);
          localStorage.setItem('accounts', JSON.stringify(accounts));
          alert('Đăng ký thành công!');
          window.location.href="/Lam/html/login.html"
      }
  } else {
      document.getElementById("check").innerHTML="Vui lòng nhập đầy đủ thông tin"
  }
 }
)
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('accounts')) {
      accounts = JSON.parse(localStorage.getItem('accounts'));
  }
});
