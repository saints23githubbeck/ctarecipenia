import React, { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  handleRecipeState,
  setRecipesError,
  submitRecipe,
} from "../../../appState/actions/recipeAction";

const AddRecipe = ({ onclose }) => {
  const dispatch = useDispatch();
  const {
    title,
    category,
    cookTime,
    calories,
    description,
    direction,
    permLink,
    difficulty,
    prepareTime,
    serves,
    image,
    videoLink,
    metaDescription,
    featuredImage,
    tags,
    facts,
    additionalInfo,
    ingredients,
    error,
    loading,
  } = useSelector((state) => state.recipe);
  const [level, setLevel] = useState(difficulty);


  const handleLevel = (e) => {
    setLevel(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      title: title,
      category: category,
      image: image,
      description: description,
      videoLink: videoLink,
      direction: direction,
      metaDescription: metaDescription,
      featuredImage: featuredImage,
      permLink: permLink,
      difficulty: level,
      prepareTime: prepareTime,
      serves: serves,
      calories: calories,
      tags: tags,
      facts: facts,
      additionalInfo: additionalInfo,
      ingredients: ingredients,
      cookTime: cookTime,
    };
    dispatch(submitRecipe(payload, onclose));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setRecipesError(""));
    }, 8000);
  }, [error]);

  return (
    <div>
      {" "}
      <div className="d-flex m-3 justify-content-between align-items-center">
        <h5 className="p-3">Add Recipe</h5>
        <h5 onClick={onclose} style={{ cursor: "pointer" }}>
          {" "}
          <RiCloseFill className="h3 text-danger" />
        </h5>
      </div>
      <div>
        <div className="row  m-3">
          <p className="w-25 h-75 text-end ptag">Category</p>
          <input
            onChange={(e) =>
              dispatch(handleRecipeState("category", e.target.value))
            }
            value={category}
            className="w-75 h-75 p-1 border"
            type="name"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder="category"
          />
        </div>
        <div className="row  m-3">
          <p className="w-25 h-75 text-end ptag">Title</p>
          <input
            onChange={(e) =>
              dispatch(handleRecipeState("title", e.target.value))
            }
            value={title}
            className="w-75 h-75 p-1 border"
            type="name"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder="title"
          />
        </div>
        <div className="row  m-3">
          <p className="w-25 h-75 text-end ptag">Permlink</p>
          <input
            onChange={(e) =>
              dispatch(handleRecipeState("permLink", e.target.value))
            }
            value={permLink}
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder="permlink"
          />
        </div>

        <div className="row m-3">
        <p className="w-25 h-75 text-end ptag">Difficulty</p>
          <div className="checkbox d-flex justify-content-between w-75 h-75 p-1">
            <div className="check flex p-1">
              <input
                type="radio"
                name="difficulty"
                onClick={handleLevel}
                value="easy"
                defaultChecked={level === "easy"}
              />
              <label htmlFor="Easy">Easy</label>
            </div>
            <div className="check flex p-2">
              <input
                type="radio"
                onClick={handleLevel}
                name="difficulty"
                value="medium"
                defaultChecked={level === "medium"}
              />
              <label htmlFor="Medium">Medium</label>
            </div>
            <div className="check flex p-3">
              <input
                type="radio"
                onClick={handleLevel}
                name="difficulty"
                value="hard"
                defaultChecked={level === "hard"}
              />
              <label htmlFor="Hard">Hard</label>
            </div>
          </div>
        </div>

        <div className="d-flex  align-items-center w-80 m-3">
          <div className="w-50 row m-1">
            <p className="w-25 h-75 text-end ptag px-4">Prepare Time</p>
            <input
              onChange={(e) =>
                dispatch(handleRecipeState("prepareTime", e.target.value))
              }
              value={prepareTime}
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder="prepareTime"
            />
          </div>
          <div className="w-50 row m-1">
            <p className="w-25 h-75 text-end ptag px-4">Cooking Time</p>
            <input
              onChange={(e) =>
                dispatch(handleRecipeState("cookTime", e.target.value))
              }
              value={cookTime}
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder="cookingTime"
            />
          </div>
        </div>
        <div className="d-flex  align-items-center w-80 m-3">
          <div className="w-50 row m-1">
            <p className="w-25 h-75 text-end ptag px-4">Serves</p>
            <input
              onChange={(e) =>
                dispatch(handleRecipeState("serves", e.target.value))
              }
              value={serves}
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder="serves"
            />
          </div>
          <div className="w-50 row m-1">
            <p className="w-25 h-75 text-end ptag px-4">Calories </p>
            <input
              onChange={(e) =>
                dispatch(handleRecipeState("calories", e.target.value))
              }
              value={calories}
              className="w-75 h-75 p-1 border"
              type="text"
              required
              id="name"
              autoComplete="name"
              autoFocus
              placeholder="calories"
            />
          </div>
        </div>
        <div className="row  m-3">
          <p className="w-25 h-75 text-end ptag">Description</p>
          <textarea
            onChange={(e) =>
              dispatch(handleRecipeState("description", e.target.value))
            }
            value={description}
            className="w-75 h-75 p-1 text-wrap border"
            type="text"
            rows={5}
            placeholder="Enter Description"
          />
        </div>
        <div className="row  m-3">
          <p className="w-25 h-75 text-end ptag">Direction</p>
          <textarea
            onChange={(e) =>
              dispatch(handleRecipeState("direction", e.target.value))
            }
            value={direction}
            className="w-75 h-75 p-1 text-wrap border"
            type="text"
            rows={5}
            placeholder=""
          />
        </div>
        {error !== "" && (
          <p style={{ color: "red", alignItems: "center" }}>{error} </p>
        )}

        <div className="m-3">
          <button
            onClick={handleSubmit}
            style={{
              marginRight: "50px",
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
              marginBottom: "40px",
            }}
          >
            {loading ? "Adding Recipe ..." : "Save"}
          </button>

          <button
            onClick={onclose}
            style={{
              marginRight: "50px",
              backgroundColor: "Red",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
              marginBottom: "40px",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
