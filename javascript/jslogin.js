const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const btnLogin = document.querySelector(".login__signInButton");
var bt= "Link dẫn tới bài tập".link("/checkpoint/checkpoint.html")
// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value === ""|| password.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem('accounts'));
    if (
      user.username === username.value  &&
      user.password === password.value
    ) {
      alert("Đăng ký thành công")
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});

