let toggle = document.querySelector(".toggle");
let text = document.querySelector(".text");
function AnimatedToggle(){
    toggle.classList.toggle("active");

    if(toggle.classList.contains("active")){
        text.innerHTML ="ON";
        document .body .style .backgroundImage = "url('/Lam/img/img.jpg')"
    }
    else{
        text.innerHTML="OFF";
        document .body .style  = "white"
    }
}