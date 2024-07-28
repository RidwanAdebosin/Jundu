import CartItems from "../../components/CartItems/CartItems";
import "./Cart.css";
import { useSelector } from "react-redux";
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../../Utils/Store/CartSlice";

const Cart = () => {
  // const { cart, cartDispatch, total, quant } = useContext(ProductContext);
  // console.log(products)
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <main className="Cart-Container">
      <header className="Cart-Info">
        <p>Total: ₦{totalCartPrice}</p>
        <p
          className="CartClear"
          onClick={() => cartDispatch({ type: "clear" })}
          style={{ cursor: "pointer" }}
        >
          Clear Cart
        </p>
        <p className="CartClear" style={{ cursor: "pointer" }}>
          Pay
        </p>
        <p>Total Items: {cart.length}</p>
        <p>Total Quantity: {totalCartQuantity}</p>
      </header>
      <section className="CartHolder">
        {cart.map((e) => (
          <CartItems key={e.id} item={e} />
        ))}
      </section>
    </main>
  );
};

export default Cart;
