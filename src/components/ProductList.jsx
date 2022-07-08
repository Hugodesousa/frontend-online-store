import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    const { price, thumbnail, title, id } = this.props;
    // console.log(id);
    return (
      <Link data-testid="product-detail-link" to={ `/details/${id}` }>
        <div className="product" data-testid="product">
          <img className="product-image" src={ thumbnail } alt={ title } />
          <p>
            R$
            {' '}
            {price}
          </p>
          <h3 className="product-title">{title}</h3>
        </div>
      </Link>
    );
  }
}

ProductList.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default ProductList;
