import React, { useEffect, useState } from "react";

import "../assets/styles/myRecipe.scss";

// import Userphoto1 from "../assets/images/blog1.svg";
// import Userphoto2 from "../assets/images/blog2.svg";
// import Userphoto3 from "../assets/images/blog3.svg";

import UserProfile from "../components/UserProfile";
import { Link, useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesBySlug, setRecipesError } from "../appState/actions/recipeAction";
import { BASE_URL } from "../api";

const PER_PAGE = 10;


const MyRecipe = () => {
  const navigate = useNavigate();
  const { recipes } = useSelector((state) => state.recipe);
  const [recipesList, setRecipesList] = useState(recipes)
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  async function handleDelete(slug) {
    let result = await fetch(`${BASE_URL}/recipe/${slug}`, {
      method: "DELETE",
    });
    result = await result.json();
    dispatch(getRecipesBySlug());
  }

  useEffect(() => {
    setRecipesList(recipes);
  }, [recipes]);

  useEffect(() => {
    dispatch(getRecipesBySlug());
  }, []);

  const status = (status) => {
    switch (status) {
      case "Active":
        return "green";
      case "Inactive":
        return "red";
      default:
        return "grey";
    }
  };

  const convertDate = (date) => {
    return new Date(date)?.toDateString();
  };

  // const handleOpen = (item) => {
  //   setShowModal(true);
  //   setAddRecipe(item);
  // };

  // const handleClose = () => {
  //   setShowModal(false);
  //   dispatch({
  //     type: actiontypes.RESET_RECIPE_STATE,
  //   });
  //   dispatch(setRecipesError(""));
  // };

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((recipes) => {
        setData(recipes);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = recipesList
  ?.sort(function (a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  })
  .map((recipe) => (
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
        <Link to="/viewrecipe">
          <div className="view">
            <GrView alt="" />
          </div>
        </Link>
        <Link to="/addrecipe">
          <div className="edit">
            <AiFillEdit alt="" />
          </div>
        </Link>
        <div
          onClick={(e) => handleDelete(recipe)}
          className="delete"
        >
          <AiFillDelete alt="" />
        </div>
      </div>
    </div>))

  const pageCount = Math.ceil(recipesList.length / PER_PAGE);
  return (
    <section className="myrecipe">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>My Recipes</h1>
          <ul className="list flex">
            <li>
              <Link to="/">Home</Link>
            </li>
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
              {currentPageData}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRecipe;
