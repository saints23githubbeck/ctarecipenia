import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserProfile from "./../components/UserProfile";
import Card from "./../components/Card";
import "../assets/styles/profile.scss";
import latestRecipe1 from "../assets/images/latest-recipe1.png";
import latestRecipe2 from "../assets/images/latest-recipe2.png";
import ownerImage from "../assets/images/latest-recipe-owner-image.png";
import { Link, useParams } from "react-router-dom";
import { getProfile } from "../appState/actions/profileActions";
import Loading from "../components/Loading";

const Profile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user).user;
  const [loading, setLoading] = useState(true);
  const param = useParams().username;
  useEffect(() => {
    const username = param.substring(1);
    dispatch(getProfile(username));
    setLoading(false);
  }, []);
  const latestData = [
    {
      title: "Chicken",
      recipeImage: latestRecipe1,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe1,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe1,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
  ];

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="profile-page">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Profile - {userProfile.username}</h1>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Profile</li>
            <li>{userProfile.username}</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <UserProfile isProfile={true} profileInfo={userProfile} />

        <div className="right">
          <div className="comment">
            <div className="review-comment flex">
              <span>“</span>
              <h5> wat on mid </h5>
              <h5>{userProfile.description}</h5>
            </div>
          </div>

          <Card latestData={latestData} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
