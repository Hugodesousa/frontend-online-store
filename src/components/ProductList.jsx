import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDetailProduct } from '../services/api';

class ProductList extends Component {
  addToCart = async (id) => {
    const product = await getDetailProduct(id);
    const cart = JSON.parse(localStorage.getItem('cartArray'));

    const itemInCart = cart?.find((cartItem) => cartItem.product.id === id);

    if (itemInCart) {
      itemInCart.quantity += 1;
      const cartFiltered = cart.filter((cartItem) => cartItem.product.id !== id);
      cartFiltered.push(itemInCart);
      return localStorage.setItem('cartArray', JSON.stringify(cartFiltered));
    }

    const cartItem = {
      product,
      quantity: 1,
    };

    const prevCartItems = localStorage.cartArray
      ? JSON.parse(localStorage.cartArray)
      : [];

    const newCartItems = [...prevCartItems, cartItem];

    localStorage.setItem('cartArray', JSON.stringify(newCartItems));
  }

  render() {
    const { price, thumbnail, title, id } = this.props;
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
          onClick={ () => this.addToCart(id) }
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
