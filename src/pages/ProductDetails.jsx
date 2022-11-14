import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDetailProduct } from '../services/api';
import addToCart from '../services/addToCart';
import shopping from '../assets/shopping-cart.svg';
import '../style/details.css';

class ProductDetails extends Component {
  constructor({ match: { params } }) {
    super();
    const { id } = params;

    console.log(id);

    this.state = {
      emailUser: '',
      // saveEmailUser: '',
      evaluationText: '',
      // saveEvaluationText: '',
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  publishReview = () => {
    const { evaluationText, emailUser } = this.state;
    this.setState({
      // saveEvaluationText: evaluationText,
      // saveEmailUser: emailUser,
      emailUser: '',
      evaluationText: '',
    });

    localStorage.setItem('user-email', emailUser);
    localStorage.setItem('evaluation-text', evaluationText);
  }

  verifyLocalStorage = () => {
    const email = localStorage.getItem('user-email');
    const text = localStorage.getItem('evaluation-text');

    if (email && text) {
      return (
        <div>
          <p>{email}</p>
          <p>{text}</p>
        </div>
      );
    }

    return null;
  }

  render() {
    const { product, emailUser, evaluationText } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div className="detailsContainer">
        <div className="photoTile">
          <img className="product-image" src={ thumbnail } alt={ title } />
          <div className="titleDetails">
            <h3 data-testid="product-detail-name" className="product-title">{title}</h3>
            <Link data-testid="shopping-cart-button" to="/cart">
              <img id="cart" alt="cart" src={ shopping } />
            </Link>
            <h4>
              R$
              {' '}
              {price}
            </h4>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => addToCart(product) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <div className="formContainer">
          <div>
            <label htmlFor="input-email">
              <input
                value={ emailUser }
                name="emailUser"
                onChange={ this.handleChange }
                id="input-email"
                type="email"
                data-testid="product-detail-email"
                placeholder="email"
                className="formItem"
              />
            </label>

            <div
              onChange={ this.handleChange }
              className="formItem"
            >
              1
              <input
                id="1"
                type="radio"
                data-testid="1-rating"
              />

              2
              <input
                id="2"
                type="radio"
                data-testid="2-rating"
              />

              3
              <input
                id="3"
                type="radio"
                data-testid="3-rating"
              />

              4
              <input
                id="4"
                type="radio"
                data-testid="4-rating"
              />

              5
              <input
                id="5"
                type="radio"
                data-testid="5-rating"
              />
            </div>
          </div>
          <label htmlFor="evaluation">
            <input
              value={ evaluationText }
              name="evaluationText"
              onChange={ this.handleChange }
              id="evaluation"
              data-testid="product-detail-evaluation"
              type="text"
              placeholder="comentário"
              className="formItem"
            />
          </label>
          <button
            onClick={ this.publishReview }
            type="button"
            data-testid="submit-review-btn"
            className="formItem"
          >
            Enviar
          </button>
        </div>


        { this.verifyLocalStorage() }
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
