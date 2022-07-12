import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getDetailProduct } from '../services/api';
import trybeLogo from '../assets/trybeLogo.png';
import cart from '../assets/Cart.png';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      arrayOfIds: [],
    };
  }

  componentDidMount() {
    this.getProductsFromStorage();
  }

 getProductsFromStorage = async () => {
   const data = JSON.parse(localStorage.getItem('cartArray'));
   if (data) {
     data.forEach((object) => { object.quantity = 1; });
     this.setState({
       arrayOfIds: data,
     });
   }
 }

 decreaseQuantity = (id) => {
   const { arrayOfIds } = this.state;

   const decreaseArray = arrayOfIds.map((obj) => {
     if (obj.id === id) {
       obj.quantity -= 1;
       if (obj.quantity === 0) {
         obj.quantity = 1;
       }
       return obj;
     }
     return obj;
   });
   this.setState({ arrayOfIds: decreaseArray });
 };

 increaseQuantity = (id) => {
   const { arrayOfIds } = this.state;

   const increaseArray = arrayOfIds.map((obj) => {
     if (obj.id === id) {
       obj.quantity += 1;
       return obj;
     }
     return obj;
   });
   this.setState({ arrayOfIds: increaseArray });
 };

 render() {
   const { arrayOfIds } = this.state;

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
           const { title, id, thumbnail, price, quantity } = product;
           return (
             <div key={ id } className="product">
               <div>
                 <img className="product-image" src={ thumbnail } alt={ title } />
                 <button
                   type="button"
                   data-testid="product-decrease-quantity"
                   onClick={ () => this.decreaseQuantity(id) }
                 >
                   -
                 </button>
                 <button
                   type="button"
                   data-testid="product-increase-quantity"
                   onClick={ () => this.increaseQuantity(id) }
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
       <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
     </div>
   );
 }
}

export default Cart;
