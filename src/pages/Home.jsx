import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from '../components/ProductList';
import shopping from '../assets/shopping-cart.svg';

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

 handleCLick = async (id) => {
   const { productInput } = this.state;
   if (productInput) {
     const response = await getProductsFromCategoryAndQuery(undefined, productInput);
     this.setState({
       productInput: '',
       productList: response.results,
     });
   } else {
     const response = await getProductsFromCategoryAndQuery(id, undefined);
     this.setState({
       productInput: '',
       productList: response.results,
     });
   }
 }

 render() {
   const { categories, productInput, productList } = this.state;
   return (
     <div className="container">
       <div className="search">
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
         <Link data-testid="shopping-cart-button" to="/cart">
           <img id="cart" alt="cart" src={ shopping } />
         </Link>
       </div>
       <h2 data-testid="home-initial-message" className="subtitle">
         Digite algum termo de pesquisa ou escolha uma categoria.
       </h2>
       <div className="products-section">
         <div className="categories">
           { categories.map(({ id, name }) => (
             <button
               className="category-button"
               data-testid="category"
               type="button"
               value={ name }
               key={ id }
               onClick={ () => this.handleCLick(id) }
             >
               { name }
             </button>
           )) }
         </div>
         <div className="products-searched">
           { !productList ? <p>Nenhum produto foi encontrado</p> : (
             productList.map((productObj) => (
               <ProductList
                 key={ productObj.id }
                 productObj={ productObj }
               />
             ))
           ) }
         </div>
       </div>
     </div>
   );
 }
}

export default Home;
