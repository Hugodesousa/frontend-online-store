import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = ({
      categories: [],
    });
  }

  componentDidMount() {
    this.teste();
  }

  teste = async () => {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
