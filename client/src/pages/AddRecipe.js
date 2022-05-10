import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UserProfile from "../components/UserProfile";

import "../assets/styles/addRecipe.scss";
import { addRecipe } from "../appState/actions/recipeActions";

const AddRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [recipeData, setRecipeData] = useState({
    title: "",
    category: "",
    permlink: "",
    difficulty: "",
    prepareTime: "",
    serves: "",
    calories: "",
    description: "",
    videoLink: "",
    direction: "",
    metaDescription: "",
    image: "",
  });

  const handleinput = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };
  // const handleNewRecipe = (e) => {
  //     e.preventDefault();
  //   dispatch(addRecipe(recipeData, navigate));
  //   console.log(recipeData, "recipeData log");
  //     // clear();
  // }
  // //  const clear = () => {
  // //    setRecipeData({
  // //      email: "",
  // //      password: "",
  // //    });
  // //  };

  return (
    <section class="add-recipe">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Profile - Bambam</h1>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Profile</li>
            <li>Bambam</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <UserProfile isProfile={false} />
        <div className="right">
          <div className="heading">
            <h3>My Recipes</h3>
          </div>
          <div>
            <div className="inputs flex">
              <div className="input">
                <label htmlFor="">Category</label>
                <select name="select" id="">
                  <option value="Category">Category</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="">Title</label>
                <input
                  onChange={handleinput}
                  value={recipeData.title}
                  name="title"
                  type="text"
                  placeholder="Title"
                />
              </div>

              <div className="input">
                <label htmlFor="">Permlink</label>
                <input
                  type="text"
                  onChange={handleinput}
                  value={recipeData.permlink}
                  name="permlink"
                  placeholder="Permlink "
                />
              </div>

              <div className="checkbox flex">
                <label htmlFor="">Difficulty</label>
                <div className="checks flex">
                  <div className="check">
                    <input type="radio" name="level" id="Easy" />
                    <label htmlFor="">Easy</label>
                  </div>
                  <div className="check">
                    <input type="radio" name="level" id="Medium" />
                    <label htmlFor="">Medium</label>
                  </div>
                  <div className="check">
                    <input type="radio" name="level" id="Hard" />
                    <label htmlFor="">Hard</label>
                  </div>
                </div>
              </div>

              <div className="aside-input flex">
                <div className="aside-left flex">
                  <div className="input">
                    <label htmlFor="">Prepare Time</label>
                    <input
                      type="text"
                      onChange={handleinput}
                      value={recipeData.prepareTime}
                      name="prepareTime"
                      placeholder="Prepare Time"
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="">Cooking Time</label>
                    <input
                      type="text"
                      onChange={handleinput}
                      value={recipeData.cookingTime}
                      name="cookingTime"
                      placeholder="Cooking Time"
                    />
                  </div>
                </div>
                <div className="aside-right flex">
                  <div className="input">
                    <label htmlFor="">Serves</label>
                    <input
                      type="text"
                      onChange={handleinput}
                      value={recipeData.serves}
                      name="serves"
                      placeholder="Serves"
                    />
                  </div>

                  <div className="input">
                    <label htmlFor="">Calories</label>
                    <input
                      type="text"
                      onChange={handleinput}
                      value={recipeData.calories}
                      name="calories"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div className="textarea flex">
                <label htmlFor="">Description</label>
                <textarea
                  placeholder=""
                  onChange={handleinput}
                  value={recipeData.description}
                  name="description"
                ></textarea>
              </div>

              <div className="input">
                <label htmlFor="">Video Link</label>
                <input
                  type="text"
                  onChange={handleinput}
                  value={recipeData.videoLink}
                  name="videoLink"
                  placeholder="Video Link"
                />
              </div>

              <div className="textarea flex">
                <label htmlFor="">Direction</label>
                <textarea
                  placeholder=""
                  onChange={handleinput}
                  value={recipeData.direction}
                  name="direction"
                ></textarea>
              </div>

              <div className="textarea flex">
                <label htmlFor="">Meta Discription</label>
                <textarea
                  placeholder=""
                  onChange={handleinput}
                  value={recipeData.metaDescription}
                  name="metaDescription"
                ></textarea>
              </div>

              <div className="input">
                <label htmlFor="">Featured Image</label>
                <input
                  type="text"
                  onChange={handleinput}
                  value={recipeData.featuredImage}
                  name="featuredImage"
                  placeholder=""
                />
              </div>

              <div className="file">
                <div className="div"></div>
                <div className="file-item">
                  <input type="file" name="" id="" />
                  <div className="file-display">
                    <h3>No photos uploaded yet !</h3>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">Add Recipe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddRecipe;
