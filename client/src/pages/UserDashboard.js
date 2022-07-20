import React, { useRef, useState } from "react";
import { List, MenuList, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../components/UserProfile";
import "../assets/styles/userDashBoard.scss";
import { updateUser } from "../appState/actions/AuthAction";
// import { Country } from "country-state-city";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const country = Country.getAllCountries();
  const userProfile = useSelector((state) => state.user).user;
  const [selectedFile, setSelectedFile] = useState(null);
  const { name, username, email, password, description, gender, country, slug } = userProfile;
  const [userGender, setUserGender] = useState(gender);
  const [userData, setUserData] = useState({
    firstName: name?.split(" ")[0],
    lastName: name?.split(" ")[1],
    country,
    username,
    email,
    password,
    description,
    slug
  });
  const handleinput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleGender = (e) => {
    setUserGender(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const newUserdata = {
      ...userData,
      secret: "recipemania",
      profilePic: selectedFile,
      gender: userGender,
    };
    dispatch(updateUser(newUserdata, navigate));
  };

  const target = useRef(null);

  const handleFile = (e) => {
    const uploaded = e.target.files[0];
    setSelectedFile(URL.createObjectURL(uploaded));
  };

  return (
    <section className="user-dash-board">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Dashboard - {username}</h1>
          <ul className="list">
            <li>Home</li>
            <li>Dashboard</li>
            <li>{username}</li>
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
                    placeholder={userData.firstName}
                  />
                </div>
                <div className="input">
                  <h5>Username</h5>
                  <input
                    type="text"
                    value={userData.username}
                    onChange={handleinput}
                    name="username"
                    placeholder={userData.username}
                  />
                </div>
                {/* <div className="input">
                  <h5>Country</h5>
                  <Select
                    value={userData.country}
                    onChange={handleinput}
                    name="country"
                    placeholder="Choose your country"
                  >
                    {country.map((item, index) => (
                      <List key={index}>
                        {/* <MenuList>{item.flag}</MenuList> 
                        <MenuList>{item.name}</MenuList>
                      </List>
                    ))}
                  </Select>
                </div> */}
                <div className="input">
                  <h5>Country</h5>
                  <input
                    value={userData.country}
                    onChange={handleinput}
                    name="country"
                    placeholder={userData.country}
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
                    placeholder={userData.lastName}
                  />
                </div>
                <div className="input">
                  <h5>Email</h5>
                  <input
                    type="text"
                    value={userData.email}
                    onChange={handleinput}
                    name="email"
                    placeholder={userData.email}
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
                    disabled
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
                name={userData.description}
              ></textarea>
            </div>
            <h5 className="center">Gender</h5>
            <div className="checkbox">
              <div className="check flex">
                <input
                  type="radio"
                  name="gender"
                  onClick={handleGender}
                  value="female"
                  defaultChecked={userGender === "female"}
                />
                <label htmlFor="Female">Female</label>
              </div>
              <div className="check flex">
                <input
                  type="radio"
                  onClick={handleGender}
                  name="gender"
                  value="male"
                  defaultChecked={userGender === "male"}
                />
                <label htmlFor="Male">Male</label>
              </div>
              <div className="upload-sec">
                <div className="upload flex">
                  <div className="upload-div">
                    <input
                      type="file"
                      ref={target}
                      onChange={(e) => handleFile(e)}
                    />
                    <label
                      onClick={() => target.current.click()}
                      htmlFor="file"
                    >
                      UPLOAD IMAGE
                    </label>
                  </div>
                  <div className="upload-img">
                    {selectedFile !== null && (
                      <img src={selectedFile} alt="img" />
                    )}
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

