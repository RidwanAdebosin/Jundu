const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

const initialState = {};
