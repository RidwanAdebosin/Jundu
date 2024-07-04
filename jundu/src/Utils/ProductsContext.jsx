import { createContext, useContext, useReducer } from "react";

const ProductsContext = createContext();

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'setProducts':
            return action.payload || [];
        case 'addProducts':
        return [...state, action.payload];
        default:
            throw new Error(`Unknown action : ${action.type}`);
    }

};

export const ProductProvider = ({children}) => {
    const[products, dispatch] = useReducer(reducer, initialState);

    return (
        <ProductsContext.Provider value={{products, dispatch}}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);