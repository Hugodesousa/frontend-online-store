import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDetailProduct } from '../services/api';
import trybeLogo from '../assets/trybeLogo.png';
import cart from '../assets/Cart.png';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      arrayOfIds: [],
      quantity: 1,
    };
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

  decreaseQuantity = () => {
    const { quantity } = this.state;
    const newQuantity = quantity - 1;
    this.setState({ quantity: newQuantity });
  };

  increaseQuantity = () => {
    const { quantity } = this.state;
    const newQuantity = quantity + 1;
    this.setState({ quantity: newQuantity });
  };

  render() {
    const { arrayOfIds, quantity } = this.state;

    console.log('a>>', arrayOfIds);

    if (!arrayOfIds.length) {
      return (
        <div className="emptyMessage">
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          <img src={ cart } alt="cart" />
        </div>
      );
    }

    return (
      <div className="fullCart">
        <div className="headerCart">
          <Link to="/" className="bottonHome"> home </Link>
          <h2>Carrinho de compra</h2>
          <a href="https://www.betrybe.com/" target="blank">
            <img src={ trybeLogo } alt="tribe" className="trybeLogo" />
          </a>
        </div>
        <div className="products-searched">
          { arrayOfIds.map((product) => {
            const { title, id, thumbnail, price } = product;
            return (
              <div key={ id } className="product">
                <div>
                  <img className="product-image" src={ thumbnail } alt={ title } />
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ this.decreaseQuantity }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ this.increaseQuantity }
                  >
                    +
                  </button>
                  <p>
                    R$
                    {' '}
                    {price}
                  </p>
                  <h3 data-testid="shopping-cart-product-name">{title}</h3>
                  <p data-testid="shopping-cart-product-quantity">{quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
