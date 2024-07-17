// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Post from "./Pages/Post/Post";
import Home from './Pages/Post/Home';
import CartItems from './Pages/Cart/Cart';
import "../src/App.css";
import Register from './Pages/Register/Register';
import LogIn from './Pages/LogIn/LogIn';
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<Post />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>

   
  );
};

export default App;
