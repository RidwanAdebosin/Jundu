import CartItems from "../../components/CartItems/CartItems";
import "./Cart.css";
import { ProductContext } from "../../Utils/ProductsContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(ProductContext);


  return (
    <div className="Cart-Container">
      <div className="Cart-Info">
        <div>Total: ₦{0}</div>
        <div className="CartClear" >Clear Cart</div>
        <div className="CartClear">Pay</div>
        <div>Total Quantity: {0}</div>
      </div>
      <div className="CartHolder">
        {cart.map((e) => (
          <CartItems key={e.id} item={e} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
