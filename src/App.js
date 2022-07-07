import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import './App.css';
import Home from './components/Home';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
