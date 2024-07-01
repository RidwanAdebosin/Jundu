import "./Header.css";
import { FaShoppingCart } from 'react-icons/fa';
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";

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
                <h1>Jundu</h1>
            </div>
            <div className="hamburger">
                <Hamburger toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} aria-label="Toggle menu" className="hamburger"/>
            </div>
            <div className={`rightNav ${hamburgerIsOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#register">Register</a>
                <div className="cart">
                    <FaShoppingCart size={30} aria-label="Shopping Cart" />
                </div>
            </div>
        </nav>
    );
};

export default Header;
