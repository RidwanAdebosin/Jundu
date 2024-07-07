import { createContext, useReducer } from "react";

export const ProductContext = createContext(null);

const initialState = [];

const reducer = (state, action) => {
    if(action.type === "addProduct"){
        return [...state, {...action.payload,id: state.length}];
    } else {
        throw new Error()
    }
   
    // if(action.type)
//   switch (action.type) {
//     case "setProducts":
//       return action.payload || [];
//     case "addProduct": {
//         const updatedState = [...state, action.payload];
//         localStorage.setItem("products", JSON.stringify(updatedState));
//         return updatedState;
//     }
    // case "removeProduct": {
    //     const newState = state.filter((product) => product.id !== action.payload);
    //     localStorage.setItem("products", JSON.stringify(newState));
    //     return newState;
    // }
    // case "addToCart" : {
    //     const newState = state.map(product => 
    //         product.id === action.payload.id ? {...product, inCart: true}
    //         : product
    //     )
    //     localStorage.setItem("products", JSON.stringify(newState));
    //   return newState;
    // }
    // default:
    //   throw new Error(`Unknown action: ${action.type}`);
  
};

 const ContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
