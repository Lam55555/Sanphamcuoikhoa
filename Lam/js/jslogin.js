const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const btnLogin = document.querySelector(".login__signInButton");
var bt= "Link dẫn tới bài tập".link("/checkpoint/checkpoint.html")
// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  var user = JSON.parse(localStorage.getItem("accounts"));
  // if (username.value === ""|| password.value === "") {
  //   alert("vui lòng không để trống");
  // } else {
  //   // const user = JSON.parse(localStorage.getItem('accounts'));
  //   if (username==accounts.username) {
  //     alert("Đăng ký thành công")
  //   } else {
  //     alert(accounts.username);
  //   }
  // }
  
});

