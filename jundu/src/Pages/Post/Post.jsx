import "./Post.css";
import Button from "../../Utils/Button/Button";
import { useProducts } from "../../Utils/ProductsContext";
import { useState } from "react";

const placeholder ="https://www.trschools.com/templates/imgs/default_placeholder.png"
const url = "https://fakestoreapi.com/products";

// const reducer = (state, action) => {
//   if (action.type === "addProduct") {
//     localStorage.setItem(
//       "products",
//       JSON.stringify([...state, { ...action.payload }])
//     );
//     return [...state, { ...action.payload }];
//   } else {
//     throw new Error();
//   }
// };

const addProductToAPI = async(product) => {
  try {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        'Content-Type' : "application/json",
      },
      body: JSON.stringify(product),
    });
    if(!response.ok) {
      throw new Error('Something went wrong while adding the product');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }

};

const Post = () => {
  const {dispatch} = useProducts();
  const [inputValues, setInputValues] = useState({});
  const [displayImage, setDisplayImage] = useState(placeholder);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setInputValues((prev) => {
      return { ...prev, image: save };
    });
    setDisplayImage(save);
  };

  const addProduct = async () => {
    try {
      const newProduct = await addProductToAPI(inputValues);
      dispatch({ type: "addProducts", payload: newProduct });
      console.log(newProduct);
      setInputValues({});
      setDisplayImage(placeholder);
    } catch(error){
      console.error('Failed to add product:', error);
    }
    // initialState("")
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
            onClick={handleUploadImage}
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
