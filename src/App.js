import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stripHtml from 'string-strip-html';
import { connect } from 'react-redux';
import { fetchProducts } from './store/actions/product';

class App extends Component {
  static propTypes = {
    products: PropTypes.array,
    fetchProducts: PropTypes.func.isRequired,
  }

  static defaultProps = {
    products: [],
  }

  componentDidMount() {
    this.props.fetchProducts();
  }


  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>test</h1>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {stripHtml(p.description)}
              <div dangerouslySetInnerHTML={{ __html: p.description }} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products,
});

const mapDispatchToProps = {
  fetchProducts,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Container;
