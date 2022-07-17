import { IoMdArrowDropleft } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePageState,
  setPageError,
  updatePage,
} from "../../appState/actions/pageAction";

const EditPage = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { _id, slug, content, title, permalink, error, loading } = useSelector(
    (state) => state.page
  );

  const handleSubmit = () => {
    const payload = {
      _id: _id,
      slug: slug,
      title: title,
      permalink: permalink,
      content: content,
    };
    dispatch(updatePage(payload));
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(setPageError(""));
    }, 4000);
  }, [error]);

  useEffect(() => {
    if (state !== null) {
      Object.keys(state).forEach((field) => {
        dispatch(handlePageState(`${field}`, state[field]));
      });
    }
  }, [state]);

  function reset() {
    window.location.reload();
  }
  return (
    <div>
      <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Edit Page</h5>
        <Link to={-1}>
          <h6>
            <IoMdArrowDropleft /> Back
          </h6>
        </Link>
      </div>

      <hr className="m-3" />

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
          placeholder={state.title}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Permalink</p>
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
          placeholder={state.permalink}
        />
      </div>
      <hr className="m-3" />

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
          placeholder={state.content}
        />
      </div>
      <hr className="m-3" />
      <div className="m-3">
        <Link to={-1}>
          <button
            onClick={handleSubmit}
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

export default EditPage;
