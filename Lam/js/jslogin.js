
const btnLogin = document.getElementById("login__signInButton");
var bt= "Link dẫn tới bài tập".link("/checkpoint/checkpoint.html")
// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  var accounts = [];
  accounts = JSON.parse(localStorage.getItem("accounts"));
  const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
if (username === ""|| password === "") {
  alert("vui lòng không để trống");
}
  for(const account of accounts){
    
    if(username==account.username&&password==account.password) 
    {
   window.location.href="/Lam/html/register.html"
    }
        
    else {
        console.log("đăng nhập thất bại");
      }
      
    }
  }
    // console.log(accounts[i][0]
  
  //let Giotraicay=[['xoai',2],['dua hau',3]]
// for(let i=0; i<Giotraicay.length;i++){
//     console.log("Gio trai cay "+ Giotraicay[i][0] + " co " +Giotraicay[i][1] +" trai")
// }
  
);

