import React, { useEffect, useRef, useState } from 'react'
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addBlogByAdmin, handleBlogState, setBlogError } from '../../../appState/actions/blogAction';

const AddBlog = ({ onclose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    postedBy,
    title,
    permLink,
    prepareTime,
    cookTime,
    shortDesc, 
    description,
    metaDescription,
    image ,
    error,
    loading,
  } = useSelector((state) => state.blog);

  const target = useRef(null);
  const [selectImage, setSelectImage] = useState(image);


  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      postedBy:postedBy,
      title: title,
      image: selectImage,
      description: description,
      shortDesc: shortDesc,
      permLink: permLink,
      metaDescription: metaDescription,
      prepareTime: prepareTime,
      cookTime: cookTime,
    };
    dispatch(addBlogByAdmin(payload, onclose, navigate));
    console.log("new input", payload)
  };
  

  useEffect(() => {
    setTimeout(() => {
      dispatch(setBlogError(""));
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
              onChange={(e) => dispatch(handleBlogState("prepareTime", e.target.value))}
              value={prepareTime}
                className="w-75 h-75 p-1 border"
                type="text"
                required
                id="name"
                autoComplete="name"
                autoFocus
                placeholder={prepareTime}
              />
            </div>
            <div className="w-50 row m-1">
              <p className="w-25 h-75 text-end ptag px-4">Cooking Time</p>
              <input
                            onChange={(e) => dispatch(handleBlogState("cookTime", e.target.value))}
                            value={cookTime}
              
                className="w-75 h-75 p-1 border"
                type="text"
                required
                id="name"
                autoComplete="name"
                autoFocus
                placeholder={cookTime}
              />
            </div>
          </div>

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
              placeholder={title}
            />
          </div>

          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Permlink</p>
            <input
                          onChange={(e) => dispatch(handleBlogState("permLink", e.target.value))}
                          value={permLink}
            
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder={permLink}
            />
          </div>

          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Short Description</p>
            <textarea
                          onChange={(e) => dispatch(handleBlogState("shortDesc", e.target.value))}
                          value={shortDesc}
            
              className="w-75 h-75 p-1 border"
              type="text"
              rows={5}
              id="name"
              autoComplete="name"
              placeholder={shortDesc}
            />
          </div>

          <div className="row  m-3">
            <p className="w-25 h-75 text-end ptag">Description</p>
            <textarea
                          onChange={(e) => dispatch(handleBlogState("description", e.target.value))}
                          value={description}
            
              className="w-75 h-75 p-1 border"
              type="text"
              rows={10}
              id="name"
              autoComplete="name"
              placeholder={description}
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
            <p className="w-25 h-75 text-end ptag">Meta Description</p>
            <input
                          onChange={(e) => dispatch(handleBlogState("metaDescription", e.target.value))}
                          value={metaDescription}
            
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder={metaDescription}
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

export default AddBlog