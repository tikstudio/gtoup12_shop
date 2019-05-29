

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export function addToCat(id, qty = 1) {
  return {
    type: ADD_TO_CART_REQUEST, payload: { id, qty },
  };
}
