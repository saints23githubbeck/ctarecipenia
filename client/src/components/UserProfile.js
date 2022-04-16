import React, { useState } from "react";
import "../assets/styles/userDashBoard.scss";

import profilecircle from "../assets/images/userdashboardprofilecircle.png";

import { Link, NavLink } from "react-router-dom";
import dashboardIcon from "../assets/images/dashboard.png";
import userIcon from "../assets/images/user.png";
import recipeIcon from "../assets/images/recipe.png";
import logoutIcon from "../assets/images/logout.png";

const UserProfile = ({ isProfile }) => {
  const [profileData, setProfileData] = useState({
    name: "Bambam",
    profileViews: "120 Profile Views",
    gender: "Female",
    country: "Nigeria",
    email: "ayo@gmail.com",
    recipes: "7 Recipes",
    joinedDate: "Member Since Febuary 14,2022",
  });
  const { name, profileViews, gender, country, email, recipes, joinedDate } =
    profileData;

  return (
    <div className="user-menu flex">
      <div className="profile flex">
        <div className="img">
          <img src={profilecircle} alt="" />
        </div>
        <div className="name">
          <h5>Bambam</h5>
          <h5>User</h5>
        </div>
      </div>
      <div className="menu-list flex">
        {isProfile ? (
          <div>
            <div className="flex">
              {/* <img src={fifthImg} alt="" /> */}
              <h5>{name}</h5>
            </div>
            <div className="flex">
              {/* <img src={fifthImg} alt="" /> */}
              <h5>{gender}</h5>
            </div>
            <div className="flex">
              {/* <img src={fifthImg} alt="" /> */}
              <h5>{email}</h5>
            </div>
            <div className="flex">
              {/* <img src={fifthImg} alt="" /> */}
              <h5>{country}</h5>
            </div>
            <div className="flex">
              {/* <img src={fifthImg} alt="" /> */}
              <h5>{recipes}</h5>
            </div>
            <div className="flex">
              {/* <img src={fifthImg} alt="" /> */}
              <h5>{joinedDate}</h5>
            </div>
            <div className="flex">
              {/* <img src={fifthImg} alt="" /> */}
              <h5>{profileViews}</h5>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex">
              <img src={dashboardIcon} alt="dashboardIcon" />
              <NavLink to="/user-dashboard">
                <h5>Dashboard</h5>
              </NavLink>
            </div>
            <div className="flex">
              <img src={userIcon} alt="userIcon" />
              <Link to="/profile">
                <h5>My Profile</h5>
              </Link>
            </div>
            <div className="flex">
              <img src={recipeIcon} alt="recipeIcon" />
              <NavLink to="/addrecipe">
                <h5>My Recipes</h5>
              </NavLink>
            </div>
            <div className="flex">
              <img src={logoutIcon} alt="logoutIcon" />
              <Link to="">
                <h5>Logout</h5>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
