import CartItems from "../../components/CartItems/CartItems";
import "./Cart.css";
import { ProductContext } from "../../Utils/ProductsContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(ProductContext);


  // const calculateTotal = () => {
  //   return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  // };

  // const clearCart = () => {
  //   cartItems.forEach((item) =>
  //     dispatch({ type: "removeProduct", payload: item.id })
  //   );
  // };

  return (
    <div className="Cart-Container">
      <div className="Cart-Info">
        <div>Total: ₦{0}</div>
        <div className="CartClear" >Clear Cart</div>
        <div className="CartClear">Pay</div>
        <div>Total Quantity: {0}</div>
      </div>
      <div className="CartHolder">
        {cart.map((e, i) => (
          <CartItems key={e.id} info={e} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
