import React, {Component} from 'react';

class Header extends Component {
    render() {
      return (
          <header className="header ">
            <nav className="navbar navbar-custom navbar-fixed-top  navbar-color-on-scroll" role="navigation">
              <div className="container">
                <div className="header-container">

                  <div className="navbar-header">
                    <div className="shop_isle_header_title">
                      <div className="shop-isle-header-title-inner">
                        <h1 className="site-title">
                          <a href="https://tempwp.orderwebsitenow.com/" title="Group12 Shop" rel="home">
                            Group12 Shop
                          </a>
                        </h1>
                        <p className="site-description">
                        <a href="https://tempwp.orderwebsitenow.com/" title="" rel="home">

                        </a>
                      </p>
                      </div>
                    </div>
                    <div className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"/>
                      <span className="icon-bar"/>
                      <span className="icon-bar"/>
                    </div>
                  </div>

                  <div className="header-menu-wrap">
                    <div className="collapse navbar-collapse" id="custom-collapse">

                      <ul id="menu-menu-1" className="nav navbar-nav navbar-right">
                        <li id="menu-item-44"
                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-44">
                          <a href="https://tempwp.orderwebsitenow.com/">
                          <i className="obfx-menu-icon fa fa-home">
                          </i>Home
                        </a>
                        </li>
                        <li id="menu-item-106"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
                          <a href="https://tempwp.orderwebsitenow.com/contact-us/">
                            <i className="obfx-menu-icon dashicons dashicons-email">

                          </i>Contact Us</a>
                        </li>
                        <li id="menu-item-48"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
                          <a
                          href="https://tempwp.orderwebsitenow.com/my-account/">
                          <i className="obfx-menu-icon fa fa-user">

                          </i>
                          My account
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="navbar-cart">
                    <div className="header-search">
                      <div className="glyphicon glyphicon-search header-search-button">

                      </div>
                      <div className="header-search-input">
                        <form role="search" method="get" className="woocommerce-product-search"
                              action="https://tempwp.orderwebsitenow.com/">
                          <input type="search" className="search-field" placeholder="Search Products…" value="" name="s"
                                 title="Search for:"/>
                            <input type="submit" value="Search"/>
                              <input type="hidden" name="post_type" value="product"/>
                        </form>
                      </div>
                    </div>
                    <div className="navbar-cart-inner">
                      <a href="https://tempwp.orderwebsitenow.com/cart/" title="View your shopping cart"
                         className="cart-contents">
                        <span className="icon-basket"/>
                        <span className="cart-item-number">0</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </nav>
          </header>
      );
    }
  }
  export default Header;