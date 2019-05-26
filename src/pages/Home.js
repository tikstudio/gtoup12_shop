import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from './Contactus';
import MyAccount from './MyAccount';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <header className="woocommerce-products-header">
            <section
              className="woocommerce-page-title page-header-module module bg-dark"
              data-background="https://tempwp.orderwebsitenow.com/wp-content/themes/shop-isle/assets/images/header.jpg"
              style={{ backgroundImage: 'url(&quot;https://tempwp.orderwebsitenow.com/wp-content/themes/shop-isle/assets/images/header.jpg&quot) ' }}
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
          <div className="woocommerce-notices-wrapper" />


          <section className="module-small module-small-shop">
            <div className="container">

              <nav className="woocommerce-breadcrumb">
                <a href="https://tempwp.orderwebsitenow.com/">Home</a>
              </nav>
              <form className="woocommerce-ordering" method="get">
                <select name="orderby" className="orderby" aria-label="Shop order">
                  <option value="menu_order" selected="selected">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
                <input type="hidden" name="paged" value="1" />
              </form>

              <span className="shop-isle-sidebar-open">
                <span className="icon-filter" />
              </span>
              <div className="col-sm-9 shop-with-sidebar" id="shop-isle-blog-container">


                <ul className="products columns-3">
                  <li className="product type-product post-60 status-publish first instock product_cat-posters has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                    <Link
                      to="https://tempwp.orderwebsitenow.com/product/flying-ninja/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_2_up-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="poster_2_up.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_2_up-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_2_up-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_2_flat-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_2_flat-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_2_flat-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=60"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="60"
                              data-product_sku="POSTER-FLYING-NINJA"
                              aria-label="Add “Flying Ninja” to your cart"
                              rel="nofollow"
                            >
     Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Flying Ninja</h2>
                      <span className="onsale">Sale!</span>

                      <span className="price">
                        <del>
                          <span
                            className="woocommerce-Price-amount amount">
                            <span
                              className="woocommerce-Price-currencySymbol">AMD
                            </span>
15.00
                          </span>
                        </del>
                        {' '}
                        <ins>
                          <span
                            className="woocommerce-Price-amount amount"
                          >
                            <span
                              className="woocommerce-Price-currencySymbol"
                            >
AMD
                            </span>
12.00
                          </span>
                        </ins>
                      </span>
                    </Link>
                  </li>
                  <li className="product type-product post-26 status-publish instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="T_7_front.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=26"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="26"
                              data-product_sku="T-SHIRT-HAPPY-NINJA"
                              aria-label="Add “Happy Ninja” to your cart"
                              rel="nofollow"
                            >
Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Happy Ninja</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
18.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-27 status-publish last instock product_cat-clothing product_cat-hoodies has-post-thumbnail shipping-taxable purchasable product-type-simple">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/happy-ninja/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_front-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="hoodie_4_front.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_front-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_back-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_back-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=27"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="27"
                              data-product_sku="HOODIE-HAPPY-NINJA"
                              aria-label="Add “Happy Ninja” to your cart"
                              rel="nofollow"
                            >
Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Happy Ninja</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
35.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-25 status-publish first instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/ninja-silhouette-2/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_front-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="T_5_front.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_front-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_back-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_back-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=25"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="25"
                              data-product_sku="T-SHIRT-NINJA-SILHOUETTE"
                              aria-label="Add “Ninja Silhouette” to your cart"
                              rel="nofollow"
                            >
Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Ninja Silhouette</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
20.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-28 status-publish instock product_cat-clothing product_cat-hoodies has-post-thumbnail shipping-taxable product-type-external">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/ninja-silhouette/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_5_front-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="hoodie_5_front.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_5_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_5_front-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_5_back-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_5_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_5_back-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://mercantile.wordpress.org/product/wordpress-logo-black-zip-hoodie/"
                              data-quantity="1"
                              className="button product_type_external"
                              data-product_id="28"
                              data-product_sku="HOODIE-NINJA-SILHOUETTE"
                              aria-label="Buy on WordPress Swag Store"
                              rel="nofollow"
                            >
Buy on
                                                  WordPress Swag Store
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Ninja Silhouette</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
30.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-72 status-publish last instock product_cat-clothing product_cat-hoodies has-post-thumbnail shipping-taxable purchasable product-type-simple">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/patient-ninja/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_3_front-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="hoodie_3_front.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_3_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_3_front-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_3_back-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_3_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_3_back-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=72"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="72"
                              data-product_sku="HOODIE-PATIENT-NINJA"
                              aria-label="Add “Patient Ninja” to your cart"
                              rel="nofollow"
                            >
Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Patient Ninja</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
35.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-22 status-publish first instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/premium-quality-2/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_front-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="T_2_front.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_front-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_back-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_back-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=22"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="22"
                              data-product_sku="T-SHIRT-PREMIUM-QUALITY"
                              aria-label="Add “Premium Quality” to your cart"
                              rel="nofollow"
                            >
Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Premium Quality</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
20.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-57 status-publish instock product_cat-posters has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/premium-quality/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_3_up-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="poster_3_up.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_3_up-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_3_up-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_3_flat-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_3_flat-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_3_flat-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=57"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="57"
                              data-product_sku="POSTER-PREMIUM-QUALITY"
                              aria-label="Add “Premium Quality” to your cart"
                              rel="nofollow"
                            >
Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Premium Quality</h2>
                      <span className="onsale">Sale!</span>

                      <span className="price">
                        <del>
                          <span
                            className="woocommerce-Price-amount amount"
                          >
                            <span
                              className="woocommerce-Price-currencySymbol"
                            >
AMD
                            </span>
15.00
                          </span>
                        </del>
                        {' '}
                        <ins>
                          <span
                            className="woocommerce-Price-amount amount"
                          >
                            <span
                              className="woocommerce-Price-currencySymbol"
                            >
AMD
                            </span>
12.00
                          </span>
                        </ins>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-23 status-publish last instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-variable">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/ship-your-idea-3/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_4_front-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="T_4_front.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_4_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_4_front-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_3_back-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_3_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_3_back-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/product/ship-your-idea-3/"
                              data-quantity="1"
                              className="button product_type_variable add_to_cart_button"
                              data-product_id="23"
                              data-product_sku="T-SHIRT-SHIP-YOUR-IDEA"
                              aria-label="Select options for “Ship Your Idea”"
                              rel="nofollow"
                            >
Select
                                                  options
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Ship Your Idea</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
20.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-24 status-publish first instock product_cat-clothing product_cat-hoodies has-post-thumbnail sale shipping-taxable purchasable product-type-variable has-default-attributes">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/ship-your-idea-2/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_front-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="hoodie_7_front.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_front-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_back-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_back-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/product/ship-your-idea-2/"
                              data-quantity="1"
                              className="button product_type_variable add_to_cart_button"
                              data-product_id="24"
                              data-product_sku="HOODIE-SHIP-YOUR-IDEA"
                              aria-label="Select options for “Ship Your Idea”"
                              rel="nofollow"
                            >
Select
                                                  options
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Ship Your Idea</h2>
                      <span className="onsale">Sale!</span>

                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
30.00
                        </span>
                        {' '}
–
                        {' '}
                        <span
                          className="woocommerce-Price-amount amount"
                        >
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
35.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-63 status-publish instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/ship-your-idea/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_1_up-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="poster_1_up.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_1_up-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/poster_1_up-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_1_flat-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_1_flat-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/Poster_1_flat-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=63"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="63"
                              data-product_sku="POSTER-SHIP-YOUR-IDEA"
                              aria-label="Add “Ship Your Idea” to your cart"
                              rel="nofollow"
                            >
Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Ship Your Idea</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
15.00
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="product type-product post-15 status-publish last instock product_cat-albums product_cat-music has-post-thumbnail virtual purchasable product-type-simple">
                    <a
                      href="https://tempwp.orderwebsitenow.com/product/woo-album-1/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <div className="prod-img-wrap">
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/cd_1_angle-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog wp-post-image"
                          alt=""
                          title="cd_1_angle.jpg"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/cd_1_angle-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/cd_1_angle-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <img
                          width="262"
                          height="328"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/cd_1_flat-262x328.jpg"
                          className="attachment-shop_catalog size-shop_catalog"
                          alt=""
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/cd_1_flat-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/cd_1_flat-58x72.jpg 58w"
                          sizes="(max-width: 262px) 100vw, 262px"
                        />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <a
                              href="https://tempwp.orderwebsitenow.com/?add-to-cart=15"
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="15"
                              data-product_sku="WOO-ALBUM-1"
                              aria-label="Add “Woo Album #1” to your cart"
                              rel="nofollow"
                            >
Add to
                                                  cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Woo Album #1</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span
                            className="woocommerce-Price-currencySymbol"
                          >
AMD
                          </span>
9.00
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-sm-12">
                    <nav className="woocommerce-pagination">
                      <ul className="page-numbers">
                        <li><span aria-current="page" className="page-numbers current">1</span></li>
                        <li>
                          <a
                            className="page-numbers"
                            href="https://tempwp.orderwebsitenow.com/page/2/"
                          >
2
                          </a>
                        </li>
                        <li>
                          <a
                            className="next page-numbers"
                            href="https://tempwp.orderwebsitenow.com/page/2/"
                          >
→
                          </a>
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
                          <input
                            type="text"
                            id="min_price"
                            name="min_price"
                            value="0"
                            data-min="0"
                            placeholder="Min price"
                            style={{ display: 'none' }}
                          />
                          <input
                            type="text"
                            id="max_price"
                            name="max_price"
                            value="40"
                            data-max="40"
                            placeholder="Max price"
                            style={{ display: 'none' }}
                          />
                          <button type="submit" className="button">Filter</button>
                          <div className="price_label" style={{}}>
                                                          Price:
                            {' '}
                            <span className="from">AMD0</span>
                            {' '}
—
                            {' '}
                            <span
                              className="to"
                            >
AMD40
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

        </div>
        <Footer />
        <ContactUs />
        <MyAccount />
      </div>
    );
  }
}

export default Home;
