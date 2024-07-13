import CartItems from "../../components/CartItems/CartItems";
import "./Cart.css";
import { ProductContext } from "../../Utils/ProductsContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, cartDispatch, total, quant } = useContext(ProductContext);
// console.log(products)

  return (
    <div className="Cart-Container">
      <div className="Cart-Info">
        <div>Total: ₦{total}</div>
        <div className="CartClear" onClick={(() => cartDispatch({type: "clear"}))} style={{cursor: "pointer"}}>Clear Cart</div>
        <div className="CartClear" style={{cursor: "pointer"}}>Pay</div>
        <div>Total Items: {cart.length}</div>
        <div>Total Quantity: {quant}</div>
      </div>
      <div className="CartHolder">
        {cart.map((e, i) => (
          <CartItems key={e.id} item={e} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
