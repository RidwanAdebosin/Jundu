import { useState, useEffect } from "react";
import "./Products.css";
import Card from "../Card/Card";
import Pagination from "../../Utils/Pagination/Pagination";
import Spinner from "../../Utils/Spinner/Spinner";
import db from "../../Utils/ProductsList";
// import { ProductContext } from "../../Utils/ProductsContext";

const Product = () => {
  // const {products} = useContext(ProductContext);
  const [productsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // setting a timeout for the spinner
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // const indexOfLastProduct = page * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = products.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );
  let products = db;
  return (
    <>
      <main className="card-container">
        {loading ? (
          <Spinner />
        ) : (
          products.map((e) => <Card item={e} key={e.id} />)
        )}
      </main>
      {products.length === 0 ? (
        " "
      ) : (
        <Pagination
          page={page}
          setPage={setPage}
          totalProducts={products.length}
          productsPerPage={productsPerPage}
        />
      )}
    </>
  );
};

export default Product;
