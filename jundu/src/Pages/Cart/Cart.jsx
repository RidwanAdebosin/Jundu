import CartItems from "../../components/CartItems/CartItems";
import "./Cart.css";
import { useProducts } from "../../Utils/ProductsContext";

const Cart = () => {
  const { products, dispatch } = useProducts();

  const cartItems = products.filter((product) => product.inCart);

  console.log("Cart Items:", cartItems)

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const clearCart = () => {
    cartItems.forEach((item) =>
      dispatch({ type: "removeProduct", payload: item.id })
    );
  };

  return (
    <div className="Cart-Container">
      <div className="Cart-Info">
        <div>Total: ₦{calculateTotal()}</div>
        <div className="CartClear" onClick={clearCart}>Clear Cart</div>
        <div className="CartClear">Pay</div>
        <div>Total Quantity: {cartItems.length}</div>
      </div>
      <div className="CartHolder">
        {cartItems.map((item) => (
          <CartItems key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
