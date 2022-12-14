import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/details/:id" component={ ProductDetails } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>

    );
  }
}

export default App;
