import React from "react";
import { Link } from "react-router-dom";

const EditAdmin = () => {
  return (
    <div>
      <div className="textBox">
        <h2>Edit Admin</h2>
        <Link to={-1}>
          {" "}
          <p>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default EditAdmin;