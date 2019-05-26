import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleProduct extends Component {
  render() {
    return (
      <div className="container product-main-content">
        <div className="woocommerce-notices-wrapper"> </div>
        <nav className="woocommerce-breadcrumb">
          <Link href="https://tempwp.orderwebsitenow.com">Home</Link>
          <Link
            to="https://tempwp.orderwebsitenow.com/product-category/clothing/"
          >
Clothing
          </Link>
          <Link to="https://tempwp.orderwebsitenow.com/product-category/clothing/hoodies/">
            Hoodies
          </Link>
          Happy Ninja
        </nav>
        <div
          id="product-27"
          className="product type-product post-27 status-publish first instock product_cat-clothing product_cat-hoodies has-post-thumbnail shipping-taxable purchasable product-type-simple"
        />
      </div>
    );
  }
}

export default SingleProduct;
