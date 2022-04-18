import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import profilerec from "../assets/images/userdashboardprofileRec.png";
import UserProfile from "../components/UserProfile";
import "../assets/styles/userDashBoard.scss";
import { updateUser } from "../appState/actions/AuthAction";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    userName: "",
    email: "",
    password: "",
    description:""
  });
  const handleinput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(userData, "update log")
     dispatch(updateUser(userData, navigate));
  };



  const [selectedFile , setSelectedFile] = useState(null)
  const target = useRef(null)

  const handleFile =(e) => {
    const uploaded = e.target.files[0]
    setSelectedFile(URL.createObjectURL(uploaded))
  }

  return (
    <section className="user-dash-board">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Dashboard - Bambam</h1>
          <ul className="list">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Bambam</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <UserProfile isProfile={false} />
        <div className="form">
          <form onSubmit={handleUpdate}>
            <h2>Profile</h2>
            <div className="inputs flex">
              <div className="left flex">
                <div className="input">
                  <h5>First Name</h5>
                  <input
                    type="text"
                    value={userData.firstName}
                    onChange={handleinput}
                    name="firstName"
                    placeholder="Ayo"
                  />
                </div>
                <div className="input">
                  <h5>Username</h5>
                  <input
                    type="text"
                    value={userData.userName}
                    onChange={handleinput}
                    name="userName"
                    placeholder="Bambam"
                  />
                </div>
                <div className="input">
                  <h5>Country</h5>
                  <input
                    type="text"
                    value={userData.country}
                    onChange={handleinput}
                    name="country"
                    placeholder="Nigeria"
                  />
                </div>
              </div>
              <div className="right flex">
                <div className="input">
                  <h5>Last Name</h5>
                  <input
                    type="text"
                    value={userData.lastName}
                    onChange={handleinput}
                    name="lastName"
                    placeholder="Ayo"
                  />
                </div>
                <div className="input">
                  <h5>Email</h5>
                  <input
                    type="text"
                    value={userData.email}
                    onChange={handleinput}
                    name="email"
                    placeholder="Ayo@gmail.com"
                  />
                </div>
                <div className="input">
                  <h5>Password</h5>
                  <input
                    type="text"
                    value={userData.password}
                    onChange={handleinput}
                    name="password"
                    placeholder="******"
                  />
                </div>
              </div>
            </div>
            <div className="textarea">
              <h5>Description</h5>
              <textarea
                placeholder=""
                value={userData.description}
                onChange={handleinput}
                name="description"
              ></textarea>
            </div>
            <h5 className="center">Gender</h5>
            <div className="checkbox">
              <div className="check flex">
                <input type="radio" name="gender" id="Female" />
                <label htmlFor="Female">Female</label>
              </div>
              <div className="check flex">
                <input type="radio" name="gender" id="Male" />
                <label htmlFor="Male">Male</label>
              </div>
              <div className="upload-sec">
                <div className="upload flex">
                  <div className="upload-div">
                    <input type='file'
                    ref={target}
                    onChange={(e) => handleFile(e)}/>
                    <label 
                      onClick={() => target.current.click()}
                    htmlFor="file">UPLOAD IMAGE</label>
                  </div>
                  <div className="upload-img">
                    {
                      selectedFile !== null && <img src={selectedFile} alt="img" />
                    }
                  </div>
                </div>
              </div>
            </div>





            <div className="upload-btn">
              <button type="submit">SAVE</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
