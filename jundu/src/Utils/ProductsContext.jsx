import { createContext, useContext, useReducer } from "react";

const ProductsContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "setProducts":
      return action.payload || [];
    case "addProduct": {
        const updatedState = [...state, action.payload];
        localStorage.setItem("products", JSON.stringify(updatedState));
        return updatedState;
    }
    case "removeProduct": {
        const newState = state.filter((product) => product.id !== action.payload);
        localStorage.setItem("products", JSON.stringify(newState));
        return newState;
    }
    case "addToCart" : {
        const newState = state.map(product => 
            product.id === action.payload.id ? {...product, inCart: true}
            : product
        )
        localStorage.setItem("products", JSON.stringify(newState));
      return newState;
    }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
