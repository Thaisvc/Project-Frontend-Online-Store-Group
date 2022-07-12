import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartElement from './CartElement';

/* import PropTypes from 'prop-types'; */

class DetailedProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetail: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { location: { search } } = this.props;
    this.fetchProduct(id, search);
  }

    fetchProduct = async (id, title) => {
      const { results } = await getProductsFromCategoryAndQuery('', title);
      const product = results.find((result) => result.id === id);
      this.setState({
        productDetail: product,
      });
    }

    render() {
      const { productDetail: { title, thumbnail, id, price } } = this.state;
      const { addToCart, cart } = this.props;
      /* console.log(title, thumbnail, id); */
      return (
        <section>
          <h1 data-testid="product-detail-name">
            {title}
          </h1>
          <p>{price}</p>
          <img src={ thumbnail } alt={ title } />
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => addToCart({ title, id }) }
          >
            Adicicionar ao Carrinho

          </button>
          <CartElement cart={ cart } />
        </section>
      );
    }
}
DetailedProduct.propTypes = {
  match: {
    params: {
      id: PropTypes.string.isRequired,
    },
  }.isRequired,
  location: PropTypes.objectOf(
    PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default DetailedProduct;
