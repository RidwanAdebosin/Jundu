import { useState, useEffect } from "react";
import "./Products.css";
import Button from "../Button/Button";
const url = "https://fakestoreapi.com/products";

const Product = ({dispatch}) => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    dispatch({type: 'Add to Cart', payload:product})
  }

  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + '...' : str;
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <main className="card-container">
      {products.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.title}/>
          <div className="product-content">
          <p>{truncate(item.title, 20)}</p>
          <p>₦{item.price}</p>
          </div>
          <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </div>
      ))}
    </main>
  );
};

export default Product;
