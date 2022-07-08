import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();

    this.state = { arrayOfProducts: localStorage.getItem('cartArray')
      ? JSON.parse(localStorage.getItem('cartArray')) : [] };
  }

  componentDidMount() {
    // this.getProducts();
  }

  getProducts = () => {
    // for (let index = 0; index < localStorage.length; index += 1) {
    //   const response = JSON.parse(localStorage.getItem(localStorage.key(index)));
    //   this.setState((prev) => ({
    //     arrayOfProducts: [...prev.arrayOfProducts, response],
    //   }));
    // }

    // const response = JSON.parse(localStorage.getItem('cartArray'));

    // console.log(response);

    // this.setState({
    //   arrayOfProducts: response,
    // });
    // const { arrayOfProducts } = this.state;
    // console.log(arrayOfProducts);
  }

  render() {
    const { arrayOfProducts } = this.state;

    console.log('a>>', arrayOfProducts);

    if (!arrayOfProducts) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <>
        { arrayOfProducts.map(({ product, quantity }) => {
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
              <p data-testid="shopping-cart-product-quantity">{quantity}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Cart;
