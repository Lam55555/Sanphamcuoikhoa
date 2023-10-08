const email = document.querySelector(".nhapEmail");
const tuoi = document.querySelector(".nhaptuoi");
const btnLogin = document.querySelector(".login__signInButton");
var bt= "Link dẫn tới bài tập".link("/checkpoint/checkpoint.html")
// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === ""|| tuoi.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(email.value));
    console.log(user);
    if (
      user.email === email.value  &&
      user.age === tuoi.value
    ) {
      console.log(user.email + " user.email");
      console.log(email.value + " email.value");
      console.log(user.age + " user.age");
      console.log(tuoi.value + " tuoi.value");
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});

