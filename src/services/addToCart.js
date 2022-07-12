export default function addToCart(productObj) {
  if (!localStorage.getItem('cartArray')) {
    localStorage.setItem('cartArray', '[]');
  }
  const cart = JSON.parse(localStorage.getItem('cartArray'));
  const newArray = [...cart, productObj];
  return localStorage.setItem('cartArray', JSON.stringify(newArray));

  // const cart = JSON.parse(localStorage.getItem('cartArray'));
  // console.log(cart);

  // const itemInCart = cart?.find((cartItem) => cartItem.product.id === id);

  // if (itemInCart) {
  //   itemInCart.quantity += 1;
  //   const cartFiltered = cart.filter((cartItem) => cartItem.product.id !== id);
  //   cartFiltered.push(itemInCart);
  //   return localStorage.setItem('cartArray', JSON.stringify(cartFiltered));
  // }

  // const cartItem = {
  //   product,
  //   quantity: 1,
  // };

  // const prevCartItems = localStorage.cartArray
  //   ? JSON.parse(localStorage.cartArray)
  //   : [];

  // const newCartItems = [...prevCartItems, cartItem];

  // localStorage.setItem('cartArray', JSON.stringify(newCartItems));
}
