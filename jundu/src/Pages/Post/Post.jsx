import React from "react";
import "./Post.css";
import Button from "../../components/Button/Button";

const Post = () => {
  return (
    <div className="section">
      <h1>Post your product</h1>
      <div className="post-section">
        <form>
          <label>
            Product Image
            <input type="file" name="image"/>
            <div className="image-holder"></div>
          </label>
          <label>
            Product Name
            <input type="text" name="name" />
          </label>
          <label>
            Product Description
            <input type="text" name="description" />
          </label>
          <label>
            Product Category
            <input type="text" name="category" />
          </label>
          <label>
            Product Price
            <input type="text" name="price" />
          </label>
        </form>
      </div>
        <Button>Post</Button>
    </div>
  );
};

export default Post;
