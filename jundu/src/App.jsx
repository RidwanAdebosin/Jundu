
import { useReducer } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Products/Products";

const initialState = [];

const Reducer = (state, action) => {
  if(action.type === "Add to Cart"){
    return [...state, action.payload]
  }
}
const App = () => {
const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <>
      <Header state={state}/>
      <Product dispatch={dispatch}/>
    </>
  );
};

export default App;
