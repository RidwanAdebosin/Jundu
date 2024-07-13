import "./Header.css";
import { FaShoppingCart } from 'react-icons/fa';
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../Utils/ProductsContext";


const Header = () => {
    const { cart } = useContext(ProductContext);
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(navRef.current && !navRef.current.contains(event.target)) {
                setHamburgerIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    },[navRef]);

    const handleNavLinkClick = () => {
        setHamburgerIsOpen(false);
    };
    
    return (
        <nav className="header" ref={navRef}>
            <div className="leftNav">
                <NavLink to="/" className="logo-h1">
                <h1>BuildMart</h1>
                </NavLink>
            </div>
            <div className="hamburger">
                <Hamburger toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} aria-label="Toggle menu" className="hamburger"/>
            </div>
            <div className={`rightNav ${hamburgerIsOpen ? 'open' : ''}`}>
                <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
                <NavLink to="/post" onClick={handleNavLinkClick}>Post</NavLink>
                <NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
                <NavLink to="/register" onClick={handleNavLinkClick}>Register</NavLink>
                <div className="cart" onClick={handleNavLinkClick}>
                    <NavLink to="/cart">
                    <div className="cartNumber">{cart.length}</div>
                    <FaShoppingCart size={30} aria-label="Shopping Cart" />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
