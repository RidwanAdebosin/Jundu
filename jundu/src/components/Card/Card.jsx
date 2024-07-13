import "../Products/Products.css";
import { ProductContext } from "../../Utils/ProductsContext";
import { useContext } from "react";
import StarRating from "../../Utils/StarRating";
import Heart from "../../Utils/Heart";
import Button from "../../Utils/Button/Button";

const Card = ({item}) => {
    const { cartDispatch} = useContext(ProductContext);
    // const {products} = useContext(ProductContext);
    
    const handleAddToCart = () => {
        cartDispatch({type: "addToCart", payload: item});
      };
     
      const truncate = (str, length) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
      };
    return(
        <div className="single-card" key={item.id}>
              <div className="img-wrapper">
                <img src={item.image} alt={item.title} />
                <Heart className="heart"/>
              </div>
              <div className="product-content">
                <p>{item.name}</p>
                <p>{truncate(item.description, 20)}</p>
                <StarRating />
                <p>₦{item.price}</p>
              </div>
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </div>
    )
};

export default Card;