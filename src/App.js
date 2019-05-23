import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Myaccaunt from './pages/Myaccaunt';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* eslint-disable-next-line no-undef */}
          <Route path="/Contactus" exact component={Contactus} />
          <Route path="/Myaccaunt" exact component={Myaccaunt} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
