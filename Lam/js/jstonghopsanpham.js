products = {
    data:[
        {
            productName:"Túi sách giả",
            image:"/Bach/trang mua đồ/img/BAG1.jpg",
            price:'950.000',
            link:"/Bach/trang mua đồ/CHINH.html"
        },
        {
            productName:"Hoa bó to",
            image:'/Bach/trang mua đồ/img/hoa4.jpg',
            price:'1$',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Hoa Cầm Tay Trong Suốt diy",
            image:"/Lam/img/hoatanggiaovien.jpg",
            price:'45$',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Túi xách nữ thời trang",
            image:'/Bach/trang mua đồ/img/Bag16.jpg',
            price:'1$',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Gối massage giảm mệt mỏi",
            image:"/Lam/img/goimassage.jpg",
            price:'45$',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:'/Lam/img/bohoa.jpg',
            price:'49000',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Bộ 5 thước dụng cụ giảng dạy dành cho giáo viên dễ dàng mang theo",
            image:"/Lam/img/bodungcu.jpg",
            price:'45',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Bình nước giữ nhiệt thuỷ tinh",
            image:'/Lam/img/binhnuoc.jpg',
            price:'22.500',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Túi xách đen cho nữ",
            image:"/Bach/trang mua đồ/img/BAG12.jpg",
            price:'45$',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Nước hoa nam VERSACE EROS 100ml",
            image:"/Lam/img/nuochoanam.jpg",
            price:'1$',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Nước Hoa Nữ Cooc SiLiYa 50 ML",
            image:"/Lam/img/nuochoanu.jpg",
            price:'22000',
            link:'/Bach/trang mua đồ/CHINH.html'
        },
        {
            productName:"Phấn Viết Bảng Mic Trắng/ Màu (Hộp 10-100V)",
            image:"/Lam/img/pvb.jpg",
            price:'1$',
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


let slideIndex = 0; //tạo biến slideIndex
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //mySlide [0,1,2] 3 phần tử
  let dots = document.getElementsByClassName("dot"); //dots [0,1,2] 3 phần tử

  for (i = 0; i < slides.length; i++) { //slide.length là độ dài của phần tử ! i là ảnh đầu tiên và ->  <2 
    slides[i].style.display = "none";
  }
  slideIndex++; //slideIndex bắt đầu chạy giá trị
  if (slideIndex > slides.length) {slideIndex = 1} //nếu như slideIndex lớn hơn độ dài của slides thì sẽ quay trở lại vị trí 1
      
  for (i = 0; i < dots.length; i++) { //dot.length = 2;
    dots[i].className = dots[i].className.replace(" active", ""); //lấy class của biến dots && thêm một class active khi [i]  chạy đến vị trí của phần tử đó
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


const loginStatusElement = document.getElementById('loginStatus');
document.addEventListener('DOMContentLoaded', function() {

    if (localStorage.getItem("login")!=null) {
        // Nếu đã đăng nhập, hiển thị tên người dùng
        const username = localStorage.getItem("login");
        // console.log(username) // Thay bằng tên người dùng thực tế
        loginStatusElement.textContent = `Xin chào, ${username}!`;
    } else {
        // Nếu chưa đăng nhập, hiển thị nút đăng nhập
        const loginLink = document.createElement('a');
        loginLink.href = '/Lam/html/login.html';
        loginLink.textContent = 'Đăng nhập';
        loginStatusElement.appendChild(loginLink);
    }
});