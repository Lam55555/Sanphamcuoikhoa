
// const upd = document.getElementById("upd");
// upd.addEventListener("click",(e)=>
// {
//     e.preventDefault();
//     var accounts = JSON.parse(localStorage.getItem("accounts"))
//     const reUsername = document.getElementById("reUsername").value;
// const rePass = document.getElementById("rePass").value;
// for(const account of accounts )
// {
//     if(reUsername==account.username)
//     {
//         account.password= account.password.replace(account.password,rePass)
//         console.log("da upd")
//     }
//     else
//     {
//         console.log("sai")
//     }
// }
// })
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
let passwordsMatch = false;

// Check to see if passwords match
if (password1El.value === password2El.value) {
  passwordsMatch = true;
  password1El.style.borderColor = 'green';
  password2El.style.borderColor = 'green';
} else {
  passwordsMatch = false;
  password1El.style.borderColor = 'red';
  password2El.style.borderColor = 'red';
  return;
}