import { useState, useEffect } from "react";
import "./Products.css";
import Button from "../../Utils/Button/Button";
import Heart from "../../Utils/Heart";
import StarRating from "../../Utils/StarRating";
import Pagination from "../../Utils/Pagination/Pagination";
import Spinner from "../../Utils/Spinner/Spinner";



const url = "https://fakestoreapi.com/products";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);


  // setting a timeout for the spinner
  setTimeout(() => {
    setLoading(false)
  }, 2000)

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

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
    <main className="card-container">
      {loading ? (
        <Spinner/>
      ) :
      
      
     ( currentProducts.map((item, index) => (
        <div className="single-card" key={index}>
          <div className="img-wrapper">
          <img src={item.image} alt={item.title}
          />
          <Heart/>
          </div>
          <div className="product-content">
          <p>{truncate(item.title, 20)}</p>
          <StarRating/>
          <p>₦{item.price}</p>
          </div>
          <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </div>
     )
    ))}
    </main>
    <Pagination page={page} setPage={setPage} totalProducts={products.length} productsPerPage={productsPerPage}/>

    </>
    
  );
};

export default Product;
