import "./Header.css";
import { FaShoppingCart } from 'react-icons/fa';
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


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
    },[navRef])
    
    return (
        <nav className="header" ref={navRef}>
            <div className="leftNav">
                <h1>ShopLit</h1>
            </div>
            <div className="hamburger">
                <Hamburger toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} aria-label="Toggle menu" className="hamburger"/>
            </div>
           
            <div className={`rightNav ${hamburgerIsOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/register">Register</Link>
                <div className="cart">
                    <FaShoppingCart size={30} aria-label="Shopping Cart" />
                </div>
            </div>
        </nav>
    );
};

export default Header;
