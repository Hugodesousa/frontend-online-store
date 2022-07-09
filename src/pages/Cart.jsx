import React, { Component } from 'react';
import { getDetailProduct } from '../services/api';

class Cart extends Component {
  constructor() {
    super();

    this.state = { arrayOfIds: [] };
  }

  componentDidMount() {
    this.getProductsFromStorage();
  }

  getProductsFromStorage = async () => {
    const data = JSON.parse(localStorage.getItem('cartArray'));
    if (data) {
      const test = data.map((id) => getDetailProduct(id));
      const array = await Promise.all(test);
      this.setState({
        arrayOfIds: array,
      });
    }
    // const request = await getDetailProduct()
    // console.log('test');
  }

  render() {
    const { arrayOfIds } = this.state;

    // console.log('a>>', arrayOfIds);

    if (!arrayOfIds.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <>
        { arrayOfIds.map((product) => {
          const { title, id, thumbnail, price } = product;
          return (
            <div key={ id }>
              <img className="product-image" src={ thumbnail } alt={ title } />
              <p>
                R$
                {' '}
                {price}
              </p>
              <h3 data-testid="shopping-cart-product-name">{title}</h3>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Cart;
