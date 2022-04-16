import React, { useState } from "react";
import "../assets/styles/userDashBoard.scss";

import profilecircle from "../assets/images/userdashboardprofilecircle.png";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import dashboardIcon from "../assets/images/dashboard.png";
import userIcon from "../assets/images/user.png";
import recipeIcon from "../assets/images/recipe.png";
import logoutIcon from "../assets/images/logout.png";


import nameIcon from "../assets/images/user.png";
import genderIcon from "../assets/images/female.png";
import emailIcon from "../assets/images/mail.png";
import joinedDateIcon from "../assets/images/calender.png";
import profileViewsIcon from "../assets/images/view.png";
import countryIcon from "../assets/images/flag.png";
import recipesIcon from "../assets/images/recipe.png";



const UserProfile = ({ isProfile }) => {
  const userProfile = useSelector((state) => state.user);
  const { user, isLoggedIn } = userProfile;

  const [profileData, setProfileData] = useState({
    name: "Bambam",
    profileViews: "120 Profile Views",
    gender: "Female",
    country: "Nigeria",
    email: "ayo@gmail.com",
    recipes: "7 Recipes",
    joinedDate: "Member Since Febuary 14,2022",


  });
  const { name, profileViews, gender, country, email, recipes, joinedDate } = profileData;

  return (
    <div className="user-menu flex">
      <div className="profile flex">
        <div className="profile_text_img">
          {/* <img src={profilecircle} alt="" /> */}
          {!isProfile ? (
            <div>
              {user?.profilePic ? (
                // <img
                //   className="profile_img"
                //   src={user?.profilePic}
                //   alt="user profile"
                // />
                <img className="profile_img" src={profilecircle} alt="" />
              ) : (
                <span className="profile_text">
                  {user?.username?.split("")[0]}
                </span>
              )}
            </div>
          ) : (
            <div>
              {/* other person profile */}
              {user?.profilePic ? (
                // <img
                //   className="profile_img"
                //   src={user?.profilePic}
                //   alt="user profile"
                // />
                <img className="profile_img" src={profilecircle} alt="" />
              ) : (
                <span className="profile_text">
                  {user?.username?.split("")[0]}
                </span>
              )}
            </div>
          )}
        </div>
        <div className="name">
          <h5>{user?.username}</h5>
          <h5>User</h5>
        </div>
      </div>
      <div className="menu-list flex">
        {isProfile ? (
          <>
            <div className="flex">
              <img src={nameIcon} alt="nameIcon" />
              <h5>{name}</h5>
            </div>
            <div className="flex">
              <img src={genderIcon} alt="genderIcon" />
              <h5>{gender}</h5>
            </div>
            <div className="flex">
              <img src={emailIcon} alt="emailIcon" />
              <h5>{email}</h5>
            </div>
            <div className="flex">
              <img src={countryIcon} alt="countryIcon" />
              <h5>{country}</h5>
            </div>
            <div className="flex">
              <img src={recipesIcon} alt="recipesIcon" />
              <h5>{recipes}</h5>
            </div>
            <div className="flex">
              <img src={joinedDateIcon} alt="joinedDateIcon" />
              <h5>{joinedDate}</h5>
            </div>
            <div className="flex">
              <img src={profileViewsIcon} alt="profileViewsIcon" />
              <h5>{profileViews}</h5>
            </div>
          </>
        ) : (
          <>
            <div className="flex">
              <img src={dashboardIcon} alt="dashboardIcon" />
              <NavLink to="/user-dashboard" className="linked">
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
              <NavLink to="/addrecipe" className="linked">
                <h5>My Recipes</h5>
              </NavLink>
            </div>
            <div className="flex">
              <img src={logoutIcon} alt="logoutIcon" />
              <Link to="">
                <h5>Logout</h5>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
