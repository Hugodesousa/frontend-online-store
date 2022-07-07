import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { price, thumbnail, title } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
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
