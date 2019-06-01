import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/actions/product';

class SingleProduct extends Component {
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchSingleProduct(slug);
  }

  render() {
    console.log(this.props.single);
    return (
      <div className="container product-main-content">
        <div className="woocommerce-notices-wrapper" />
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

const mapStateToProps = state => ({
  single: state.product.single,
});

const mapDispatchToProps = {
  fetchSingleProduct,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProduct);

export default Container;
