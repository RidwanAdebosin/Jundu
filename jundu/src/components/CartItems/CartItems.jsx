import "./CartItems.css";
import { useContext } from "react";
import { ProductContext } from "../../Utils/ProductsContext";


const CartItems = ({ item }) => {
  const { cartDispatch } = useContext(ProductContext);



  return (
    <div className="CartItemContainer">
      <div className="CartItemImage">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="CartDetails">
        <h3 className="CartDetailsName">{item.name}</h3>
        <span>{item.size}</span>
        <div className="CartItemsInfo">
          <div className="CartActions">
            <span onClick={(() => cartDispatch({type: "decrease", payload:item}))}>-</span>
            <p> Qty : {item.QTY}</p>
            <span onClick={(()=> cartDispatch({type:"increase", payload: item}))}>+</span>
          </div>
          <p>₦{item.price}</p>
        </div>
      </div>
        <div className="cancelButton">
        <span className="CartItemDelete" onClick={(()=>cartDispatch({type: "delete", payload: item.id}))}>
        &times; 
          </span>
        </div>
    </div>
  );
};

export default CartItems;
