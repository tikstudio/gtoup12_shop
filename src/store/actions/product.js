export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export function fetchProducts(data) {
  return {
    type: FETCH_PRODUCTS_REQUEST, payload: { data },
  };
}


export const FETCH_SINGLEPRODUCTS_REQUEST = 'FETCH_SINGLEPRODUCTS_REQUEST';
export const FETCH_SINGLEPRODUCTS_SUCCESS = 'FETCH_SINGLEPRODUCTS_SUCCESS';
export const FETCH_SINGLEPRODUCTS_FAIL = 'FETCH_SINGLEPRODUCTS_FAIL';

export function fetchSingleProducts(slug) {
  return {
    type: FETCH_SINGLEPRODUCTS_REQUEST, payload: { slug },
  };
}
