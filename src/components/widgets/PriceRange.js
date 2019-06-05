// // import React, { Component } from 'react';
// import InputRange from 'react-input-range';
// import 'react-input-range/lib/css/index.css';
// import { withRouter } from 'react-router-dom';
// import {fetchProducts} from "../../store/actions/product";
// import {connect} from "react-redux";
//
//
// class PriceRange extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//      min: '',
//      max: '',
//    };
//   }
//
//   // handleChange = (value) => {
//   //   this.setState({ value });
//   // }
//   //
//   // apply = () => {
//   //   const { min, max } = this.state.value;
//   //   this.props.history.push(`?min=${min}&max=${max}`);
//   // }
//
//   render() {
//     return (
//
//       <div className="price_slider_amount" data-step="10">
//         <button type="submit" className="button">Filter</button>
//         <div className="price_label" style={{}}>
//
//           Price:
//           <InputRange
//             maxValue={this.max}
//             minValue={this.min}
//             value={this.state.value}
//             onChange={this.handleChange}
//             onChangeComplete={this.apply}
//           />
//           <span className="from"> 0  </span>
//
//           {/*{this.state.value.min.toFixed(2)}*/}
//           {/*{' '}*/}
//           {/*- $*/}
//           {this.state.value.max.toFixed(2)}
//           <span className="to"> 35 </span>
//         </div>
//
//         <div className="clear" />
//       </div>
//
//     );
//   }
// }
// const mapStateToProps = state => ({
//   products: state.product.products,
// });
//
// const mapDispatchToProps = {
//   fetchProducts,
// };
//
// const Container = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PriceRange);
//
//
// export default withRouter(Container);
