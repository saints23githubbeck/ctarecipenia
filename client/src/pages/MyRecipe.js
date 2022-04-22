import React, { useState } from "react";

import "../assets/styles/myRecipe.scss";


import Userphoto1 from "../assets/images/blog1.svg";
import Userphoto2 from "../assets/images/blog2.svg";
import Userphoto3 from "../assets/images/blog3.svg";



import UserProfile from "../components/UserProfile";

import viewIcon from "../assets/images/viewWhiteIcon.svg";
import deleteIcon from "../assets/images/deleteIcon.svg";
import editIcon from "../assets/images/editIcon.svg";
import { Link } from 'react-router-dom';

const MyRecipe = () => {
  const [recipesList, setRecipesList] = useState([
    {
      id: 1,
      photo: Userphoto1,
      title: "Garlic Chicken",
      category: "Food",
    },
    {
      id: 2,
      photo: Userphoto2,
      title: "Garlic Chicken",
      category: "Food",
    },
    {
      id: 3,
      photo: Userphoto3,
      title: "Garlic Chicken",
      category: "Food",
    },
    {
      id: 4,
      photo: Userphoto1,
      title: "Garlic Chicken",
      category: "Food",
    },
    {
      id: 5,
      photo: Userphoto2,
      title: "Garlic Chicken",
      category: "Food",
    }
  ]);

  const handleDelete = (e) => {
    console.log(e);
    const filtered = recipesList.filter((recipe) => recipe !== e);
    setRecipesList(filtered);
  };

  return (
    <section className="myrecipe">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>My Recipes</h1>
          <ul className="list flex">
            <li><Link to='/'>Home</Link></li>
            <li>My Recipe</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <UserProfile isProfile={false} />
        <div className="right">
          <div className="recipe-list">
            <div className="heading">
              <h3>My Recipes</h3>
            </div>
            <div className="caption">
              <ul className="head grid">
                <li className="row1">Photo</li>
                <li className="row2">Title</li>
                <li className="row3">Category</li>
                <li className="row4">Status</li>
                <li className="row5">Action</li>
              </ul>
            </div>
            <div className="recipes flex">
              {recipesList.map((recipe) => (
                <div key={recipe.id} className="recipe grid">
                  <div className="row1 img">
                    <img src={recipe.photo} alt="" />
                  </div>

                  <div className="row2">
                    <h5>{recipe.title}</h5>
                  </div>
                  <div className="row3">
                    <h5>{recipe.category}</h5>
                  </div>
                  <div className="row5 flex actions">
                    <Link to='/viewrecipe'>
                    <div className="view">
                      <img src={viewIcon} alt="" />
                    </div></Link>
                    <Link to='/addrecipe'>
                    <div className="edit">
                      <img src={editIcon} alt="" />
                    </div></Link>
                    <div
                      onClick={(e) => handleDelete(recipe)}
                      className="delete"
                    >
                      <img src={deleteIcon} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRecipe;
