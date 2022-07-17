import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import {
  handleBlogState,
  setBlogError,
  updateBlogAdmin,
} from "../../appState/actions/blogAction";
import { useDispatch, useSelector } from "react-redux";

const EditBlog = () => {
  const { state } = useLocation();
  console.log("first", state);
  const dispatch = useDispatch();
  const {
    _id,
    slug,
    postedBy,
    title,
    permLink,
    prepareTime,
    cookTime,
    shortDesc,
    description,
    metaDescription,
    image,
    error,
    loading,
  } = useSelector((state) => state.blog);
  const target = useRef(null);

  const [selectImage, setSelectImage] = useState(image);

  const handleSubmit = () => {
    const payload = {
      _id: _id,
      slug: slug,
      postedBy: postedBy,
      title: title,
      image: selectImage,
      description: description,
      shortDesc: shortDesc,
      permLink: permLink,
      metaDescription: metaDescription,
      prepareTime: prepareTime,
      cookTime: cookTime,
    };
    dispatch(updateBlogAdmin(payload));
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(setBlogError(""));
    }, 4000);
  }, [error]);

  useEffect(() => {
    if (state !== null) {
      Object.keys(state).forEach((field) => {
        dispatch(handleBlogState(`${field}`, state[field]));
      });
    }
  }, [state]);

  const handleFile = (e) => {
    const uploaded = e.target.files[0];

    const fileToBase64 = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
    };

    let base64 = "";
    fileToBase64(uploaded, (err, result) => {
      if (result) {
        const base64String = result.split(",");
        base64 = base64String[1];
      }
      setSelectImage(base64);
    });
  };

  function reset() {
    window.location.reload();
  }
  return (
    <div>
      <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Edit Blog</h5>
        <Link to={-1}>
          <h6>
            <IoMdArrowDropleft /> Back
          </h6>
        </Link>
      </div>

      <hr className="m-3" />

      <div className="d-flex  align-items-center w-80 m-3">
        <div className="w-50 row m-1">
          <p className="w-25 h-75 text-end ptag px-4">Prepare Time</p>
          <input
            onChange={(e) =>
              dispatch(handleBlogState("prepareTime", e.target.value))
            }
            value={prepareTime}
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder={state.prepareTime}
          />
        </div>
        <div className="w-50 row m-1">
          <p className="w-25 h-75 text-end ptag px-4">Cooking Time</p>
          <input
            onChange={(e) =>
              dispatch(handleBlogState("cookTime", e.target.value))
            }
            value={cookTime}
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder={state.cookTime}
          />
        </div>
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
          onChange={(e) => dispatch(handleBlogState("title", e.target.value))}
          value={title}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.title}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Permlink</p>
        <input
          onChange={(e) =>
            dispatch(handleBlogState("permLink", e.target.value))
          }
          value={permLink}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.permLink}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Short Description</p>
        <textarea
          onChange={(e) =>
            dispatch(handleBlogState("shortDesc", e.target.value))
          }
          value={shortDesc}
          className="w-75 h-75 p-1 border"
          type="text"
          rows={5}
          id="name"
          autoComplete="name"
          placeholder={state.shortDesc}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea
          onChange={(e) =>
            dispatch(handleBlogState("description", e.target.value))
          }
          value={description}
          className="w-75 h-75 p-1 border"
          type="text"
          rows={10}
          id="name"
          autoComplete="name"
          placeholder={state.description}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Image</p>
        <div className="w-75 h-75 p-1 flex">
          <div className="w-75 h-75 p-1">
            <input
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              ref={target}
              onChange={(e) => handleFile(e)}
            />
            <label
              className="w-50 h-75 p-1 border"
              style={{
                backgroundColor: "#fda47a",
                color: "white",
                height: "30px",
                padding: "0 30px",
                fontWeight: "700",
                lineHeight: "45px",
                cursor: "pointer",
              }}
              onClick={() => target.current.click()}
              htmlFor="file"
            >
              UPLOAD IMAGE
            </label>
          </div>
          <div className="w-25 h-75 p-1">
            {selectImage !== null && (
              <img
                src={`data:image/*;base64,${state.image}`}
                alt={state.postedBy}
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              />
            )}
          </div>
        </div>
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Meta Description</p>
        <input
          onChange={(e) =>
            dispatch(handleBlogState("metaDescription", e.target.value))
          }
          value={metaDescription}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.metaDescription}
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
            {loading ? "Editing Recipe ..." : "Save"}
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

export default EditBlog;
