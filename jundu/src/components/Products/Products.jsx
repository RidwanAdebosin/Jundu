import { useState, useEffect } from "react";
import "./Products.css";

import Button from "../Button/Button";
import Heart from "../../Utils/Heart/Heart";
import StarRating from "../../Utils/StarRating";



const url = "https://fakestoreapi.com/products";

const Product = () => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    
  }

  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + '...' : str;
  }

  //fetching the products API
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <main className="card-container">
      {products.map((item, index) => (
        <div className="single-card" key={index}>
          <div className="img-wrapper">
          <Heart/>
          <img src={item.image} alt={item.title}/>
          </div>
          <div className="product-content">
          <p>{truncate(item.title, 20)}</p>
          <StarRating/>
          <p>₦{item.price}</p>
          </div>
          <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </div>
      ))}
    </main>
  );
};

export default Product;
