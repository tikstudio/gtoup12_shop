import React, { Component } from 'react';

import { connect } from 'react-redux';
import Wrapper from '../Wrapper';
import { fetchProducts, fetchSingleProducts } from '../../store/actions/product';

class SingleProduct extends Component {
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchSingleProducts(slug);
  }

  render() {
    const { single } = this.props;
    console.log(single)

    return (
      <div className="container product-main-content">
        <Wrapper headerImage={false}>
          <h1>zzzzzzzzzzzzzzzzzzz</h1>

        </Wrapper>
      </div>
    );
  }
}






const mapStateToProps = state => ({
  single: state.product.single,
});

const mapDispatchToProps = {
  fetchProducts,
  fetchSingleProducts
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProduct);

export default Container;
