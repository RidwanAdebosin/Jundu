import "./CartItems.css";
import Button from "../../Utils/Button/Button";
import { useState } from "react";
import { useProducts } from "../../Utils/ProductsContext";

const CartItems = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useProducts();

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
    dispatch({ type: "removeProduct", payload: product.id });
  };

  return (
    <div className="CartItemContainer">
      <div className="CartItemImage">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="CartDetails">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="CartItemsInfo">
          <p>₦{product.price}</p>
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
