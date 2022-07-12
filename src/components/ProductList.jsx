import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addToCart from '../services/addToCart';

class ProductList extends Component {
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
