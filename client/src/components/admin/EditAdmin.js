import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  handleState,
  setUserError,
  updateAdminByAdmin,
} from "../../appState/actions/AdminAuthAction";

const EditAdmin = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const {
    slug,
    _id,
    username,
    firstName,
    lastName,
    country,
    userGroup,
    image,
    description,
    email,
    status,
    error,
  } = useSelector((state) => state.adminProfile);

  const target = useRef(null);
  const [selectImage, setSelectImage] = useState(image);
  const [selectUser, setSelectUser] = useState(userGroup);
  const [userStatus, setUserStatus] = useState(status);

  const handleUserType = (e) => {
    setSelectUser(e.target.value);
    setUserStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      slug:slug,
      _id:_id,
      username: username,
      firstName: firstName,
      lastName: lastName,
      country: country,
      userGroup: selectUser,
      image: selectImage,
      description: description,
      email: email,
      status: userStatus,
    };
    dispatch(updateAdminByAdmin(payload));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setUserError(""));
    }, 8000);
  }, [error]);

  useEffect(() => {
    if (state !== null) {
      Object.keys(state).forEach((field) => {
        dispatch(handleState(`${field}`, state[field]));
      });
    }
  }, [state]);

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

  function reset() {
    window.location.reload();
  }

  return (
    <div>
      <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Edit Admin</h5>
        <Link to={-1}>
          <h6>
            <IoMdArrowDropleft /> Back
          </h6>
        </Link>
      </div>

      <hr className="m-3" />
      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Usergroup</p>
        <select
          className="w-75 h-75 p-1 border"
          onChange={(e) => dispatch(handleState("userGroup", e.target.value))}
          value={userGroup}
        >
          <option value="admin">Admin</option>
          <option value="subscriber">Subscriber</option>
        </select>
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Username</p>
        <input
          onChange={(e) => dispatch(handleState("username", e.target.value))}
          value={username}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.username}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">First Name</p>
        <input
          onChange={(e) => dispatch(handleState("firstName", e.target.value))}
          value={firstName}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.firstName}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Last Name</p>
        <input
          onChange={(e) => dispatch(handleState("lastName", e.target.value))}
          value={lastName}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.lastName}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Email</p>
        <input
          onChange={(e) => dispatch(handleState("email", e.target.value))}
          value={email}
          className="w-75 h-75 p-1 border"
          type="email"
          required
          autoComplete="email"
          autoFocus
          placeholder={state.email}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Country</p>
        <input
          onChange={(e) => dispatch(handleState("country", e.target.value))}
          value={country}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.country}
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
                alt={state.username}
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              />
            )}
          </div>
        </div>
      </div>

      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag"> User Status</p>
        <select
          className="w-75 h-75 p-1 border"
          onChange={(e) => dispatch(handleState("status", e.target.value))}
          value={status}
        >
          <option value="active">active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea
          onChange={(e) => dispatch(handleState("description", e.target.value))}
          value={description}
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={10}
          placeholder={state.description}
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

export default EditAdmin;
