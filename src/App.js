import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import MyAccount from './pages/MyAccount';
import Cart from './pages/Cart';


class App extends Component {
  static propTypes = {

  };

  static defaultProps = {
    message: '',
  };

  componentDidMount() {
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
