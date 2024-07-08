import "./Post.css";
import Button from "../../Utils/Button/Button";
import { ProductContext } from "../../Utils/ProductsContext";
import { useState, useContext } from "react";

const placeholder =
  "https://www.trschools.com/templates/imgs/default_placeholder.png";


const Post = () => {
  const { dispatch } = useContext(ProductContext);
  const [inputValues, setInputValues] = useState({});
  const [displayImage, setDisplayImage] = useState(placeholder);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setInputValues((prev) => ({
      ...prev,
      image: save,
    }));
    setDisplayImage(save);
  };

  const addProduct = (e) => {
    e.preventDefault();
    dispatch({ type: "addProduct", payload: inputValues });
    setInputValues({});
    setDisplayImage(placeholder);
  };

  return (
    <section className="post-product-section">
      <h1>Post your product</h1>
      <div className="post-section">
        <form onSubmit={addProduct}>
          <img src={displayImage} alt="place" className="post-img" />
          <input
            type="file"
            accept="image/jpeg, image/gif, image/png"
            id="image"
            required={true}
            onChange={(e) => handleUploadImage(e)}
          />
          <label className="add-image" htmlFor="image">Add Image</label>
          <label htmlFor="id">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Product Name"
              value={inputValues.name || ""}
              onChange={(e) =>
                setInputValues((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="description">
            <input
              type="text"
              name="description"
              id="description"
              required
              placeholder="Product Description"
              value={inputValues.description || ""}
              onChange={(e) =>
                setInputValues((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </label>
          <label id="category">
            <input
              type="text"
              name="category"
              id="category"
              required
              placeholder="Product Category"
              value={inputValues.category || ""}
              onChange={(e) =>
                setInputValues((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="price">
            <input
              type="text"
              name="price"
              required
              placeholder="Product Price"
              value={inputValues.price || ""}
              onChange={(e) =>
                setInputValues((prev) => ({
                  ...prev,
                  price: e.target.value,
                }))
              }
            />
          </label>
          <Button type="submit">Post</Button>
        </form>
      </div>
    </section>
  );
};

export default Post;
