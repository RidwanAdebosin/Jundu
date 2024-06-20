import "./Header.css";
import { FaShoppingCart } from 'react-icons/fa';


const Header = ({state}) => {
  return (
    <>
      <header>
        <nav className="leftNav">
          <h1>Jundu</h1>
        </nav>
        <nav className="rightNav">
          <a>Login</a>
          <a>Register</a>
          <div className="cart">
            {/* <a>Cart</a> */}
            <FaShoppingCart size={30}/>
            <div className="cart-box">
              <p>
                {state.length}
              </p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
