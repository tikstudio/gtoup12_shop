import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from './Contactus';
import MyAccount from './MyAccount';


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <ContactUs />
        <MyAccount />

      </div>
    );
  }
}

export default Home;
