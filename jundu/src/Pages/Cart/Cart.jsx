import CartItems from "../../components/CartItems/CartItems";
import "./Cart.css";
import { ProductContext } from "../../Utils/ProductsContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, cartDispatch, total, quant } = useContext(ProductContext);
// console.log(products)

  return (
    <main className="Cart-Container">
      <header className="Cart-Info">
        <p>Total: ₦{total}</p>
        <p className="CartClear" onClick={(() => cartDispatch({type: "clear"}))} style={{cursor: "pointer"}}>Clear Cart</p>
        <p className="CartClear" style={{cursor: "pointer"}}>Pay</p>
        <p>Total Items: {cart.length}</p>
        <p>Total Quantity: {quant}</p>
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
