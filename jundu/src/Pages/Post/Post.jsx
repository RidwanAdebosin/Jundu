import "./Post.css";
import Button from "../../Utils/Button/Button";
import { useProducts } from "../../Utils/ProductsContext";
import { useState } from "react";

const placeholder = "https://www.trschools.com/templates/imgs/default_placeholder.png";

const reducer = (state, action) => {
  if (action.type === "addProduct") {
    const updatedState = [...state, { ...action.payload }];
    localStorage.setItem("products", JSON.stringify(updatedState));
    return updatedState;
  } else {
    throw new Error("Unknown action type");
  }
};

const Post = () => {
  const { dispatch } = useProducts(reducer);
  const [inputValues, setInputValues] = useState({});
  const [displayImage, setDisplayImage] = useState(placeholder);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setInputValues((prev) => ({
      ...prev,
      image: save
    }));
    setDisplayImage(save);
  };

  const addProduct = () => {
    try {
      const newProduct = inputValues;
      dispatch({ type: "addProduct", payload: newProduct });
      console.log("Product added:", newProduct);
      setInputValues({});
      setDisplayImage(placeholder);
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  return (
    <section className="post-product-section">
      <h1>Post your product</h1>
      <div className="post-section">
        <form>
          <img src={displayImage} alt="place" className="post-img" />
          <input
            type="file"
            accept="image/jpeg, image/gif, image/png"
            id="image"
            onChange={handleUploadImage}
          />
          <label htmlFor="image">Add Image</label>

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={inputValues.name || ""}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                name: e.target.value
              }))
            }
          />

          <input
            type="text"
            name="description"
            placeholder="Product Description"
            value={inputValues.description || ""}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                description: e.target.value
              }))
            }
          />

          <input
            type="text"
            name="category"
            placeholder="Product Category"
            value={inputValues.category || ""}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                category: e.target.value
              }))
            }
          />

          <input
            type="text"
            name="price"
            placeholder="Product Price"
            value={inputValues.price || ""}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                price: e.target.value
              }))
            }
          />
        </form>
      </div>
      <Button onClick={addProduct}>Post</Button>
    </section>
  );
};

export default Post;
