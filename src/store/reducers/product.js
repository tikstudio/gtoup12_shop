import { FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../actions/product';

const initialState = {
  products: [],
  page: '1',
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return { ...state, products: initialState.products, page: action.payload.data.page };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return { ...state, products: action.payload.data };
    }
    case FETCH_PRODUCTS_FAIL: {
      return { ...state, products: initialState.products };
    }
    default: {
      return state;
    }
  }
}
