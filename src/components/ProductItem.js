import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Link
        to={`/product/${data.id}`}
        className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
      >
        <div className="prod-img-wrap">
          <img
            width="262"
            height="328"
            alt={data.images[0].alt}
            src={data.images[0].src}
            className="attachment-shop_catalog size-shop_catalog wp-post-image"
          />
          {data.images[1] ? (
            <img
              width="262"
              height="328"
              alt={data.images[1].alt}
              src={data.images[1].src}
              className="attachment-shop_catalog size-shop_catalog"
            />
          ) : null}
          <div className="product-button-wrap">
            <div className="add-to-cart-button-wrap">
              <span className="button product_type_simple add_to_cart_button ajax_add_to_cart">
                    Add to cart
              </span>
            </div>
          </div>
        </div>
        <h2 className="woocommerce-loop-product__title">
          {data.name}
        </h2>
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
      </Link>
    );
  }
}

export default ProductItem;
