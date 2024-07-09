// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Post from "./Pages/Post/Post";
import Home from './Pages/Post/Home';
import CartItems from './Pages/Cart/Cart';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<Post />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

   
  );
};

export default App;
