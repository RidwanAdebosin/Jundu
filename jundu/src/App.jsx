
// import { useReducer } from "react";
// import Header from "./components/Header/Header";
// import Product from "./components/Products/Products";
// import Hero from "./components/Hero/Hero";

// const initialState = [];

// const Reducer = (state, action) => {
//   if(action.type === "Add to Cart"){
//     return [...state, action.payload]
//   }
// }
// const App = () => {
// const [state, dispatch] = useReducer(Reducer, initialState)
//   return (
//     <>
//       <Header state={state}/>
//       <Hero/>
//       <Product dispatch={dispatch}/>
//     </>
//   );
// };

// export default App;

import { MainRoutes } from "./Routes/MainRoutes";
import {RouterProvider} from 'react-router-dom'
