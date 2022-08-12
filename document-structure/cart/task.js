
const products = document.getElementsByClassName('product');
const cart = document.querySelector('.cart__products');

for(let product of products) {
  const buttonAddProduct = product.querySelector('.product__add');
  const productId = product.getAttribute('data-id');
  const productImage = product.querySelector('.product__image');
  const productQuantityControls = product.querySelector('.product__quantity-value'); 
  const amountReduce = product.querySelector('.product__quantity-control_dec');
  const amountAdd = product.querySelector('.product__quantity-control_inc');

  amountAdd.onclick = () => {
    productQuantityControls.textContent = String(Number(productQuantityControls.textContent) + 1); 
  }

  amountReduce.onclick = () => {
    if(Number(productQuantityControls.textContent)>1) {
      productQuantityControls.textContent = String(Number(productQuantityControls.textContent) - 1); 
    }
  }
  
  buttonAddProduct.onclick = () => {
    const cartProducts = cart.querySelectorAll('.cart__product');
    let  cartProduct= Array.from(cartProducts).find((elem) => (elem.getAttribute('data-id') === productId))
    
    if (cartProduct) {
      cartProduct.querySelector('.cart__product-count').textContent = String(Number(cartProduct.querySelector('.cart__product-count').textContent) + Number(productQuantityControls.textContent));
    } else {
        const divCartProduct = document.createElement('div');
        divCartProduct.classList.add('cart__product');
        divCartProduct.setAttribute('data-id', productId);
        cart.appendChild(divCartProduct);
        const cartProductImg = document.createElement('img');
        cartProductImg.classList.add('cart__product-image');
        cartProductImg.setAttribute('src', productImage.getAttribute('src'));
        divCartProduct.appendChild(cartProductImg);
        const cartProductCount = document.createElement('div');
        cartProductCount.classList.add('cart__product-count');
        cartProductCount.textContent = productQuantityControls.textContent;
        divCartProduct.appendChild(cartProductCount);
    }
  }
}



