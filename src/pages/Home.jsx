import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from '../components/ProductList';

class Home extends Component {
  constructor() {
    super();
    this.state = ({
      categories: [],
      productList: [],
      productInput: '',
    });
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ productInput: value });
  }

  handleCLick = async () => {
    const { productInput } = this.state;
    const response = await getProductsFromCategoryAndQuery(undefined, productInput);
    this.setState({
      productInput: '',
      productList: response.results,
    });
  }

  render() {
    const { categories, productInput, productList } = this.state;
    return (
      <div className="container">
        <label htmlFor="query-input">
          <input
            id="query-input"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ productInput }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleCLick }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cart">
          Carrinho
        </Link>
        <div className="categories">
          { categories.map(({ id, name }) => (
            <button
              data-testid="category"
              type="button"
              value={ name }
              key={ id }
            >
              { name }
            </button>
          )) }
        </div>
        <div>
          { !productList ? <p>Nenhum produto foi encontrado</p> : (
            productList.map(({ title, id, thumbnail, price }) => (
              <ProductList
                key={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
              />
            ))
          ) }
        </div>
      </div>
    );
  }
}

export default Home;
