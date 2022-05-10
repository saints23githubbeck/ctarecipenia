import React, { useState } from "react";
import "../assets/styles/userDashBoard.scss";
import profilecircle from "../assets/images/userdashboardprofilecircle.png";
import { Link, NavLink } from "react-router-dom";
import { logOutAction } from "../appState/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineCalendar, AiOutlineFlag, AiFillDashboard, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import * as AiIcons from "react-icons/ai";
import { MdFoodBank } from "react-icons/md";
import {BiLogOut} from "react-icons/bi";
import {FaFemale} from "react-icons/fa";
import {GrView} from "react-icons/gr";


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
          {/* <img src={profilecircle} alt="" /> */}
          {!isProfile ? (
            <div>
              {user?.profilePic ? (
                <img
                  className="profile_img"
                  src={user?.profilePic}
                  alt="user profile"
                />
              ) : (
                <div>
                <img className="profile_img" src={profilecircle} alt="" />
                <span className="profile_text">
                  {user?.username?.split("")[0]}
                </span>
                </div>
              )}
            </div>
          ) : (
            <div>
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
              <AiOutlineUser alt="nameIcon" />
              <h5>{name}</h5>
            </div>
            <div className="flex">
              <FaFemale alt="genderIcon" />
              <h5>{gender}</h5>
            </div>
            <div className="flex">
              <AiOutlineMail alt="emailIcon" />
              <h5>{email}</h5>
            </div>
            <div className="flex">
              <AiOutlineFlag alt="countryIcon" />
              <h5>{country}</h5>
            </div>
            <div className="flex">
              <MdFoodBank alt="recipesIcon" />
              <h5>{recipes}</h5>
            </div>
            <div className="flex">
              <AiOutlineCalendar alt="joinedDateIcon" />
              <h5>{joinedDate}</h5>
            </div>
            <div className="flex">
              <GrView alt="profileViewsIcon" />
              <h5>{profileViews}</h5>
            </div>
          </>
        ) : (
          <>
            <NavLink className="flex" to="/user-dashboard">
              <AiFillDashboard alt="dashboardIcon" />
              <h5>Dashboard</h5>
            </NavLink>

            <Link className="flex" to={`/profile/:${user.username}`}>
              <AiOutlineUser alt="userIcon" />
              <h5>My Profile</h5>
            </Link>

            <NavLink className="flex" to="/myrecipe">
              <MdFoodBank alt="recipeIcon" />
              <h5>My Recipes</h5>
            </NavLink>

            <span
              className="flex"
              onClick={() => dispatch(logOutAction(navigate))}
            >
              <BiLogOut alt="logoutIcon" />
              <h5>Logout</h5>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;



