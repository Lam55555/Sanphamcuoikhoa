
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
  
