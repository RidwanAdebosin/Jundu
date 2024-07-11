import { createContext, useReducer } from "react";

export const ProductContext = createContext(null);

const initialState = [];
const Cart = [];

const cartRed = (state, action) => {
  if (action.type === "addToCart") {
    const check = state.findIndex((e) =>e.id === action.payload.id)
    if(check === -1){
      return [...state, {...action.payload, QTY: 1 }];
    }
  } else {
    alert("Item already in cart");
    return state;
  }
};

const reducer = (state, action) => {
  const { category, products } = action.payload;
  if (action.type === "addProduct") {
    return [...state, { ...action.payload, id: state.length }];
  } else if (action.type === "ceramicsFilter") {
    const filteredCeramics = products.filter(
      (product) => product.category === category
    );
    // console.log(filteredCeramics)
    return filteredCeramics;
  } else if (action.type === "woodenFilter") {
    const filteredWooden = products.filter(
      (product) => product.category === category
    );
    // console.log(filteredWooden);
    return filteredWooden;
  } else if (action.type === "metalsFilter") {
    const filteredMetals = products.filter(
      (product) => product.category === category
    );
    // console.log(filteredMetals)
    return filteredMetals;
  }
};

const ContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);
  const [cart, cartDispatch] = useReducer(cartRed, Cart);

  return (
    <ProductContext.Provider value={{ products, dispatch, cart, cartDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
