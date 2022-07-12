import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Category from './category';
import CartElement from './CartElement';
import './Search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      listProducts: [],
      // listCategory: [],
      query: '',
      searches: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async ({ target }) => {
    const { results } = await getProductsFromCategoryAndQuery(target.id, '');
    this.setState(({ searches }) => ({
      listProducts: results,
      searches: searches + 1,
    }));
  }

  fetchProducts = async () => {
    const { query } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', query);
    this.setState(({ searches }) => ({
      listProducts: results,
      searches: searches + 1,
    }));
  }

  render() {
    const { listProducts, searches } = this.state;
    const { addToCart, cart } = this.props;

    return (
      <div>
        <div className="cabecalho">
          <div className="busca">
            { listProducts.length === 0 && searches === 0 && (
              <h1 data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h1>) }
            <input
              data-testid="query-input"
              name="query"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.fetchProducts }
            >
              Pesquisar
            </button>
          </div>
          <div className="carinho">
            <CartElement cart={ cart } />
          </div>
        </div>
        <Category handleClick={ this.handleClick } />
        { listProducts.length === 0 && searches !== 0 && (
          <h1>Nenhum produto foi encontrado</h1>) }
        { listProducts.length > 0 && (
          listProducts.map((prod) => {
            const { id, price, title, thumbnail } = prod;
            return (
              <div key={ id }>
                <Link
                  data-testid="product-detail-link"
                  to={ {
                    pathname: `/detailedProduct/${id}`,
                    search: title,
                  } }
                >
                  <div data-testid="product">
                    <img src={ thumbnail } alt={ title } />
                    <span>{ title }</span>
                    <span>{ price }</span>
                  </div>
                </Link>
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => addToCart(prod) }
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            );
          })
        ) }
      </div>
    );
  }
}

Search.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Search;
