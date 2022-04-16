import { Link } from "react-router-dom";
import React from "react";

const EditBlog = () => {
  return (
    <div>
      <div className="textBox">
        <h2>Edit Blog</h2>
        <Link to={-1}>
          {" "}
          <p>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default EditBlog;