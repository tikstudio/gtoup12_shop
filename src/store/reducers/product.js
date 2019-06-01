import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_SINGLEPRODUCTS_REQUEST,
  FETCH_SINGLEPRODUCTS_FAIL,
  FETCH_SINGLEPRODUCTS_SUCCESS,
} from '../actions/product';

const initialState = {
  products: [],
  single: {},
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


    case FETCH_SINGLEPRODUCTS_REQUEST: {
      return { ...state, single: initialState.single };
    }
    case FETCH_SINGLEPRODUCTS_SUCCESS: {
      return { ...state, single: action.payload.data };
    }
    case FETCH_SINGLEPRODUCTS_FAIL: {
      return { ...state, single: initialState.single };
    }

    default: {
      return state;
    }
  }
}
