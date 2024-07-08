
import { useState, useEffect, useRef } from "react";
import Button from "../../Utils/Button/Button";
import "./Categories.css";

const Categories = () => {
    const [showContent, setShowContent] = useState(false);

    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(navRef.current && !navRef.current.contains(event.target)) {
                setShowContent(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    },[navRef]);

    const handleNavLinkClick = () => {
        setShowContent(false);
    };
   
    const handleDropdownMenu= () => {
        setShowContent(!showContent)
    }
    return(
        <section className="categories" ref={navRef}>
        <div className="product-categories" >
        <Button>Building Materials {(!showContent) ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-up"></i>}</Button>
        <Button>Price {(!showContent) ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-up"></i>}</Button>
        <Button>Review {(!showContent) ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-up"></i>}</Button>
        {/* <Button>Color {(!showContent) ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-up"></i>}</Button> */}
        <Button>Material {(!showContent) ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-up"></i>}</Button>
        {/* <Button>Offer {(!showContent) ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-up"></i>}</Button> */}
        <Button>All Filters {(!showContent) ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-up"></i>}</Button>
        </div>
        <div className="dropdown"  aria-label="Toggle menu" >
            <Button onClick={handleDropdownMenu}>Sort by {(!showContent) ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-up"></i>}</Button>
           { showContent && <div className="dropdown-content">
                <span onClick={handleNavLinkClick}>
                    Categories
                </span>
                <span onClick={handleNavLinkClick}>
                    Alphabetical
                </span>
                <span onClick={handleNavLinkClick}>
                    Prices
                </span>
            </div>}
        </div>
        </section>
    )
};

export default Categories;