import React, {useEffect, useRef, useState} from "react";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAds, handleAdsState, setAdsError } from "../../../appState/actions/advertAction";

const AddAdvert = ({ onclose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { location, title, image, code, error, loading } = useSelector(
    (state) => state.advert
  );

  const target = useRef(null);
  const [selectImage, setSelectImage] = useState(image);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      location: location,
      title: title,
      image: selectImage,
      code: code,
    };
    dispatch(addAds(payload, onclose, navigate));
    console.log("new input", payload);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAdsError(""));
    }, 8000);
  }, [error]);

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
  };

  const handleFile = (e) => {
    const uploaded = e.target.files[0];

    let base64 = "";
    fileToBase64(uploaded, (err, result) => {
      if (result) {
        const base64String = result.split(",");
        base64 = base64String[1];
      }
      setSelectImage(base64);
    });
  };

  return (
    <div>
      <div className="d-flex m-3 justify-content-between align-items-center">
        <h5 className="p-3">Add Advert</h5>
        <h5 onClick={onclose} style={{ cursor: "pointer" }}>
          {" "}
          <RiCloseFill className="h3 text-danger" />
        </h5>
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Location</p>
        <input
          onChange={(e) => dispatch(handleAdsState("location", e.target.value))}
          value={location}
          className="w-75 h-75 p-1 border"
          type="test"
          required
          autoComplete="name"
          autoFocus
          placeholder={location}
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
          onChange={(e) => dispatch(handleAdsState("title", e.target.value))}
          value={title}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          autoComplete="name"
          autoFocus
          placeholder={title}
        />
      </div>

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
      <p className="w-25 h-75 text-end ptag">code</p>
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
          placeholder="type"
        />
      </div>
    </div> */}

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

export default AddAdvert;
