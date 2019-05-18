export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS_REQUEST, payload: {},
  };
}
