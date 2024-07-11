import { useState, useEffect, useContext } from "react";
import "./Products.css";
import Button from "../../Utils/Button/Button";
import Heart from "../../Utils/Heart";
import StarRating from "../../Utils/StarRating";
import Pagination from "../../Utils/Pagination/Pagination";
import Spinner from "../../Utils/Spinner/Spinner";
import { ProductContext } from "../../Utils/ProductsContext";


const Product = ({item}) => {
  const {products, cartDispatch} = useContext(ProductContext);
  const [productsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // setting a timeout for the spinner
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  const handleAddToCart = () => {
    cartDispatch({type: "addToCart", payload: item});
    
  };
 
  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  // const indexOfLastProduct = page * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = products.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );


  return (
    <>
      <main className="card-container">
        {loading ? (
          <Spinner /> 
        ) : (
          products.map((item, index) => (
            <div className="single-card" key={index}>
              <div className="img-wrapper">
                <img src={item.image} alt={item.title} />
                <Heart className="heart"/>
              </div>
              <div className="product-content">
                <p>{item.name}</p>
                <p>{truncate(item.description, 20)}</p>
                <StarRating />
                <p>₦{item.price}</p>
              </div>
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          ))
        )}
      </main>
      {
        products.length === 0 ? " " : (
          <Pagination
            page={page}
            setPage={setPage}
            totalProducts={products.length}
            productsPerPage={productsPerPage}
          />
        )
      }
    </>
  );
};

export default Product;
