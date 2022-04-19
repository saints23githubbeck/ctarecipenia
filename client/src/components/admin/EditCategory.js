import { IoMdArrowDropleft } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { categories } from "./data";

const EditCategory = () => {
  const state   = useLocation(" ");

  function reset() {
    window.location.reload();
  }
  return (
    <div>
      <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Edit Category</h5>
        <Link to={-1}>
          <h6>
            <IoMdArrowDropleft /> Back
          </h6>
        </Link>
      </div>

      <hr className="m-3" />
      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Icon</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr, 1fr, 1fr, 1fr, 1fr, 1fr,",
          }}
          className="grid w-75 h-75 p-1"
        >
          {categories.map((item, index) => (
            <div key={index} className="text-center d-flex align-items-center">
              <input type="radio"  />
              <label className="px-3">{item.icon}</label>
            </div>
          ))}
        </div>
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder={state.name}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Permlink</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder={state.permlink}
        />
      </div>
      <hr className="m-3" />

      <div className="m-3">
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
              marginBottom: "40px",
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
            marginBottom: "40px",
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default EditCategory;
