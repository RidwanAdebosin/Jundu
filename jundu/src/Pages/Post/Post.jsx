import "./Post.css";
import Button from "../../Utils/Button/Button";
import { useReducer, useState } from "react";

const initialState = [] || JSON.parse(localStorage.getItem("products"));
const placeholder ="https://www.trschools.com/templates/imgs/default_placeholder.png"


const reducer = (state, action) => {
  if (action.type === "addProduct") {
    localStorage.setItem(
      "products",
      JSON.stringify([...state, { ...action.payload }])
    );
    return [...state, { ...action.payload }];
  } else {
    throw new Error();
  }
};

const Post = () => {
  const [products, dispatch] = useReducer(reducer, initialState);
  const [inputValues, setInputValues] = useState({});
  const [displayImage, setDisplayImage] = useState(placeholder);

  const HandleUploadImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setInputValues((prev) => {
      return { ...prev, image: save };
    });
    setDisplayImage(save);
  };

  const addProduct = () => {
    console.log(products);
    dispatch({ type: "addProduct", payload: inputValues });
    products("");
  };

  return (
    <section className="post-product-section">
      <h1>Post your product</h1>
      <div className="post-section">
        <form>
          <img
            src={displayImage} alt="place" className="post-img"
          />
          <input
            type="file"
            accept="image/jpeg, image/gif,image/x-png"
            id="image"
            onClick={HandleUploadImage}
          />
          <label htmlFor="image">Add Image</label>
          
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={(e) =>
              setInputValues((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
    
          <input
            type="text"
            name="description"
            placeholder="Product Description"
            onChange={(e) =>
              setInputValues((prev) => {
                return { ...prev, description: e.target.value };
              })
            }
          />
          
          <input
            type="text"
            name="category"
            placeholder="Product Category"
            onChange={(e) =>
              setInputValues((prev) => {
                return { ...prev, category: e.target.value };
              })
            }
          />
          
          <input
            type="text"
            name="price"
            placeholder="Product Price"
            onChange={(e) =>
              setInputValues((prev) => {
                return { ...prev, price: e.target.value };
              })
            }
          />
        </form>
      </div>
      <Button onClick={addProduct}>Post</Button>
    </section>
  );
};

export default Post;
