import React, { useEffect, useState, useRef } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleState,
  registerAdmin,
  setUserError,
} from "../../../appState/actions/AdminAuthAction";

const AddAdmin = ({ onclose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    username,
    firstName,
    lastName,
    country,
    userGroup,
    image,
    description,
    password,
    email,
    secret,
    error,
  } = useSelector((state) => state.adminProfile);

  const target = useRef(null);
  const [selectImage, setSelectImage] = useState(image);


  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      country: country,
      userGroup: "admin",
      image: selectImage,
      description: description,
      password: password,
      email: email,
      secret: secret,
    };
    dispatch(registerAdmin(payload, onclose, navigate));
    console.log("new input", payload)
  };

  function matchPassword() {  
    const pw1 = document.getElementById("pswd1");  
    const pw2 = document.getElementById("pswd2");  
    if(pw1 != pw2)  
    {   
      alert("Passwords did not match");  
    } else {  
      alert("Password created successfully");  
    }  
  }  
  

  useEffect(() => {
    setTimeout(() => {
      dispatch(setUserError(""));
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
        <h5 className="p-3">Add User</h5>
        <h5 onClick={onclose} style={{ cursor: "pointer" }}>
          {" "}
          <RiCloseFill className="h3 text-danger" />
        </h5>
      </div>

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
          placeholder="enter userName"
        />
      </div>

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
          placeholder="enter your first name"
        />
      </div>

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
          placeholder="enter your last name"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Email</p>
        <input
          onChange={(e) => dispatch(handleState("email", e.target.value))}
          value={email}
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter email address"
        />
      </div>

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
          placeholder="select your country"
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
        <p className="w-25 h-75 text-end ptag">Password</p>
        <input
          className="w-75 h-75 p-1 border"
          name="pswd1"
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          autoFocus
          placeholder=" Enter password"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Comfirm Password</p>
        <input
         onChange={(e) => dispatch(handleState("password", e.target.value))}
         value={password}
          className="w-75 h-75 p-1 border"
          name="pswd2"
          type="password"
          required
          autoFocus
          placeholder=" re-enter your password"
        />
      </div>


      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Secret</p>
        <input
          onChange={(e) => dispatch(handleState("secret", e.target.value))}
          value={secret}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="select your country"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea
          onChange={(e) => dispatch(handleState("description", e.target.value))}
          value={description}
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={4}
          placeholder="Description"
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
          Create
        </button>

        <button
          onClick={onclose}
          style={{
            marginRight: "50px",
            backgroundColor: "red",
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

export default AddAdmin;
