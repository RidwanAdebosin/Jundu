import "./CartItems.css";
import Button from "../../Utils/Button/Button";
import { useContext } from "react";
import { ProductContext } from "../../Utils/ProductsContext";

const CartItems = ({ item }) => {
  const { cartDispatch } = useContext(ProductContext);

console.log(item)

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
          <Button className="CartItemDelete" onClick={(()=>cartDispatch({type: "delete", payload: item.id}))}>
            Delete
          </Button>
          <div className="CartActions">
            <Button onClick={(() => cartDispatch({type: "decrease", payload:item}))}>-</Button>
            <p>{item.QTY}</p>
            <Button onClick={(()=> cartDispatch({type:"increase", payload: item}))}>+</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
