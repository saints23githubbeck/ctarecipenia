import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUp } from "../appState/actions/AuthAction";
import loginIcon from "../assets/images/login-icon.png";

const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, message } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleinput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.username.length < 4) {
      return alert("username must be above 3");
    }

    if (formData.password.length < 6) {
      return alert("password must not be below Six");
    }
    if (formData.confirmPassword !== formData.password) {
      return alert("password dont match");
    }
    const newFormdata = { ...formData, secret: "recipemania" };
    const { confirmPassword, ...otherData } = newFormdata;

    // console.log(otherData, "otherData log");
    dispatch(signUp(otherData, navigate));
    // clear();
  };

  const clear = () => {
    setFormData({
      username: "",
      confirmPassword: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="loginIcon">
        <img src={loginIcon} alt="login Icon" />
      </div>
      <span className="text_primary">Welcome</span>
      <form onSubmit={handleRegister}>
        <label htmlFor="text">Username</label>
        <input
          type="text"
          onChange={handleinput}
          name="username"
          placeholder="Username"
          value={formData.username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onChange={handleinput}
          name="email"
          placeholder="Email"
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleinput}
          name="password"
          value={formData.password}
          placeholder="Password"
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          onChange={handleinput}
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
        />
        {message && <p>{message}</p>}
        <button type="submit">
          {isLoading ? "Loading ..." : "REGISTER NOW"}
        </button>
      </form>

      <p>
        Already a Member?{" "}
        <b
          className="text_primary pointer"
          onClick={() => props.handleAuthType("login")}
        >
          Login
        </b>
      </p>
    </div>
  );
};

export default Register;
