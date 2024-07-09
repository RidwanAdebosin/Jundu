import { useState, useEffect, useContext } from "react";
import "./Products.css";
import Button from "../../Utils/Button/Button";
import Heart from "../../Utils/Heart";
import StarRating from "../../Utils/StarRating";
import Pagination from "../../Utils/Pagination/Pagination";
import Spinner from "../../Utils/Spinner/Spinner";
import { ProductContext } from "../../Utils/ProductsContext";


const Product = () => {
  const {products,dispatch} = useContext(ProductContext);
  const [productsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // setting a timeout for the spinner
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  const handleAddToCart = (product) => {
    dispatch({type: "addToCart", payload: product});
    console.log(product)
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

  // const filterCeramicProducts = ()=> {
  //   return products.filter((product) => product.category === "ceramics")
  // }

  // const displayCeramicProducts= () => {
  //   const ceramicProductsList = filterCeramicProducts();
  //   return (
  //     <div className="ceramic-products">
  //       <h3>Ceramic Products</h3>
  //       <ul>
  //         {ceramicProductsList.map((product) => (
  //           <div className="single-card" key={product.id}>
  //           <div className="img-wrapper">
  //             <img src={product.image} alt={product.title} />
  //             <Heart className="heart"/>
  //           </div>
  //           <div className="product-content">
  //             <p>{product.name}</p>
  //             <p>{truncate(product.description, 20)}</p>
  //             <StarRating />
  //             <p>₦{product.price}</p>
  //           </div>
  //           <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
  //         </div>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // }
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
              <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            </div>
          ))
        )}
          {/* {
        displayCeramicProducts()
      } */}
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
