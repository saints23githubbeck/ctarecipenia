import React, { useEffect, useState } from "react";
import loginImageBoy from "../../images/login-image.png";
import loginImageGirl from "../../images/login-image-girl.png";
import loginLogo from "../../images/login-logo.png";
import "./LoginRegister.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";
import useFirebase from "../../hooks/useFirebase";
import axios from "axios";
const LoginRegister = () => {
  const {
    user,
    signInWithGoogle,
    loginUser,
    logOut,
    authErrorMessage,
    registerUser,
  } = useFirebase();
  // const [isRegister,setIsregister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [userData, setUserData] = useState({});
  const [userLoginData, setUserLoginData] = useState({});

  const handleToggle = (e) => {
    setIsToggle(e.target.checked);
  };
  const handleLoginData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLoginData({
      ...userLoginData,
      [name]: value,
    });
    console.log(userLoginData);
  };

  const handleOnBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
  };

  // handle registration
  const handleLoginRegister = (e) => {
    e.preventDefault();
    console.log(userData);
    if (isToggle) {
      if (userData.password === userData.checkPassword) {
        registerUser(userData.email, userData.password, userData.name);
        axios
          .post("http://localhost:5000/addusers", {
            userData,
          })
          .then(function (response) {
            console.log(response.data);
            setErrorMessage(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        setErrorMessage("Please Check Password");
      }
    } else {
      loginUser(userLoginData.email, userLoginData.password);
      console.log("login");
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const handleGoogleSIgnIn = () => {
    signInWithGoogle();
  };
  const handlelogout = () => {
    logOut();
  };
  console.log(user);
  console.log(errorMessage);
  return (
    <div id="loginRegister-container">
      <div className="row login-register">
        <div
          className="col-md-6 loginimage"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          {isToggle ? (
            <img className="w-100" src={loginImageGirl} alt="" />
          ) : (
            <img className="w-100" src={loginImageBoy} alt="" />
          )}
        </div>
        <div
          className="col-md-6 loginimage"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <div className="login-register-form">
            <div className="text-center">
              <img src={loginLogo} alt="" />
              <p className="text-secondary">
                Welcome back!{" "}
                {isToggle ? "Please Register" : "Please Login your Account"}
              </p>
            </div>
            <form onSubmit={handleLoginRegister}>
              <div>
                {isToggle ? (
                  <div>
                    {/* <div className="row">
                      <TextField
                        type="text"
                        value={userFullName.firstName}
                        onChange={handleName}
                        name="firstName"
                        className="my-input col-md-6"
                        id="standard-basic"
                        label="First Name"
                        variant="standard"
                      />

                      <TextField
                        type="text"
                        value={userFullName.lastName}
                        onChange={handleName}
                        name="lastName"
                        className="my-input col-md-6"
                        id="standard-basic"
                        label="Last Name"
                        variant="standard"
                      />
                    </div> */}
                    <TextField
                      type="text"
                      onBlur={handleOnBlur}
                      name="name"
                      className="my-input"
                      id="standard-basic"
                      label="User Name"
                      variant="standard"
                    />
                    <TextField
                      type="email"
                      onBlur={handleOnBlur}
                      name="email"
                      className="my-input"
                      id="standard-basic"
                      label="User Email"
                      variant="standard"
                    />
                    <TextField
                      onBlur={handleOnBlur}
                      name="password"
                      className="my-input"
                      id="standard-basic"
                      type="password"
                      label="Password"
                      variant="standard"
                    />
                    <TextField
                      onBlur={handleOnBlur}
                      name="checkPassword"
                      className="my-input"
                      id="standard-basic"
                      type="password"
                      label="Confirm Password"
                      variant="standard"
                    />
                  </div>
                ) : (
                  <div>
                    <TextField
                      onBlur={handleLoginData}
                      type="email"
                      name="email"
                      className="my-input"
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                    />
                    <TextField
                      onBlur={handleLoginData}
                      name="password"
                      className="my-input"
                      id="standard-basic"
                      label="Password"
                      type="password"
                      variant="standard"
                    />
                  </div>
                )}
              </div>
              <div className="checked-and-forget-password">
                <FormControlLabel
                  control={<Checkbox />}
                  labelPlacement="end"
                  style={{ margin: " 0 0 0 0", color: "black" }}
                  label="Remember Me"
                />
                <span className="text-primary">Forgot Password</span>
              </div>
              <div className="d-grid mt-2">
                {isToggle && (
                  <button type="submit" className="my-bg-button">
                    Register
                  </button>
                )}
                {!isToggle && (
                  <button type="submit" className="my-bg-button">
                    Login
                  </button>
                )}
              </div>
              <FormControlLabel
                control={<Checkbox />}
                labelPlacement="end"
                onChange={handleToggle}
                style={{ margin: " 0 0 0 0", color: "black" }}
                label="Create An Account"
              />

              {errorMessage && isToggle && (
                <div class="alert alert-danger" role="alert">
                  {errorMessage} !
                </div>
              )}
              {authErrorMessage && !isToggle && (
                <div class="alert alert-danger" role="alert">
                  {authErrorMessage} !
                </div>
              )}

              <button onClick={handlelogout}>Logout</button>
              {/* <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='d-grid mt-2'>
                                        <button className='my-bg-button'>Login</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-grid mt-2'>
                                        <button onChange={handleRegister} className='my-register-button'>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
