products = {
    data:[
        {
            productName:"Cặp tặng cô giáo",
            image:"/Lam/img/pngtree-white-gray-wave-abstract-background-soft-design-graphic-banner-background-picture-image_1298688.jpg",
            price:'45$'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Lam/img/img.jpg',
            price:'1$'
        },
        {
            productName:"Cặp tặng cô giáo",
            image:"/Lam/img/pngtree-white-gray-wave-abstract-background-soft-design-graphic-banner-background-picture-image_1298688.jpg",
            price:'45$'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Lam/img/img.jpg',
            price:'1$'
        },
        {
            productName:"Cặp tặng cô giáo",
            image:"/Lam/img/pngtree-white-gray-wave-abstract-background-soft-design-graphic-banner-background-picture-image_1298688.jpg",
            price:'45$'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Lam/img/img.jpg',
            price:'1$'
        },
        {
            productName:"Cặp tặng cô giáo",
            image:"/Lam/img/pngtree-white-gray-wave-abstract-background-soft-design-graphic-banner-background-picture-image_1298688.jpg",
            price:'45'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Lam/img/img.jpg',
            price:'1'
        },
        {
            productName:"Cặp tặng cô giáo",
            image:"/Lam/img/pngtree-white-gray-wave-abstract-background-soft-design-graphic-banner-background-picture-image_1298688.jpg",
            price:'45$'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Lam/img/img.jpg',
            price:'1$'
        },
        {
            productName:"Cặp tặng cô giáo",
            image:"/Lam/img/pngtree-white-gray-wave-abstract-background-soft-design-graphic-banner-background-picture-image_1298688.jpg",
            price:'45$'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Lam/img/img.jpg',
            price:'1$'
        },
        
    ]
}

    for(let i of products.data) {
        let card =document.createElement("div")
        card.classList.add('card')
    
        let imgContainer = document.createElement("div")
        imgContainer.classList.add("imgContainer")
    
        let image = document.createElement("img")
        image.setAttribute("src",i.image)
        // setAttribute lấy thuộc tính của img bên html
        imgContainer.appendChild(image)
        // lấy file image nhét cô imgContainer
        card.appendChild(imgContainer)
        image.classList.add('imgs')
    
        let container =document.createElement("div")
        container.classList.add("container")
    
        let name=document.createElement("h5")
        name.classList.add("product-name")
        name.innerText = i.productName.toUpperCase()
        container.appendChild(name)
    
        let price=document.createElement("h6")
        price.innerText = "$" + i.price
        container.appendChild(price)
    
        card.appendChild(container)


        let tong = document.createElement('div')
        tong.appendChild(card) //card thuoc tong
        tong.appendChild(container) //container thuoc tong
        tong.classList.add('tong')
        document.getElementById("product").appendChild(tong)
    
    }


    document.getElementById("search").addEventListener("click",() =>{
        let searchInput = document.getElementById("search-input").value.toUpperCase()
        let tong= document.querySelectorAll(".tong")
        let productName = document.querySelectorAll(".product-name")
        let prices = document.querySelectorAll("h6")
    
       productName.forEach((items, index)=> {
        if (items.innerText.includes(searchInput)){
            tong[index].classList.remove("hide")
            } else{
                tong[index].classList.add("hide")
            }
       })
    })


    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
      
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}