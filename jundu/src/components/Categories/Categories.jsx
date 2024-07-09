import { useState, useEffect, useRef, useContext } from "react";
import { ProductContext } from "../../Utils/ProductsContext";
import Button from "../../Utils/Button/Button";
import "./Categories.css";

const Categories = () => {
  const [showContent, setShowContent] = useState(false);
  const {products, dispatch} = useContext(ProductContext);

  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowContent(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const handleNavLinkClick = () => {
    setShowContent(false);
  };
  // const handleMaterialsMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  const handleDropdownMenu = () => {
    setShowContent(!showContent);
  };

  const handleShowProductbyCategory = (category, dispatchName) => {
    dispatch({type: dispatchName, payload: {
      category, 
      products
    }})
  };

  return (
    <section className="categories" ref={navRef}>
  
      <div className="dropdown" aria-label="Toggle menu">
        <Button onClick={handleDropdownMenu}>
          Sort by{" "}
          {!showContent ? (
            <i className="fa fa-caret-down"></i>
          ) : (
            <i className="fa fa-caret-up"></i>
          )}
        </Button>
        {showContent && (
          <div className="dropdown-content">
            <span onClick={handleNavLinkClick}> Wooden</span>
            <span onClick={handleNavLinkClick}>Metal</span>
            <span onClick={() => handleShowProductbyCategory("ceramics", "ceramicsFilter")}>Ceramics</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;


{/* <div className="product-categories">
    
<Button>
  Price{" "}
  {!showContent ? (
    <i className="fa fa-caret-down"></i>
  ) : (
    <i className="fa fa-caret-up"></i>
  )}
</Button>
<Button>
  Review{" "}
  {!showContent ? (
    <i className="fa fa-caret-down"></i>
  ) : (
    <i className="fa fa-caret-up"></i>
  )}
</Button>
<Button>
  Material{" "}
  {!showContent ? (
    <i className="fa fa-caret-down"></i>
  ) : (
    <i className="fa fa-caret-up"></i>
  )}
</Button>
<Button>
  All Filters{" "}
  {!showContent ? (
    <i className="fa fa-caret-down"></i>
  ) : (
    <i className="fa fa-caret-up"></i>
  )}
</Button>
</div> */}