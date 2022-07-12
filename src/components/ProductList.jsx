import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addToCart from '../services/addToCart';
// import { addToCart } from '../services/addToCart';

class ProductList extends Component {
  // addToCart = (id) => {
  //   // const product = await getDetailProduct(id);
  //   if (!localStorage.getItem('cartArray')) {
  //     localStorage.setItem('cartArray', '[]');
  //   }
  //   const cart = JSON.parse(localStorage.getItem('cartArray'));
  //   const newArray = [...cart, id];
  //   console.log(newArray);
  //   localStorage.setItem('cartArray', JSON.stringify(newArray));

  //   // const cart = JSON.parse(localStorage.getItem('cartArray'));
  //   // console.log(cart);

  //   // const itemInCart = cart?.find((cartItem) => cartItem.product.id === id);

  //   // if (itemInCart) {
  //   //   itemInCart.quantity += 1;
  //   //   const cartFiltered = cart.filter((cartItem) => cartItem.product.id !== id);
  //   //   cartFiltered.push(itemInCart);
  //   //   return localStorage.setItem('cartArray', JSON.stringify(cartFiltered));
  //   // }

  //   // const cartItem = {
  //   //   product,
  //   //   quantity: 1,
  //   // };

  //   // const prevCartItems = localStorage.cartArray
  //   //   ? JSON.parse(localStorage.cartArray)
  //   //   : [];

  //   // const newCartItems = [...prevCartItems, cartItem];

  //   // localStorage.setItem('cartArray', JSON.stringify(newCartItems));
  // }

  render() {
    const { productObj } = this.props;
    const { price, thumbnail, title, id } = productObj;
    return (
      <div className="product" data-testid="product">
        <Link data-testid="product-detail-link" to={ `/details/${id}` }>
          <img className="product-image" src={ thumbnail } alt={ title } />
          <p>
            R$
            {' '}
            {price}
          </p>
          <h3 className="product-title">{title}</h3>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(productObj) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductList.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default ProductList;
