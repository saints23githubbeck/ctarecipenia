import React, { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addPage,
  handlePageState,
  setPageError,
} from "../../../appState/actions/pageAction";

const AddPage = ({ onclose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { content, title, permalink, error, loading } = useSelector(
    (state) => state.page
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      permalink: permalink,
      content: content,
    };
    dispatch(addPage(payload, onclose, navigate));
    console.log("new input", payload);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setPageError(""));
    }, 8000);
  }, [error]);

  return (
    <div>
      <div className="d-flex m-3 justify-content-between align-items-center">
        <h5 className="p-3">Add Page</h5>
        <h5 onClick={onclose} style={{ cursor: "pointer" }}>
          {" "}
          <RiCloseFill className="h3 text-danger" />
        </h5>
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
          onChange={(e) => dispatch(handlePageState("title", e.target.value))}
          value={title}
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder={title}
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Permlink</p>
        <input
          onChange={(e) =>
            dispatch(handlePageState("permalink", e.target.value))
          }
          value={permalink}
          className="w-75 h-75 p-1 border"
          type="tel"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder={permalink}
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Content</p>
        <textarea
          onChange={(e) => dispatch(handlePageState("content", e.target.value))}
          value={content}
          className="w-75 h-75 p-1 border"
          type="text"
          rows={5}
          id="name"
          autoComplete="name"
          placeholder={content}
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
  );
};

export default AddPage;
