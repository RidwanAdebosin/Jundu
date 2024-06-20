import { useState, useEffect } from "react";
import "./Products.css";
import Button from "../Button/Button";
const url = "https://fakestoreapi.com/products";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <main className="card-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} />
          <p>{item.price}</p>
          <Button>Add to Cart</Button>
        </div>
      ))}
    </main>
  );
};

export default Product;
