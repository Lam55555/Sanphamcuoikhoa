
const btnLogin = document.getElementById("login__signInButton");
var bt= "Link dẫn tới bài tập".link("/checkpoint/checkpoint.html")
// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  var accounts = [];
  accounts = JSON.parse(localStorage.getItem("accounts"));
  const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
  for(const account of accounts)
  {

    if (username === ""|| password === "") {
      document.getElementById("check").innerHTML="<br>"+("vui lòng không để trống");
    }
    else if(username==account.username&&password==account.password)
    {
   window.location.href="/Bach/trang mua đồ/CHINH.html"
   localStorage.setItem("login",username)
    }
        
    else {
      document.getElementById("check").innerHTML="Đăng nhập thất bại";
      }

    }
  }  
);
const btnRe = document.getElementById("REGISTER");
btnRe.addEventListener("click",(e)=>{
  e.preventDefault();
  window.location.href="/Lam/html/register.html"
})