import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Search from './components/search';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Search } />
        <Route path="/cart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}

export default App;
