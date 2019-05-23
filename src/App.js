import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from './store/actions/product';
import {BrowserRouter, Route, Switch,} from "react-router-dom";

import Home from '../src/pages/Home';
import ContactUs from '../src/pages/ContactUs';
import MyAccount from '../src/pages/MyAccount';

class App extends Component {
  static propTypes = {
    message: PropTypes.string,
    fetchProducts: PropTypes.func.isRequired,
  };

  static defaultProps = {
    message: '',
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  test = () => {
    console.log(11111);
  };

  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/contactus" component={ContactUs}/>
            <Route path="/myaccount" component={MyAccount}/>
            <Route path="/" exact component={Home}/>
          </Switch>
        </BrowserRouter>
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
