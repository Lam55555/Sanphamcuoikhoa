
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
   window.location.href="/Lam/html/tonghopsanpham.html"
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
        document .body .style .backgroundImage = "url('/Lam/img/background-đơn-giản-và-đẹp-cho-điện-thoại-sony.jpg')"
    }
    else{
        document .body .style .backgroundImage ="url('/Lam/img/bg2.jpg')"
    }
}

function change()
{
  const ic_lock = document.getElementById("icon-lock");
  const ic_hidden = document.getElementById("icon-hidden");
  
  const pass = document.getElementById("password");
  if(pass.type == 'password'){
    pass.setAttribute('type','text')
    ic_lock.classList.add("icon-hidden")
    ic_hidden.classList.remove('icon-hidden')

  }
  else
  {
    pass.setAttribute('type','password')

    ic_hidden.classList.add('icon-hidden')
    ic_lock.classList.remove('icon-hidden')
    
  }
  

}
  
