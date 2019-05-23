import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import MyAccount from './pages/MyAccount';
import Cart from './pages/Cart';


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
            <Route path="/cart" component={Cart} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
