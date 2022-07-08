import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDetailProduct } from '../services/api';

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
    const { product: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <img className="product-image" src={ thumbnail } alt={ title } />
        <h3 data-testid="product-detail-name" className="product-title">{title}</h3>
        <p>
          R$
          {' '}
          {price}
        </p>
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
