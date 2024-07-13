import { createContext, useEffect, useReducer, useState } from "react";
import db from "./ProductsList";
export const ProductContext = createContext(null);

const initialState = db;
const Cart = [];

const cartRed = (state, action) => {
  if (action.type === "addToCart") {
    const check = state.findIndex((e) => e.id === action.payload.id);
    if (check === -1) {
      return [...state, { ...action.payload, QTY: 1 }];
    } else {
      alert("Item already in cart");
      return state;
    }
  } else if (action.type === "increase") {
    return state.map((e) => {
      if (e.id === action.payload.id) {
        e.QTY++;
        return e;
      } else {
        return e;
      }
    });
  } else if (action.type === "decrease") {
    if (action.payload.QTY === 1) {
      return state.filter((e) => e.id !== action.payload.id);
    } else {
      return state.map((e) => {
        if (e.id === action.payload.id) {
          e.QTY--;
          return e;
        } else {
          return e;
        }
      });
    }
  } else if (action.type === "delete") {
    const id = action.payload;
    return state.filter((e) => e.id !== id);
  } else if (action.type === "clear") {
    return [];
  } else {
    alert("error");
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
  const [total, setTotal] = useState(0);
  const [quant, setQuant] = useState(0);

  useEffect(()=> {
    const totalVal = cart.reduce((a, e) => {
      const val = (Number(e.price) * e.QTY) + a
      return val;
    }, 0)
    const totalQuant = cart.reduce((a, e) => {
      const val = e.QTY + a
      return val;
  },0)
  setTotal(totalVal);
  setQuant(totalQuant)
}, [cart]);

  return (
    <ProductContext.Provider value={{ products, dispatch, cart, cartDispatch, total, quant }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
