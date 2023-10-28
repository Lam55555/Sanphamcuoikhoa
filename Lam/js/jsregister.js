let accounts = [];//tạo mảng accounts
const btnDangky = document.getElementById("buttonDangnhap")
btnDangky.addEventListener('click',(e)=>
 {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const ckPass = document.getElementById("checkPassword").value
  if (username && password) { //nếu username và pass rỗng
      const existingAccount = accounts.find(account => account.username === username);

      if (existingAccount) {
        document.getElementById("checkusername").innerHTML=('Username đã tồn tại. Vui lòng chọn username khác.');
        if(ckPass!=password)
        {
          document.getElementById("checkconfPass").innerHTML=("mật khẩu xác nhận không trùng khớp")
        }
      } 
      
      else {
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


let toggle = document.querySelector(".toggle");
let text = document.querySelector(".text");
function AnimatedToggle(){
    toggle.classList.toggle("active");

    if(toggle.classList.contains("active")){
        text.innerHTML ="ON";
        document .body .style .backgroundImage = "url('/Lam/img/background-đơn-giản-và-đẹp-cho-điện-thoại-sony.jpg')"
    }
    else{
        text.innerHTML="OFF";
        document .body .style .backgroundImage ="url('/Lam/img/img.jpg')"
    }
}