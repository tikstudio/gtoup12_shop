import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../actions/product';

const initialState = {
  products: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return { state, products: [] };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return { state, products: action.payload.data };
    }
    default: {
      return state;
    }
  }
}
