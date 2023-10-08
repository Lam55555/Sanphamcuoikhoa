let accounts = [];
const btnDangky = document.getElementById("buttonDangnhap")
btnDangky.addEventListener('click',(e)=>
 {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
      const existingAccount = accounts.find(account => account.username === username);

      if (existingAccount) {
          alert('Username đã tồn tại. Vui lòng chọn username khác.');
      } else {
          const account = { username, password };
          accounts.push(account);
          localStorage.setItem('accounts', JSON.stringify(accounts));
          alert('Đăng ký thành công!');
          // window.location.href=""
      }
  } else {
      alert('Vui lòng nhập username và password.');
  }
 }
)
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('accounts')) {
      accounts = JSON.parse(localStorage.getItem('accounts'));
  }
});
function change()
{
  window.location.href="/page(html)/login.html"
}
