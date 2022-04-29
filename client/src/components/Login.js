import React, { useState, useEffect } from "react";
import loginIcon from "../assets/images/login-icon.png";
import { useDispatch } from "react-redux";
import { logIn } from "../appState/actions/AuthAction";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
     dispatch(logIn(formData, navigate));
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
            required
            type="text"
            placeholder="ayo@gmail.com"
            onChange={handleinput}
            value={formData.email}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            required
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
