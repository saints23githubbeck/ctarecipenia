import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAdsState, setAdsError, updateAds } from "../../appState/actions/advertAction";

const EditAdvert = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const {
    _id,
    slug,
    location, title, image, code,
    error,
    loading,
  } = useSelector((state) => state.blog);
  const target = useRef(null);

  const [selectImage, setSelectImage] = useState(image);


  const handleSubmit = () => {
    const payload = {
      _id: _id,
      slug:slug,
      location: location,
      title: title,
      image: selectImage,
      code: code,
    };
    dispatch(updateAds(payload));
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(setAdsError(""));
    }, 4000);
  }, [error]);

  useEffect(() => {
    if (state !== null) {
      Object.keys(state).forEach((field) => {
        dispatch(handleAdsState(`${field}`, state[field]));
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
        <h5 className="p-3">Edit Advert</h5>
        <Link to={-1}>
          <h6>
            <IoMdArrowDropleft /> Back
          </h6>
        </Link>
      </div>

      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Location</p>
        <input
        onChange={(e) =>
          dispatch(handleAdsState("location", e.target.value))
        }
        value={location}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          autoComplete="name"
          autoFocus
          placeholder={state.location}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
         onChange={(e) =>
          dispatch(handleAdsState("title", e.target.value))
        }
        value={title}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          autoComplete="name"
          autoFocus
          placeholder={state.title}
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
              style={{
                backgroundColor: "#fda47a",
                color: "white",
                height: "45px",
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
          <div className="w-50 h-75 p-1">
            {selectImage !== null && (
              <img
                style={{ width: "100%", height: "50%", borderRadius: "10px" }}
                src={`data:image/*;base64,${selectImage}`}
                alt="img"
              />
            )}
          </div>
        </div>
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Code</p>
        <textarea
          onChange={(e) => dispatch(handleAdsState("code", e.target.value))}
          value={code}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          autoComplete="name"
          autoFocus
          placeholder={code}
        />
      </div>


      {/* <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Type</p>
        <div className="w-75 h-75 p-1">
        <div className="">
          <input type="radio" />
          <label>image</label>
        </div>
        <div className="">
          <input type="radio" />
          <label>code</label>
        </div>
        <textarea
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoFocus
          placeholder={state.type}
        />
      </div>
      </div> */}
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

export default EditAdvert;
