import { Link } from "react-router-dom";

import "../assets/styles/viewRecipe.scss";

import authorIcon from "../assets/images/userdashboardprofilecircle.png";
import searchIcon from "../assets/images/searchIcon.svg";


import eyeColoredIcon from "../assets/images/viewColouredIcon.svg";
import clockColoredIcon from "../assets/images/clockColouredIcon.svg";
import calenderColoredIcon from "../assets/images/calenderColouredColor.svg";

import printIcon from "../assets/images/printIcon.svg";

import img from "../assets/images/blog1.svg";

import Categories from "../components/landingPage/Categories";
import PopularRecipe from "./../components/landingPage/PopularRecipe";
import Card from "./../components/Card";

import latestRecipe1 from "../assets/images/latest-recipe1.png";
import latestRecipe2 from "../assets/images/latest-recipe2.png";
import ownerImage from "../assets/images/latest-recipe-owner-image.png";
import Review from "../components/Review";

const ViewRecipe = () => {
  const recipeInfo = {
    recipeImg: img,
    userNum: "7 People",
    prepareTime: "15 mins",
    cookTime: "15 mins",
    calories: 500,
    difficulty: "medium",
    lastUpdated: "Feb 07,2022",
    created: "Feb 05,  2022",
    views: 150,
    recipeText:
      "This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce.",
    authorImg : authorIcon
  };
  const {
    recipeImg,
    userNum,
    prepareTime,
    cookTime,
    calories,
    difficulty,
    lastUpdated,
    created,
    views,
    recipeText,
    authorImg
  } = recipeInfo;

  const directionInfo = [
    {
      id: "1",
      directionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris.",
    },
    {
      id: "2",
      directionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris.",
    },
    {
      id: "3",
      directionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris.",
    },
    {
      id: "4",
      directionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris.",
    },
  ];

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
  ];

  const ingredientList = [
    {
      item: "2 Chicken",
    },
    {
      item: "3 table spoon vegetable oil",
    },
    {
      item: "2 Cubes of maggi",
    },
    {
      item: "2 teaspoon of black pepper",
    },
    {
      item: "2 Large onion, chopped",
    },
    {
      item: "2 tablespoon of curry",
    },
    {
      item: "2 tablespoon of tyme",
    },
    {
      item: "2 Chicken",
    },
    {
      item: "2 Chicken",
    },
  ];
  return (
    <section className="view-recipe">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>View Recipes</h1>
          <ul className="list flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>View Recipe</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <div className="max-width">
          <div className="flex1">
            <div className="right-item">
              <div className="serach-box">
                <div className="search-btn">
                  <input type="text" placeholder="Search  for Recipes" />
                  <button>
                    <img src={searchIcon} alt="eyeColoredIcon" />
                  </button>
                </div>
              </div>
              <div className="author">
              <div className="flex">
                <div><h5>Author</h5>
                <h5>Bambam</h5>
                <p>Ayo@user.com</p></div>
                <div className='author-img'> <img src={authorImg} alt="authorImg" /></div>
              </div>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tincidunt amet, po
                </h5>
              </div>
            </div>

            <div className="left-item">
              <div className="single-item">
                <div className="text">
                  <div className="caption">
                    <h5>Garlic Shrimp Linguine</h5>
                    <div className="info flex">
                      <div className="view flex">
                        <img src={eyeColoredIcon} alt="eyeColoredIcon" />{" "}
                        <span>{views}</span>
                      </div>
                      <div className="clock flex">
                        <img src={clockColoredIcon} alt="clockColoredIcon" />
                        <span>last Updated : {lastUpdated}</span>
                      </div>
                      <div className="calender flex">
                        <img
                          src={calenderColoredIcon}
                          alt="calenderColoredIcon"
                        />
                        <span>{created}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recipe-img img">
                  <img src={recipeImg} alt="user" />
                  <div className="img-info flex">
                    <div className="item">
                      <span>Serves: </span>
                      <span>{userNum}</span>
                    </div>
                    <span className="dash"></span>
                    <div className="item">
                      <span>Prepare Time:</span>
                      <span>{prepareTime} </span>
                    </div>
                    <span className="dash"></span>
                    <div className="item">
                      <span>Cooking Time: </span>
                      <span>{cookTime}</span>
                    </div>
                    <span className="dash"></span>
                    <div className="item">
                      <span>Calories:</span>
                      <span>{calories}</span>
                    </div>
                    <span className="dash"></span>
                    <div className="item">
                      <span>Difficulty: </span>
                      <span>{difficulty}</span>
                    </div>
                    <span className="dash"></span>

                    <div className="btn">
                      <button> <img src={printIcon} alt="" /> PRINT</button>
                    </div>
                  </div>
                  <p>{recipeText}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex2">
            <div className="left-item">
              <div className="img">
                <img src={recipeImg} alt="recipeImg" />
              </div>
              <div className="ingredient">
                <div className="heading">
                  <h3>Ingredients</h3>
                </div>
                <div className="table">
                  {ingredientList.map((ingredient, index) => (
                    <div className="items" key={index}>
                      <ul key={index}>
                        <li>{ingredient.item}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="direction">
                <div className="heading">
                  <h3>Directions</h3>
                </div>
                <div className="direction-text">
                  {directionInfo.map((info) => (
                    <div className="direciton-item flex" key={info.id}>
                      <span>{info.id}</span>
                      <p>{info.directionText}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="right-item">
              <div className="category-blog wrapper">
                <Categories />
              </div>

              <div className="popular-recipe">
                <PopularRecipe title="Popular Recipes" />
              </div>
            </div>
          </div>
          <div className="heading">
            <h3>You may also like</h3>
          </div>
          <Card latestData={latestData} />
          <Review />
        </div>
      </div>
    </section>
  );
};

export default ViewRecipe;