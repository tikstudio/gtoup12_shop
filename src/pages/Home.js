import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUs from "../pages/ContactUs";

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
        <ContactUs/>
      </div>
    );
  }
}

export default Home;