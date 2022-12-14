import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Search from './components/search';
import ShoppingCart from './components/ShoppingCart';
import DetailedProduct from './components/DetailedProduct';
import Checkout from './components/checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      savedItems: [],
    };
  }

  componentDidMount() {
    const loadCart = JSON.parse(localStorage.getItem('cartList'));
    if (loadCart) {
      this.setState({ cart: loadCart });
    }
  }

  saveLocalStorage = (savedItems) => {
    localStorage.setItem('cartList', JSON.stringify(savedItems));
  }

  addToCart = async (prod) => {
    this.setState(({ cart }) => ({ cart: [...cart, prod] }));
    const { savedItems, cart } = this.state;
    savedItems.push({ cart });
    this.setState({ savedItems });
    this.saveLocalStorage(savedItems);
  }

  removeCart = (id) => {
    const { cart } = this.state;
    const index = cart.reverse().findIndex((product) => product.id === id);
    const removeProduct = cart.splice(index, 1);
    const newCart = cart.filter((product) => product !== removeProduct);
    this.setState({ cart: newCart });
    const { savedItems } = this.state;
    savedItems.push({ cart });
    this.setState({ savedItems });
    this.saveLocalStorage(savedItems);
  }

  render() {
    const { cart } = this.state;

    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ () => (<Search
            addToCart={ this.addToCart }
            cart={ cart }
          />) }
        />
        <Route
          path="/cart"
          render={ () => (<ShoppingCart
            cart={ cart }
            addToCart={ this.addToCart }
            removeCart={ this.removeCart }
          />) }
        />
        <Route
          path="/detailedProduct/:id"
          render={ (props) => (<DetailedProduct
            { ...props }
            addToCart={ this.addToCart }
            cart={ cart }
            setEvaluations={ this.setEvaluations }
            getEvaluations={ this.getEvaluations }
          />) }
        />
        <Route
          path="/Checkout"
          component={ Checkout }
        />
      </BrowserRouter>
    );
  }
}

export default App;
