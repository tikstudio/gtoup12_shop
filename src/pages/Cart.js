import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div>
        <header className="woocommerce-products-header">
          <section
            className="woocommerce-page-title page-header-module module bg-dark"
            data-background="https://tempwp.orderwebsitenow.com/wp-content/themes/shop-isle/assets/images/header.jpg"
            style={{ backgroundImage: 'url(&quot;https://tempwp.orderwebsitenow.com/wp-content/themes/shop-isle/assets/images/header.jpg&quot;)' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h1 className="module-title font-alt">Shop</h1>
                </div>
              </div>
            </div>
          </section>

        </header>
      </div>
    );
  }
}

export default Cart;
