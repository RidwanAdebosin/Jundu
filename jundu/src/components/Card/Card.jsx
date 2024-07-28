import "../Products/Products.css";
import StarRating from "../../Utils/StarRating";
import Heart from "../../Utils/Heart";
import Button from "../../Utils/Button/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../Utils/Store/CartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { id, image, name, description, price, size, category } = item;

  const handleAddToCart = () => {
    const newItem = {
      id,
      image,
      name,
      description,
      price,
      size,
      category,
    };
    dispatch(addItem(newItem));
  };

  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="single-card" key={item.id}>
      <div className="img-wrapper">
        <img src={item.image} alt={item.title} />
        <Heart className="heart" />
      </div>
      <div className="product-content">
        <p>{item.name}</p>
        <p>{truncate(item.description, 20)}</p>
        <StarRating />
        <p>₦{item.price}</p>
      </div>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default Card;
