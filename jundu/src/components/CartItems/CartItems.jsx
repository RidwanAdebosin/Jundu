import "./CartItems.css";
import Button from "../../Utils/Button/Button";
import { useContext, useState } from "react";
import { ProductContext } from "../../Utils/ProductsContext";

const CartItems = ({ products }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(ProductContext);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
  };

  const handleDeleteCartItem = () => {
    dispatch({ type: "removeProduct", payload: products.id });
  };

  return (
    <div className="CartItemContainer">
      <div className="CartItemImage">
        <img src={products.image} alt={products.name} />
      </div>
      <div className="CartDetails">
        <h3>{products.name}</h3>
        <p>{products.description}</p>
        <div className="CartItemsInfo">
          <p>₦{products.price}</p>
          <Button className="CartItemDelete" onClick={handleDeleteCartItem}>
            Delete
          </Button>
          <div className="CartActions">
            <Button onClick={handleDecreaseQuantity}>-</Button>
            <p>{quantity}</p>
            <Button onClick={handleIncreaseQuantity}>+</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
