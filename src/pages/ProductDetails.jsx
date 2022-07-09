import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDetailProduct } from '../services/api';
import addToCart from '../services/addToCart';
import shopping from '../assets/shopping-cart.svg';

class ProductDetails extends Component {
  constructor({ match: { params } }) {
    super();
    const { id } = params;

    console.log(id);

    this.state = {
      productID: id,
      product: {},
    };
  }

  componentDidMount() {
    this.showDetailProduct();
  }

  showDetailProduct = async () => {
    const { productID } = this.state;
    const response = await getDetailProduct(productID);
    this.setState({ product: response });
  }

  render() {
    const { product: { title, thumbnail, price, id } } = this.state;
    const { product } = this.state;
    console.log(product);
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img id="cart" alt="cart" src={ shopping } />
        </Link>
        <img className="product-image" src={ thumbnail } alt={ title } />
        <h3 data-testid="product-detail-name" className="product-title">{title}</h3>
        <p>
          R$
          {' '}
          {price}
        </p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(id) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.string,
  }),
}.isRequired;

export default ProductDetails;
