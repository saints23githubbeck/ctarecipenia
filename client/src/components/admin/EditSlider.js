import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { handleSliderState, setSliderError, updateSlider } from "../../appState/actions/sliderAction";

const EditSlider = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const {
    _id,
    slug,
    recipe,
    title,
    image,
    error,
    loading,
  } = useSelector((state) => state.slider);
  const target = useRef(null);

  const [selectImage, setSelectImage] = useState(image);

  const handleSubmit = () => {
    const payload = {
    "_id":_id,
    "slug":slug,
    "recipe":recipe,
    "title":title,
    "image":selectImage,
    };
    dispatch(updateSlider(payload));
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(setSliderError(""));
    }, 4000);
  }, [error]);

  useEffect(() => {
    if (state !== null) {
      Object.keys(state).forEach((field) => {
        dispatch(handleSliderState(`${field}`, state[field]));
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
        <h5 className="p-3">Slider</h5>
        <Link to={-1}>
          <h6>
            <IoMdArrowDropleft /> Back
          </h6>
        </Link>
      </div>

      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Recipe</p>
        <input
         onChange={(e) =>
          dispatch(handleSliderState("recipe", e.target.value))
        }
        value={recipe}

          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="text"
          autoComplete="text"
          autoFocus
          placeholder={state.recipe}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
         onChange={(e) =>
          dispatch(handleSliderState("title", e.target.value))
        }
        value={title}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="text"
          autoComplete="number"
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
              marginBottom:"40px",

              }}
            >
             {loading ? "Editing Slider ..." : "Save"}
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
              marginBottom:"40px",

            }}
            onClick={reset}
          >
            Reset
          </button>
        </div>
    </div>
  );
};

export default EditSlider;
