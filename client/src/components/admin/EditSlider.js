import React from "react";
import { Link, useLocation } from "react-router-dom";

const EditSlider = () => {
  const { state } = useLocation();

  function reset() {
    window.location.reload();
  }

  return (
    <div>
      <div className="textBox">
        <h2>Edit Record</h2>
        <Link to={-1}>
          {" "}
          <p>Back</p>
        </Link>
      </div>

      <div className="addUserBody">
        <div className="formInput">
          <p className="h3Space">Recipe</p>
          <input type="text" name="name" placeholder={state.title} />
        </div>
        <div className="formInput">
          <p className="h3Space">Title</p>
          <input type="text" name="name" placeholder={state.title} />
        </div>

        <div className="formInput">
          <p className="h3Space">Image</p>
          <input type="file" name="number" placeholder={state.image} />
        </div>
        <div>
          <Link to={-1}>
            <button
              style={{
                marginRight: "50px",
                backgroundColor: "green",
                border: "none",
                borderRadius: "5px",
                padding: 10,
                color: "#fff",
                width: "100px",
                fontSize: 16,
              }}
            >
              Save
            </button>
          </Link>
          <button
            style={{
              marginRight: "50px",
              backgroundColor: "orange",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
            }}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSlider;
