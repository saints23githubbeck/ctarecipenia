import React, { useState, useEffect } from "react";
import loginIcon from "../assets/images/login-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../appState/actions/AuthAction";

const Login = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    console.log(e.target.name, e.target.value, "e log");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formData, "formData log");
     dispatch(logIn(formData));
    clear();
  };

  const clear = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div>
        <div className="loginIcon">
          <img src={loginIcon} alt="login Icon" />
        </div>
        <span className="text_primary">Welcome</span>
        <h4>Login To Your Account</h4>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="ayo@gmail.com"
            onChange={handleinput}
            value={formData.email}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={handleinput}
            name="password"
            placeholder="********"
          />
          <div className="d-flex align-items-baseline justify-content-between mb-md-2">
            <h4
              className="pointer"
              onClick={() => props.handleAuthType("forgot-password")}
            >
              Forgot Password?
            </h4>
            <div>
              <input type="checkbox" name="" id="" />
              <span>Remember me</span>
            </div>
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <p>
          Don’t have an account ?{" "}
          <b
            className="text_primary pointer"
            onClick={() => props.handleAuthType("register")}
          >
            Register Now
          </b>
        </p>
      </div>
    </div>
  );
};

export default Login;
