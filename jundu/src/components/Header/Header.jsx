import "./Header.css";
import { FaShoppingCart } from 'react-icons/fa';
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
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
                <h1>ShopLit</h1>
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
                    <FaShoppingCart size={30} aria-label="Shopping Cart" />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
