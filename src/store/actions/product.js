export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export function fetchProducts(data) {
  return {
    type: FETCH_PRODUCTS_REQUEST, payload: { data },
  };
}


export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT';
export const FETCH_SINGLE_SUCCESS = 'FETCH_SINGLE_SUCCESS';
export const FETCH_SINGLE_FAIL = 'FETCH_SINGLE_FAIL';

export function fetchSingleProduct(slug) {
  return {
    type: FETCH_SINGLE_PRODUCT, payload: { slug },
  };
}
