import React, { useState } from "react";
import "../assets/styles/userDashBoard.scss";
import profilecircle from "../assets/images/userdashboardprofilecircle.png";
import { Link, NavLink } from "react-router-dom";
import dashboardIcon from "../assets/images/dashboardIcon.svg";
import userIcon from "../assets/images/userIconImg.svg";
import recipeIcon from "../assets/images/recipeIcon.svg";
import logoutIcon from "../assets/images/logoutIcon.svg";
import genderIcon from "../assets/images/genderIcon.svg";
import emailIcon from "../assets/images/mailIcon.svg";
import joinedDateIcon from "../assets/images/calenderIcon.svg";
import profileViewsIcon from "../assets/images/viewIcon.svg";
import countryIcon from "../assets/images/flagIcon.svg";
import recipesIcon from "../assets/images/recipeIcon.svg";
// const UserProfile = ({ isProfile }) => {
import { logOutAction } from "../appState/actions/AuthAction";
// // import dashboardIcon from "../assets/images/dashboard.png";
// import userIcon from "../assets/images/user.png";
// import recipeIcon from "../assets/images/recipe.png";
// import logoutIcon from "../assets/images/logout.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import nameIcon from "../assets/images/user.png";
// import genderIcon from "../assets/images/female.png";
// import emailIcon from "../assets/images/mail.png";
// import joinedDateIcon from "../assets/images/calender.png";
// import profileViewsIcon from "../assets/images/view.png";
// import countryIcon from "../assets/images/flag.png";
// import recipesIcon from "../assets/images/recipe.png";

const UserProfile = ({ isProfile, profileInfo }) => {
  const userProfile = useSelector((state) => state.user);
  const { user, isLoggedIn } = userProfile;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState({
    name: profileInfo?.name? profileInfo.name : profileInfo?.username,
    profileViews: "120 Profile Views",
    gender: profileInfo?.gender,
    country: profileInfo?.country,
    email: profileInfo?.email,
    profilePic: profileInfo?.profilePic,
    recipes: "7 Recipes",
    joinedDate: "Member Since Febuary 14,2022",
  });
  const {
    name,
    profileViews,
    gender,
    country,
    email,
    recipes,
    joinedDate,
    profilePic,
  } = profileData;

  return (
    <div className="user-menu flex">
      <div className="profile flex">
        <div className="profile_text_img">
          {!isProfile ? (
            <div>
              {user?.profilePic ? (
                // <img className="profile_img" src={profilecircle} alt="" />
                <img
                  className="profile_img"
                  src={user?.profilePic}
                  alt="user profile"
                />
              ) : (
                /// <img className="profile_img" src={profilecircle} alt="" />
                <span className="profile_text">
                  {user?.username?.split("")[0]}
                </span>
              )}
            </div>
          ) : (
            <div>
              {/* {user?.profilePic ? (
                <img className="profile_img" src={profilecircle} alt="" />
         */}
              {/* other person profile */}
              {profilePic ? (
                <img
                  className="profile_img"
                  src={profilePic}
                  alt="user profile"
                />
              ) : (
                // <img className="profile_img" src={profilecircle} alt="" />
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
              <img src={userIcon} alt="nameIcon" />
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
            <NavLink className="flex" to="/user-dashboard">
              <img src={dashboardIcon} alt="dashboardIcon" />
              <h5>Dashboard</h5>
            </NavLink>

            <Link className="flex" to={`/profile/:${user.username}`}>
              <img src={userIcon} alt="userIcon" />
              <h5>My Profile</h5>
            </Link>

            <NavLink className="flex" to="/myrecipe">
              <img src={recipeIcon} alt="recipeIcon" />
              <h5>My Recipes</h5>
            </NavLink>

            <span
              className="flex"
              onClick={() => dispatch(logOutAction(navigate))}
            >
              <img src={logoutIcon} alt="logoutIcon" />
              <h5>Logout</h5>
            </span>
          </>
        )}
      </div>
      
    </div>
  );
};

export default UserProfile;
