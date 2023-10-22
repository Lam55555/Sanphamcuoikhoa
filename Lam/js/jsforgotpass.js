document.addEventListener('DOMContentLoaded', function() {
  const products = document.querySelectorAll('.product');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  products.forEach(product => {
      const addToCartButton = product.querySelector('.add-to-cart');
      const productName = product.dataset.name;

      addToCartButton.addEventListener('click', function() {
          cart.push(productName);
          localStorage.setItem('cart', JSON.stringify(cart));
          alert(`Đã thêm ${productName} vào giỏ hàng!`);
      });
  });
});