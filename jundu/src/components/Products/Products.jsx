import { useState, useEffect, useContext } from "react";
import "./Products.css";
import Button from "../../Utils/Button/Button";
import Heart from "../../Utils/Heart";
import StarRating from "../../Utils/StarRating";
import Pagination from "../../Utils/Pagination/Pagination";
import Spinner from "../../Utils/Spinner/Spinner";
import { ProductsList } from "../../Utils/ProductsList";
import { ProductContext } from "../../Utils/ProductsContext";

// const url = "https://fakestoreapi.com/products";
// const ProductsList = [
//   {
//     "id": 1,
//     "name": "Product 1",
//     "description": "Description for product 1",
//     "category": "Electronics",
//     "price": "100.00",
//     "image": "https://images.unsplash.com/photo-1580910051073-9c5825c1a2d6"
//   },
//   {
//     "id": 2,
//     "name": "Product 2",
//     "description": "Description for product 2",
//     "category": "Books",
//     "price": "20.00",
//     "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794"
//   },
//   {
//     "id": 3,
//     "name": "Product 3",
//     "description": "Description for product 3",
//     "category": "Fashion",
//     "price": "45.00",
//     "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
//   },
//   {
//     "id": 4,
//     "name": "Product 4",
//     "description": "Description for product 4",
//     "category": "Home Appliances",
//     "price": "120.00",
//     "image": "https://images.unsplash.com/photo-1567016542213-06c16732b8d3"
//   },
//   {
//     "id": 5,
//     "name": "Product 5",
//     "description": "Description for product 5",
//     "category": "Toys",
//     "price": "15.00",
//     "image": "https://images.unsplash.com/photo-1511804914-60cb3a2214f8"
//   },
//   {
//     "id": 6,
//     "name": "Product 6",
//     "description": "Description for product 6",
//     "category": "Furniture",
//     "price": "200.00",
//     "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
//   },
//   {
//     "id": 7,
//     "name": "Product 7",
//     "description": "Description for product 7",
//     "category": "Sports",
//     "price": "30.00",
//     "image": "https://images.unsplash.com/photo-1526401281628-45c51e45e1a1"
//   },
//   {
//     "id": 8,
//     "name": "Product 8",
//     "description": "Description for product 8",
//     "category": "Beauty",
//     "price": "25.00",
//     "image": "https://images.unsplash.com/photo-1583132336238-8a15356f2f71"
//   },
//   {
//     "id": 9,
//     "name": "Product 9",
//     "description": "Description for product 9",
//     "category": "Jewelry",
//     "price": "150.00",
//     "image": "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
//   },
//   {
//     "id": 10,
//     "name": "Product 10",
//     "description": "Description for product 10",
//     "category": "Groceries",
//     "price": "10.00",
//     "image": "https://images.unsplash.com/photo-1534081333815-ae5019106622"
//   }
// ]

const Product = () => {
  // dispatch({type: "addProduct", payload: inputValues})
  const {products} = useContext(ProductContext);
  const [productsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // setting a timeout for the spinner
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  const handleAddToCart = (products) => {
    dispatch({type: "addToCart", payload: products});
    console.log(products)
  };

  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <main className="card-container">
        {loading ? (
          <Spinner /> 
        ) : (
          currentProducts.map((item, index) => (
            <div className="single-card" key={index}>
              <div className="img-wrapper">
                <img src={item.image} alt={item.title} />
                <Heart />
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
      </main>
      <Pagination
        page={page}
        setPage={setPage}
        totalProducts={products.length}
        productsPerPage={productsPerPage}
      />
    </>
  );
};

export default Product;
