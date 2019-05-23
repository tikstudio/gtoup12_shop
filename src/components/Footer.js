import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (

      <footer
        className="footer bg-dark"
      >

        <hr className="divider-d" />
        <div className="container">

          <div className="row">

            <div className="col-sm-6">
              <p className="shop-isle-poweredby-box">
                <Link className="shop-isle-poweredby" to="http://themeisle.com/themes/shop-isle/" rel="nofollow">
                  {' '}
ShopIsle
                </Link>
powered by
                <Link className="shop-isle-poweredby" to="http://wordpress.org/" x rel="nofollow">
                  {' '}
WordPress
                </Link>
              </p>
            </div>
            <div className="col - sm - 6">
              <div className="footer - social - links">
                <Link to="https://tempwp.orderwebsitenow.com/#" target="_blank">
                  <span className="social_facebook" />
                </Link>
                <Link to="https://tempwp.orderwebsitenow.com/#" target="_blank">
                  <span className="social_twitter" />
                </Link>
                <Link to="https://tempwp.orderwebsitenow.com/#" target="_blank">
                  <span className="social_dribbble" />
                </Link>
                <Link to="https://tempwp.orderwebsitenow.com/#" target="_blank">
                  <span className="social_skype" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
