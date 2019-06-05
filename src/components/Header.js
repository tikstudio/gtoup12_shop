import React, { Component } from 'react';
import Prototype from 'prop-types';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../api';

class Header extends Component {
  static propTypes = {
    headerImage: Prototype.string,
  }

  static defaultProps = {
    headerImage: `${SITE_URL}/wp-content/themes/shop-isle/assets/images/header.jpg`,
  }

  render() {
    return (
      <div>

        <header className="header ">
          <nav
            className="navbar navbar-custom navbar-fixed-top  navbar-color-on-scroll navbar-transparent"
            role="navigation"
          >

            <div className="container">
              <div className="header-container">

                <div className="navbar-header">
                  <div className="shop_isle_header_title">
                    <div className="shop-isle-header-title-inner">
                      <h1 className="site-title">
                        <Link
                          to="/"
                          title="Home"
                        >
                          Group12 Shop
                        </Link>
                      </h1>
                      <p className="site-description">
                        <Link to="/" title="" rel="home" />
                      </p>

                    </div>
                  </div>
                  <div type="button" className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </div>
                </div>

                <div className="header-menu-wrap">
                  <div className="collapse navbar-collapse" id="custom-collapse">

                    <ul id="menu-menu-1" className="nav navbar-nav navbar-right">
                      <li
                        id="menu-item-44"
                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-44"
                      >
                        <Link to="/" aria-current="page">
                          <i className="obfx-menu-icon fa fa-home" />
                          Home
                        </Link>
                      </li>
                      <li
                        id="menu-item-106"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106"
                      >
                        <Link to="/contact-us">
                          <i className="obfx-menu-icon dashicons dashicons-email" />
                          Contact Us
                        </Link>
                      </li>
                      <li
                        id="menu-item-48"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"
                      >
                        <Link to="/my-account">
                          <i className="obfx-menu-icon fa fa-user" />
                          My account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="navbar-cart">

                  <div className="header-search">
                    <div className="glyphicon glyphicon-search header-search-button" />
                    <div className="header-search-input">
                      <form
                        role="search"
                        method="get"
                        className="woocommerce-product-search"
                        action="https://tempwp.orderwebsitenow.com/"
                      >
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search Products…"
                          name="s"
                          title="Search for:"
                        />
                        <input type="submit" value="Search" />
                        <input type="hidden" name="post_type" value="product" />
                      </form>
                    </div>
                  </div>

                  <div className="navbar-cart-inner">

                    <Link to="/cart" title="View your shopping cart" className="cart-contents">
                      <span className="icon-basket" />
                      <span className="cart-item-number">0</span>
                    </Link>


                  </div>

                </div>

              </div>
            </div>

          </nav>
        </header>
        {this.props.headerImage ? (
          <div className="woocommerce-products-header">
            <section
              className="woocommerce-page-title page-header-module module bg-dark"
              style={{ backgroundImage: `url(${this.props.headerImage})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <h1 className="module-title font-alt">Shop</h1>
                  </div>
                </div>
              </div>
            </section>

          </div>
        ) : null }

      </div>
    );
  }
}

export default Header;
