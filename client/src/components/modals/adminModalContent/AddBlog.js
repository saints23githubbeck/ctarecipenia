import React from 'react'
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const AddBlog = ({ onclose }) => {
  return (
    <div>
          <div className="d-flex m-3 justify-content-between align-items-center">
            <h5 className="p-3">Add Blog</h5>
            <h5 onClick={onclose} style={{ cursor: "pointer" }}>
              {" "}
              <RiCloseFill className="h3 text-danger" />
            </h5>
          </div>

          <div className="d-flex  align-items-center w-80 m-3">
            <div className="w-50 row m-1">
              <p className="w-25 h-75 text-end ptag px-4">Prepare Time</p>
              <input
                className="w-75 h-75 p-1 border"
                type="text"
                required
                id="name"
                autoComplete="name"
                autoFocus
                placeholder="prepareTime"
              />
            </div>
            <div className="w-50 row m-1">
              <p className="w-25 h-75 text-end ptag px-4">Cooking Time</p>
              <input
                className="w-75 h-75 p-1 border"
                type="text"
                required
                id="name"
                autoComplete="name"
                autoFocus
                placeholder="cookingTime"
              />
            </div>
          </div>

          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Title</p>
            <input
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder="title"
            />
          </div>

          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Permlink</p>
            <input
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder="permlink"
            />
          </div>

          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Short Description</p>
            <textarea
              className="w-75 h-75 p-1 border"
              type="text"
              rows={5}
              id="name"
              autoComplete="name"
              placeholder="shortDesc"
            />
          </div>

          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Description</p>
            <textarea
              className="w-75 h-75 p-1 border"
              type="text"
              rows={10}
              id="name"
              autoComplete="name"
              placeholder="desc"
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
              placeholder="image"
            />
            <img
              className="w-25 h-75 p-1"
              src=""
              alt="image"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
            />
          </div>

          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Meta Description</p>
            <input
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder="metaDesc"
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

export default AddBlog