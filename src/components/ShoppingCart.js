import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  countProducts = (id) => {
    const { cart } = this.props;
    const quantity = cart.filter((product) => product.id === id);
    return quantity.length;
  }

  productsInCart = () => {
    const { cart } = this.props;
    const ids = cart.map(({ id }) => id);
    const products = cart.filter((product, index) => ids.indexOf(product.id) === index);
    return products;
  }

  // exemplo const newState = state.filter((data) => data.id !== id)
  // se quebrar a pagina, comenta da linha 21 a 25 e alinha 43

  // removeCart = () => {
  //   const { cart } = this.props;
  //   const products = cart.filter((data) => data.title !== title);
  //   return (products.length > 0) ? products : cart;
  // }

  render() {
<<<<<<< HEAD
    const { cart, addToCart } = this.props;
=======
    const { cart } = this.props;
    const products = this.productsInCart();
>>>>>>> main-group-18

    return (
      cart.length === 0 ? (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      ) : (
        products.map(({ title, id }) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <p data-testid="shopping-cart-product-quantity">
              { this.countProducts(id) }
            </p>
            <button
              // onClick={ () => (removeCart({ title })) }
              id={ id }
              data-testid="product-decrease-quantity"
              type="button"
            >
              -1
            </button>
            <button
              onClick={ () => (addToCart({ title, id })) }
              id={ id }
              data-testid="product-increase-quantity"
              type="button"
            >
              +1
            </button>
          </div>
        ))
      )
    );
  }
}

ShoppingCart.propTypes = {
  // https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
