products = {
    data:[
        {
            productName:"Cặp tặng cô giáo",
            image:"/Bach/trang mua đồ/img/BAG2.jpg",
            price:'200.000đ',
            link:"/Bach/trang mua đồ/CHINH.html"
        },
        {
            productName:"Đèn tường",
            image:'/Bach/trang mua đồ/img/hoa4.jpg',
            price:'25.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Hoa Cầm Tay Trong Suốt diy",
            image:"/Lam/img/hoatanggiaovien.jpg",
            price:'30.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Bach/trang mua đồ/img/Bag16.jpg',
            price:'20.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Cặp tặng cô giáo",
            image:"/Bach/trang mua đồ/img/Bag17.jpg",
            price:'300.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Lam/img/bohoa.jpg',
            price:'49.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Cặp tặng cô giáo",
            image:"/Bach/trang mua đồ/img/hoa2.jpg",
            price:'45.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Bach/trang mua đồ/img/hoa3.jpg',
            price:'100.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Cặp tặng cô giáo",
            image:"/Bach/trang mua đồ/img/BAG12.jpg",
            price:'300.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Nước hoa nam VERSACE EROS 100ml",
            image:"/Lam/img/nuochoanam.jpg",
            price:'20.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Nước Hoa Nữ Cooc SiLiYa 50 ML",
            image:"/Lam/img/nuochoanu.jpg",
            price:'22.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:"/Lam/img/pvb.jpg",
            price:'20.000đ',
            link:'/Bach/trang mua đồ/CHINH.html'
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
        
            let name=document.createElement("a")
            name.classList.add("product-name")
            name.innerText = i.productName.toUpperCase()
            name.setAttribute('href',i.link)
            container.appendChild(name)
        
            let price=document.createElement("p")
            price.classList.add("price")
            price.innerText =  i.price+ " đ"
            container.appendChild(price)
        
            card.appendChild(container)
    
            
            

            let tong = document.createElement('div')
            tong.appendChild(card) //card thuoc tong
            tong.appendChild(container) //container thuoc tong
            tong.classList.add('tong')
            document.getElementById("product").appendChild(tong)
            

            //thêm thẻ <a> vào div tong
            let lienket = document.createElement('a')
            lienket.setAttribute('href',i.link)
            lienket.classList.add('linksp')
            tong.appendChild(lienket)

            








            
        }


 

    
// function trang2(){
//     for(let i of products.data2) {
//         let card =document.createElement("div")
//         card.classList.add('card')
    
//         let imgContainer = document.createElement("div")
//         imgContainer.classList.add("imgContainer")
    
//         let image = document.createElement("img")
//         image.setAttribute("src",i.image)
//         // setAttribute lấy thuộc tính của img bên html
//         imgContainer.appendChild(image)
//         // lấy file image nhét cô imgContainer
//         card.appendChild(imgContainer)
//         image.classList.add('imgs')
    
//         let container =document.createElement("div")
//         container.classList.add("container")
    
//         let name=document.createElement("h5")
//         name.classList.add("product-name")
//         name.innerText = i.productName.toUpperCase()
//         container.appendChild(name)
    
//         let price=document.createElement("h6")
//         price.innerText = "$" + i.price
//         container.appendChild(price)
    
//         card.appendChild(container)


//         let tong = document.createElement('div')
//         tong.appendChild(card) //card thuoc tong
//         tong.appendChild(container) //container thuoc tong
//         tong.classList.add('tong')
//         document.getElementById("product").appendChild(tong)
    
//     }
//     trang1.classList.add('hide')
// }

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

// var ckavt=document.getElementById('ckavt');
// var checkavt = localStorage.getItem('avatar')
// var images = document.createElement('img');
// images.classList.add('img-avatar')
// images.setAttribute('src', checkavt)
// ckavt.appendChild(images);


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
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
