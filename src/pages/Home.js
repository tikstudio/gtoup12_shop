import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Prototype from 'prop-types';
import Wrapper from '../components/Wrapper';
import { SITE_URL } from '../api';
import { fetchProducts } from '../store/actions/product';
import ProductItem from '../components/ProductItem';



class Home extends Component {
  static propTypes = {
    fetchProducts: Prototype.func.isRequired,
    products: Prototype.array.isRequired,
    match: Prototype.object.isRequired,
    history: Prototype.object.isRequired,
    page: Prototype.number.isRequired,
  }

  constructor(props) {
    super(props);

  }



  static defaultProps = {};

  componentDidMount() {
    const page = parseInt(this.props.match.params.page) || 1;
    if (this.props.page !== page) {
      this.props.fetchProducts({ page });
    }
  }





  componentWillReceiveProps(nextProps) {
    const oldPage = parseInt(this.props.match.params.page) || 1;
    const page = parseInt(nextProps.match.params.page) || 1;
    if (page !== oldPage) {
      window.scrollTo(0, 300);
      this.props.fetchProducts({ page });
    }
  }


  render() {
    //
     const { products } = this.props;
     console.log(products)
    // const categoryId = parseInt(this.props.match.params.categoryId);
    // const min = getSearchParam('min');
    // const max = getSearchParam('max');
    // // products = filterByCategory(categoryId, products);
    // products = filterByPrice(min, max, products);


    return (
      <Wrapper headerImage={`${SITE_URL}/wp-content/themes/shop-isle/assets/images/header.jpg`}>
        <div className="woocommerce-notices-wrapper" />
        <section className="module-small module-small-shop">
          <div className="container">

            <nav className="woocommerce-breadcrumb">
              <Link to="/">Home</Link>
            </nav>
            <form className="woocommerce-ordering" method="get">
              <select name="orderby" defaultValue="menu_order" className="orderby" aria-label="Shop order">
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </form>

            <span className="shop-isle-sidebar-open">
              <span className="icon-filter" />
            </span>
            <div className="col-sm-9 shop-with-sidebar" id="shop-isle-blog-container">


              <ul className="products columns-3">
                {products.map(p => (
                  <li
                    key={p.id}
                    className="product type-product post-60 status-publish instock product_cat-posters has-post-thumbnail sale shipping-taxable purchasable product-type-simple"
                  >
                    <ProductItem data={p} />
                  </li>
                ))}

              </ul>
              <div className="row">
                <div className="col-sm-12">
                  <nav className="woocommerce-pagination">
                    <ul className="page-numbers">
                      <li>
                        <Link aria-current="page" className="page-numbers current" to="/page/1/">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link className="page-numbers" to="/page/2/">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link className="page-numbers" to="/page/2/">
                          →
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

            </div>

            <div className="col-sm-3 col-md-3 sidebar sidebar-shop" style={{ left: '0px' }}>
              <span className="shop-isle-sidebar-close">
                <span className="icon-close" />
              </span>
              <aside id="secondary" className="widget-area" role="complementary">
                <div
                  id="woocommerce_layered_nav-2"
                  className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
                >
                  <h3
                    className="widget-title"
                  >
                    Filter by
                  </h3>
                  <ul className="woocommerce-widget-layered-nav-list">
                    <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                      <a
                        rel="nofollow"
                        href="https://tempwp.orderwebsitenow.com/?filter_color=black"
                      >
                        Black
                      </a>
                      {' '}
                      <span
                        className="count"
                      >
(2)
                      </span>
                    </li>
                    <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                      <a
                        rel="nofollow"
                        href="https://tempwp.orderwebsitenow.com/?filter_color=blue"
                      >
                        Blue
                      </a>
                      {' '}
                      <span
                        className="count"
                      >
(1)
                      </span>
                    </li>
                    <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                      <a
                        rel="nofollow"
                        href="https://tempwp.orderwebsitenow.com/?filter_color=green"
                      >
                        Green
                      </a>
                      {' '}
                      <span
                        className="count"
                      >
(1)
                      </span>
                    </li>
                  </ul>
                </div>
                <div id="woocommerce_price_filter-2" className="widget woocommerce widget_price_filter">
                  <h3 className="widget-title">Filter by price</h3>
                  <form method="get" action="https://tempwp.orderwebsitenow.com/">
                    <div className="price_slider_wrapper">
                      <div
                        className="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                        style={{}}
                      >
                        <div
                          className="ui-slider-range ui-widget-header ui-corner-all"
                          style={{ left: '0%', width: '100%' }}
                        />
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          style={{ left: '0%' }}
                        />
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          style={{ left: '100%' }}
                        />
                      </div>
                      <div className="price_slider_amount" data-step="10">
                        <button type="submit" className="button">Filter</button>
                        <div className="price_label" style={{}}>
                          Price:
                          {' '}
                          <span className="from">AMD 0</span>
                          {' '}
                          —
                          {' '}
                          <span
                            className="to"
                          >
                                    AMD 50
                          </span>
                        </div>

                        <div className="clear" />
                      </div>
                    </div>
                  </form>
                </div>
              </aside>

            </div>


          </div>

        </section>

      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products,
  page: state.product.page,
});

const mapDispatchToProps = {
  fetchProducts,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Container;
