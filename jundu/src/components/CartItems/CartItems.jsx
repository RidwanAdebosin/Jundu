import "./CartItems.css";
import Button from "../../Utils/Button/Button";
import { useContext } from "react";
import { ProductContext } from "../../Utils/ProductsContext";

const CartItems = ({ item }) => {
  const { cartDispatch } = useContext(ProductContext);



  // const handleDeleteCartItem = () => {
  //   dispatch({ type: "removeProduct", payload: products.id });
  // };

  return (
    <div className="CartItemContainer">
      <div className="CartItemImage">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="CartDetails">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="CartItemsInfo">
          <p>₦{item.price}</p>
          <Button className="CartItemDelete">
            Delete
          </Button>
          <div className="CartActions">
            <Button>-</Button>
            <p>{item.QTY}</p>
            <Button>+</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
