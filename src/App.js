import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from './store/actions/product';

class App extends Component {
  static propTypes = {
    message: PropTypes.string,
    fetchProducts: PropTypes.func.isRequired,
  }

  static defaultProps = {
    message: '',
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  test = () => {
    console.log(11111);
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        <h1>test</h1>
        {message}
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
