// document.addEventListener('DOMContentLoaded', function() {
//   const products = document.querySelectorAll('.product');
//   const cart = JSON.parse(localStorage.getItem('cart')) || [];

//   products.forEach(product => {
//       const addToCartButton = product.querySelector('.add-to-cart');
//       const productName = product.dataset.name;

//       addToCartButton.addEventListener('click', function() {
//           cart.push(productName);
//           localStorage.setItem('cart', JSON.stringify(cart));
//           alert(`Đã thêm ${productName} vào giỏ hàng!`);
//       });
//   });
// });




const btn = document.getElementById("btn");

  
  

  

btn.addEventListener("click",(e)=>{

  e.preventDefault();
  const sluong = Number(document.getElementById("soluong").value);
  
  localStorage.setItem("spmua",sluong);
  const tong = Number(localStorage.getItem("spmua"));
  tong+=sluong;
  localStorage.setItem("spham",a)
  document.getElementById("ck").innerHTML=a;
})