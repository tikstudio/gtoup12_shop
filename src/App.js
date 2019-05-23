import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/Contactus';
import MyAccount from './pages/MyAccount';
import Cart from './pages/Cart';


class App extends Component {
  static defaultProps = {
    message: '',
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/myAccount" component={MyAccount} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
