import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { price, thumbnail, title } = this.props;
    return (
      <div className="product" data-testid="product">
        <img className="product-image" src={ thumbnail } alt={ title } />
        <p>
          R$
          {' '}
          {price}
        </p>
        <h3 className="product-title">{title}</h3>
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
