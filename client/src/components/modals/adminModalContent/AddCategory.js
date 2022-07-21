import React, { useEffect, useState } from 'react'
import { categories, iconData } from "../../admin/data";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addCategory, createCategory, handleCategoryState, setCategoryError } from '../../../appState/actions/categoryAction';

const AddCategory = ({ onclose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    title,
    slug,
    icon,
    permalink, 
    error 
  } = useSelector((state) => state.category);
  console.log("icotyp", title)
  const [iconType, setIconType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title:title,
      slug:slug,
      icon:iconType,
      permalink:permalink,  
    };
    dispatch(addCategory(payload, onclose, navigate));
    console.log("new cat", payload)
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setCategoryError(""));
    }, 8000);
  }, [error]);


  const handleIconType = (e) => {
    setIconType(e.target.value);
  };

  return (
    <div>
          {" "}
          <div className="d-flex m-3 justify-content-between align-items-center">
            <h5 className="p-3">Add Category</h5>
            <h5 onClick={onclose} style={{ cursor: "pointer" }}>
              {" "}
              <RiCloseFill className="h3 text-danger" />
            </h5>
          </div>
          <div className="row m-3">
            <p className="w-25 h-75 text-end ptag">Icon</p>
            <div className="checkbox grid w-75 h-75 p-1 ">
              {iconData.map((item, index) => (
                <div
                  key={index}
                  className="text-center d-flex align-items-center p-2"
                >
                  <input
                    type="radio"
                    name="icon"
                    onClick={handleIconType}
                    value={item.name}
                    defaultChecked={`iconType === ${item.name}`}
                  />
                  <label htmlFor={item.name}>{item.icon}</label>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Icon</p>
            <div className="grid w-75 h-75 p-1">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="text-center d-flex align-items-center"
                >
                  <input type="radio" />
                  <label className="px-3">{item.icon}</label>
                </div>
              ))}
            </div>
          </div> */}
          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Title</p>
            <input
            onChange={(e) => dispatch(handleCategoryState("title", e.target.value))}
            value={title}
              className="w-75 h-75 p-1 border"
              type="email"
              required
              id="email"
              autoComplete="email"
              autoFocus
              placeholder="title"
            />
          </div>
          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Permlink</p>
            <input
            onChange={(e) => dispatch(handleCategoryState("permalink", e.target.value))}
            value={permalink}
              className="w-75 h-75 p-1 border"
              type="email"
              required
              id="email"
              autoComplete="email"
              autoFocus
              placeholder="Permlink"
            />
          </div>
          <div className="m-3">
            <button
                onClick={handleSubmit}
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

export default AddCategory