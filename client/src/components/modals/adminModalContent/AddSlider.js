import React from 'react'
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const AddSlider = ({ onclose }) => {
  return (
    <div>
    <div className="d-flex m-3 justify-content-between align-items-center ">
      <h5 className="p-3">Add Slider</h5>
      <h5 onClick={onclose} style={{ cursor: "pointer" }}>
        {" "}
        <RiCloseFill className="h3 text-danger" />
      </h5>
    </div>

    <div className="row  m-3">
      <p className="w-25 h-75 text-end ptag">Recipe</p>
      <input
        className="w-75 h-75 p-1 border"
        type="email"
        required
        id="email"
        autoComplete="email"
        autoFocus
        placeholder="recipe"
      />
    </div>

    <div className="row  m-3">
      <p className="w-25 h-75 text-end ptag">Title</p>
      <input
        className="w-75 h-75 p-1 border"
        type="tel"
        required
        id="phone"
        autoComplete="number"
        autoFocus
        placeholder="title"
      />
    </div>

    <div className="row  m-3">
      <p className="w-25 h-75 text-end ptag">Image</p>
      <input
        className="w-50 h-75 p-1 border"
        type="file"
        required
        id="phone"
        autoComplete="number"
        autoFocus
        placeholder="upload picture"
      />
      <img
        className="w-25 h-75 p-1"
        src={""}
        alt={""}
        style={{ width: "30px", height: "30px", borderRadius: "10px" }}
      />
    </div>
    <div className="m-3">
      <button
        style={{
          marginRight: "50px",
          backgroundColor: "blue",
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

      <button
        onClick={onclose}
        style={{
          marginRight: "50px",
          backgroundColor: "Red",
          border: "none",
          borderRadius: "5px",
          padding: 10,
          color: "#fff",
          width: "100px",
          fontSize: 16,
          marginBottom: "40px",
        }}
      >
        Cancel
      </button>
    </div>
  </div>

  )
}

export default AddSlider