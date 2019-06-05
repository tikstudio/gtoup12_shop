import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/actions/product';
import Wrapper from '../components/Wrapper';

class SingleProduct extends Component {
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchSingleProduct(slug);
  }

  render() {
    const { single } = this.props;
    console.log(single);
    return (
      <Wrapper headerImage={false}>
        <section className="module module-super-small">
          <div className="container product-main-content">
            <div className="woocommerce-notices-wrapper" />
            <nav className="woocommerce-breadcrumb">
              <Link to="/">Home</Link>
&nbsp;/&nbsp;
              <Link to="https://tempwp.orderwebsitenow.com/product-category/clothing/">Clothing</Link>
&nbsp;/&nbsp;
              <Link to="https://tempwp.orderwebsitenow.com/product-category/clothing/t-shirts/">T-shirts</Link>
&nbsp;/&nbsp;
              {/* summary entry-summary */}
            </nav>
            <div id="product-26" className="product type-product post-26 status-publish first instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">

              <div
                className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-6 images"
                data-columns="6"
                style={{ opacity: '1', transition: 'opacity 0.25s ease-in-out 0s' }}
              >

                <Link
                  to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#"
                  className="woocommerce-product-gallery__trigger"
                >
                  <img draggable="false" className="emoji" alt="🔍" src={single.image} />
                </Link>

                <div className="flex-viewport" style={{ overflow: 'hidden', position: 'relative', height: '555px' }}>
                  <figure className="woocommerce-product-gallery__wrapper" style={{ width: '400%', transitionDuration: '0s', transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div
                      data-thumb="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-160x160.jpg"
                      data-thumb-alt=""
                      className="woocommerce-product-gallery__image flex-active-slide"
                      style={{
                        width: '555px',
                        float: 'left',
                        display: 'block',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Link to="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front.jpg">
                        <img
                          width="555"
                          height="555"
                          // alt={single.images[0].alt}
                          // src={single.images[0].src}
                          className="wp-post-image"
                          title="T_7_front.jpg"
                          data-caption=""
                          data-src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front.jpg"
                          data-large_image="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front.jpg"
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-555x555.jpg
                         555w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-150x150.jpg 150w,
                          https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-300x300.jpg 300w,
                           https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-768x768.jpg 768w,
                           https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-500x500.jpg 500w
                           , https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-160x160.jpg 160w,
                           https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front.jpg 1000w"
                          sizes="(max-width: 555px) 100vw, 555px"
                          draggable="false"
                        />
                      </Link>
                      {/* {single.images */}
                      {/* ? ( */}
                      {/* <img */}
                      {/* role="presentation" */}
                      {/* alt={single.images[1].alt} */}
                      {/* src={single.images[1].src} */}
                      {/* className="zoomImg" */}
                      {/* style={{ */}
                      {/* position: 'absolute', */}
                      {/* top: '-148.897px', */}
                      {/* left: '-62.9414px', */}
                      {/* opacity: '0', */}
                      {/* width: '1000px', */}
                      {/* height: '1000px', */}
                      {/* border: 'none', */}
                      {/* maxWidth: 'none', */}
                      {/* maxHeight: 'none', */}
                      {/* }} */}
                      {/* /> */}
                      {/* ) */}
                      {/* : 'null' } */}
                    </div>
                    <div
                      data-thumb="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-160x160.jpg"
                      data-thumb-alt=""
                      className="woocommerce-product-gallery__image"
                      style={{ width: '555px', float: 'left', display: 'block' }}
                    >
                      <Link to="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back.jpg">
                        <img
                          width="555"
                          height="555"
                          src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-555x555.jpg"
                          className=""
                          alt=""
                          title="T_7_back.jpg"
                          data-caption=""
                          data-src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back.jpg"
                          data-large_image="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back.jpg"
                          data-large_image_width="1000"
                          data-large_image_height="1000"
                          srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-555x555.jpg 555w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-150x150.jpg 150w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-300x300.jpg 300w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-768x768.jpg 768w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-500x500.jpg 500w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-160x160.jpg 160w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back.jpg 1000w"
                          sizes="(max-width: 555px) 100vw, 555px"
                          draggable="false"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <ol className="flex-control-nav flex-control-thumbs">
                  <li>
                    <img src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_front-160x160.jpg" className="flex-active" draggable="false" />
                  </li>
                  <li>
                    <img src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_7_back-160x160.jpg" draggable="false" />
                  </li>
                </ol>
              </div>

              <div className="summary entry-summary">
                {single.name
                  ? <h1 className="product_title entry-title">{single.name}</h1>
                  : ' '}
                <p className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">AMD</span>

                    {parseFloat(single.price).toFixed(2)}
                  </span>
                </p>
                {single.description
                  ? (
                    <div className="woocommerce-product-details__short-description">
                      {single.description}
                    </div>
                  )
                  : ' '}

                <form className="cart" action="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/" method="post" encType="multipart/form-data">

                  <div className="quantity">
                    <label className="screen-reader-text" htmlFor="quantity_5cf2abf6082f8">{}</label>
                    <input
                      type="number"
                      id="quantity_5cf2abf6082f8"
                      className="input-text qty text"
                      step="1"
                      min="1"
                      max=""
                      name="quantity"
                      value="1"
                      title="Qty"
                      size="4"
                      inputMode="numeric"
                    />
                  </div>

                  <button type="submit" name="add-to-cart" value="26" className="single_add_to_cart_button button alt">Add to cart</button>

                </form>


                <div className="product_meta">


                  <span className="sku_wrapper">
SKU:
                    <span className="sku">{single.sku}</span>
                  </span>


                  <span className="posted_in">
                    {single.slug}
                    <Link to="https://tempwp.orderwebsitenow.com/product-category/clothing/" rel="tag">Clothing</Link>
,
                    <Link to="https://tempwp.orderwebsitenow.com/product-category/clothing/t-shirts/" rel="tag">T-shirts</Link>
                  </span>


                </div>
              </div>


              <div className="woocommerce-tabs wc-tabs-wrapper">
                <ul className="tabs wc-tabs" role="tablist">
                  <li className="description_tab active" id="tab-title-description" role="tab" aria-controls="tab-description">
                    <Link to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#tab-description">Description</Link>
                  </li>
                  <li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                    <Link to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#tab-reviews">Reviews (0)</Link>
                  </li>
                </ul>
                <div
                  className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                  id="tab-description"
                  role="tabpanel"
                  aria-labelledby="tab-title-description"
                  style={{ display: 'block' }}
                >

                  <h2>Description</h2>
                  <p>
                    {single.short_description}
                  </p>
                </div>
                <div
                  className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                  id="tab-reviews"
                  role="tabpanel"
                  aria-labelledby="tab-title-reviews"
                  style={{ display: 'none' }}
                >
                  <div id="reviews" className="woocommerce-Reviews">
                    <div id="comments">
                      <h2 className="woocommerce-Reviews-title">
                      Reviews
                      </h2>

                      <p className="woocommerce-noreviews">There are no reviews yet.</p>
                    </div>

                    <div id="review_form_wrapper">
                      <div id="review_form">
                        <div id="respond" className="comment-respond">
                          <span id="reply-title" className="comment-reply-title">
Be the first to review “Happy Ninja”
                            <small>
                              <a
                                rel="nofollow"
                                id="cancel-comment-reply-link"
                                href="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#respond"
                                style={{ display: 'none' }}
                              >
Cancel reply
                              </a>
                            </small>
                          </span>
                          {' '}
                          <form action="https://tempwp.orderwebsitenow.com/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate="">
                            <p className="comment-notes">
                              <span id="email-notes">Your email address will not be published.</span>
                              {' '}
Required fields are marked
                              {' '}
                              <span className="required">*</span>
                            </p>
                            <div className="comment-form-rating">
                              <p className="stars">
                                {' '}
                                <span>
                                  {' '}
                                  <Link className="star-1" to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#">1</Link>
                                  {' '}
                                  <Link className="star-2" to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#">2</Link>
                                  {' '}
                                  <Link className="star-3" to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#">3</Link>
                                  {' '}
                                  <Link className="star-4" to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#">4</Link>
                                  {' '}
                                  <Link className="star-5" to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/#">5</Link>
                                  {' '}
                                </span>
                                {' '}
                              </p>
                              <select name="rating" id="rating" required="" placeholder="Your rating" style={{ display: 'none' }}>
                                <option value="">Rate…</option>
                                <option value="5">Perfect</option>
                                <option value="4">Good</option>
                                <option value="3">Average</option>
                                <option value="2">Not that bad</option>
                                <option value="1">Very poor</option>
                              </select>
                            </div>
                            <p className="comment-form-comment" />
                            <textarea id="comment" name="comment" cols="45" rows="8" required="" placeholder="Your review *" />
                            <p className="comment-form-author">
                              <input id="author" name="author" type="text" value="" size="30" required="" placeholder="Name *" />
                            </p>
                            <p className="comment-form-email">
                              <input id="email" name="email" type="email" value="" size="30" required="" placeholder="Email *" />
                              <p className="comment-form-cookies-consent">
                                <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" placeholder="Save my name, email, and website in this browser for the next time I comment." />
                              </p>
                              <p className="form-submit" />
                              <input name="submit" type="submit" id="submit" className="submit" value="Submit" />
                              <input type="hidden" name="comment_post_ID" value="26" id="comment_post_ID" />
                              <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                            </p>
                          </form>
                        </div>
                      </div>

                      <div className="clear" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <hr className="divider-w" />
            <div className="container">
              <section className="up-sells upsells products">

                <h2>You may also like…</h2>

                <ul className="products columns-3">


                  <li className="product type-product post-27 status-publish first instock product_cat-clothing product_cat-hoodies has-post-thumbnail shipping-taxable purchasable product-type-simple">
                    <Link to="https://tempwp.orderwebsitenow.com/product/happy-ninja/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                      <div className="prod-img-wrap">
                        <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_front-262x328.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" title="hoodie_4_front.jpg" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_front-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                        <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_back-262x328.jpg" className="attachment-shop_catalog size-shop_catalog" alt="" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_4_back-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                        <div className="product-button-wrap">
                          <div className="add-to-cart-button-wrap">
                            <Link to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/?add-to-cart=27" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="27" data-product_sku="HOODIE-HAPPY-NINJA" aria-label="Add “Happy Ninja” to your cart" rel="nofollow">Add to cart</Link>
                          </div>
                        </div>
                      </div>
                      <h2 className="woocommerce-loop-product__title">Happy Ninja</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">AMD</span>
35.00
                        </span>
                      </span>
                    </Link>
                  </li>


                </ul>

              </section>

            </div>
            <hr className="divider-w" />
            <div className="container" />
            <section className="related products">

              <h2>Related products</h2>

              <ul className="products columns-4">


                <li className="product type-product post-25 status-publish first instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <Link to="https://tempwp.orderwebsitenow.com/product/ninja-silhouette-2/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                    <div className="prod-img-wrap">
                      <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_front-262x328.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" title="T_5_front.jpg" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_front-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                      <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_back-262x328.jpg" className="attachment-shop_catalog size-shop_catalog" alt="" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_5_back-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                      <div className="product-button-wrap">
                        <div className="add-to-cart-button-wrap">
                          <Link to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/?add-to-cart=25" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="25" data-product_sku="T-SHIRT-NINJA-SILHOUETTE" aria-label="Add “Ninja Silhouette” to your cart" rel="nofollow">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <h2 className="woocommerce-loop-product__title">Ninja Silhouette</h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">AMD</span>
20.00
                      </span>
                    </span>
                  </Link>
                </li>


                <li className="product type-product post-21 status-publish instock product_cat-clothing product_cat-hoodies has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <Link to="https://tempwp.orderwebsitenow.com/product/woo-ninja-2/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                    <div className="prod-img-wrap">
                      <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_2_front-262x328.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" title="hoodie_2_front.jpg" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_2_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_2_front-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                      <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_2_back-262x328.jpg" className="attachment-shop_catalog size-shop_catalog" alt="" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_2_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_2_back-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                      <div className="product-button-wrap">
                        <div className="add-to-cart-button-wrap">
                          <Link to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/?add-to-cart=21" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="21" data-product_sku="HOODIE-WOO-NINJA" aria-label="Add “Woo Ninja” to your cart" rel="nofollow">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <h2 className="woocommerce-loop-product__title">Woo Ninja</h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">AMD</span>
35.00
                      </span>
                    </span>
                  </Link>
                </li>


                <li className="product type-product post-24 status-publish instock product_cat-clothing product_cat-hoodies has-post-thumbnail sale shipping-taxable purchasable product-type-variable has-default-attributes">
                  <Link to="https://tempwp.orderwebsitenow.com/product/ship-your-idea-2/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                    <div className="prod-img-wrap">
                      <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_front-262x328.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" title="hoodie_7_front.jpg" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_front-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                      <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_back-262x328.jpg" className="attachment-shop_catalog size-shop_catalog" alt="" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/hoodie_7_back-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                      <div className="product-button-wrap">
                        <div className="add-to-cart-button-wrap">
                          <Link to="https://tempwp.orderwebsitenow.com/product/ship-your-idea-2/" data-quantity="1" className="button product_type_variable add_to_cart_button" data-product_id="24" data-product_sku="HOODIE-SHIP-YOUR-IDEA" aria-label="Select options for “Ship Your Idea”" rel="nofollow">Select options</Link>
                        </div>
                      </div>
                    </div>
                    <h2 className="woocommerce-loop-product__title">Ship Your Idea</h2>
                    <span className="onsale">Sale!</span>

                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">AMD</span>
30.00
                      </span>
                      {' '}
–
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
AMD
                        </span>
35.00
                      </span>
                    </span>
                  </Link>
                </li>


                <li className="product type-product post-22 status-publish last instock product_cat-clothing product_cat-t-shirts has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <Link to="https://tempwp.orderwebsitenow.com/product/premium-quality-2/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                    <div className="prod-img-wrap">
                      <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_front-262x328.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="" title="T_2_front.jpg" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_front-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_front-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                      <img width="262" height="328" src="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_back-262x328.jpg" className="attachment-shop_catalog size-shop_catalog" alt="" srcSet="https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_back-262x328.jpg 262w, https://tempwp.orderwebsitenow.com/wp-content/uploads/2019/05/T_2_back-58x72.jpg 58w" sizes="(max-width: 262px) 100vw, 262px" />
                      <div className="product-button-wrap">
                        <div className="add-to-cart-button-wrap">
                          <Link
                            to="https://tempwp.orderwebsitenow.com/product/happy-ninja-2/?add-to-cart=22"
                            data-quantity="1"
                            className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                            data-product_id="22"
                            data-product_sku="T-SHIRT-PREMIUM-QUALITY"
                            aria-label="Add “Premium Quality” to your cart"
                            rel="nofollow"
                          >
Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <h2 className="woocommerce-loop-product__title">Premium Quality</h2>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">AMD</span>
20.00
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </Wrapper>
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
