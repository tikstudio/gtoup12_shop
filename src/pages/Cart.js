import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from "../components/Wrapper";

class Cart extends Component {
  render() {
    return (
      <Wrapper headerImage={false}>
      <div className="main">
        <section className="module module-cart-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <h1 className="module-title font-alt">Cart</h1>
              </div>
            </div>
            <hr className="divider-w pt-20" />
          </div>
        </section>
        <section className="page-module-content module module-cart-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="woocommerce"> </div>
                <article id="post-7" className="post-7 page type-page status-publish hentry">
                  <div className="entry-content">
                    <div className="woocommerce">
                      <div className="woocommerce-notices-wrapper"> </div>
                      <p className="cart-empty">Your cart is currently empty.</p>
                      {' '}
                      <p className="return-to-shop">
                        <Link className="button wc-backward" to="/">
                        Return to shop
                          {' '}
                        </Link>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
      </Wrapper>
    );
  }
}

export default Cart;
