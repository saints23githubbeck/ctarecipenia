import { IoMdArrowDropleft } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleRecipeState,
  setRecipesError,
  updateRecipeByAdmin,
} from "../../appState/actions/recipeAction";
import { categories } from "./data";

const EditRecipe = () => {
  const { state } = useLocation();
  console.log(state, "actual state back");

  const dispatch = useDispatch();
  const {
    slug,
    _id,
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

  const level = [{ name: "Easy" }, { name: "Medium" }, { name: "Hard" }];

  const handleSubmit = () => {
    const payload = {
      slug: slug,
      _id: _id,
      title: title,
      category: category,
      image: image,
      description: description,
      videoLink: videoLink,
      direction: direction,
      metaDescription: metaDescription,
      featuredImage: featuredImage,
      permLink: permLink,
      difficulty: difficulty,
      prepareTime: prepareTime,
      serves: serves,
      calories: calories,
      tags: tags,
      facts: facts,
      additionalInfo: additionalInfo,
      ingredients: ingredients,
      cookTime: cookTime,
    };
    dispatch(updateRecipeByAdmin(payload));
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(setRecipesError(""));
    }, 4000);
  }, [error]);

  useEffect(() => {
    if (state !== null) {
      Object.keys(state).forEach((field) => {
        dispatch(handleRecipeState(`${field}`, state[field]));
      });
    }
  }, [state]);

  function reset() {
    window.location.reload();
  }
  return (
    <div>
      <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Edit Recipe {state._id}</h5>
        <Link to={-1}>
          <h6>
            <IoMdArrowDropleft /> Back
          </h6>
        </Link>
      </div>

      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Category</p>
        <input
          onChange={(e) =>
            dispatch(handleRecipeState("category", e.target.value))
          }
          value={category}
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder={state.category}
        />
        {/* {categories.map((item, index) => (
               <option  key={index} value={item.name}>{item.name}</option>
            
            ))}</select> */}
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
          onChange={(e) => dispatch(handleRecipeState("title", e.target.value))}
          value={title}
          className="w-75 h-75 p-1 border"
          type="tel"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder={state.title}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Permlink</p>
        <input
          onChange={(e) =>
            dispatch(handleRecipeState("permlink", e.target.value))
          }
          value={permLink}
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.permLink}
        />
      </div>
      <hr className="m-3" />

      <div className="row m-3">
        <p className="w-25 h-75 text-end ptag">Difficulty</p>
        <div className="d-flex justify-content-between   w-75 h-75 p-1">
          {level.map((item, index) => (
            <div key={index} className="">
              <input type="radio" value={item.name} />
              <label value={item.name}>{item.name}</label>
            </div>
          ))}
        </div>
      </div>

      <hr className="m-3" />

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
            placeholder={state.prepareTime}
          />
        </div>
        <div className="w-50 row m-1">
          <p className="w-25 h-75 text-end ptag px-4">Cooking Time</p>
          <input
            onChange={(e) =>
              dispatch(handleRecipeState("cookingTime", e.target.value))
            }
            value={cookTime}
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder={state.cookTime}
          />
        </div>
      </div>
      <hr className="m-3" />

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
            placeholder={state.serves}
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
            placeholder={state.calories}
          />
        </div>
      </div>
      <hr className="m-3" />

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
          placeholder={state.description}
        />
      </div>

      <hr className="m-3" />

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
          placeholder={state.direction}
        />
      </div>

      <hr className="m-3" />
      <div className="m-3">
        <Link to={-1}>
          <button
            onClick={handleSubmit}
            style={{
              marginRight: "50px",
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
              marginBottom: "40px",
            }}
          >
            {loading ? "Editing Recipe ..." : "Save"}
          </button>
        </Link>
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "orange",
            border: "none",
            borderRadius: "5px",
            padding: 10,
            color: "#fff",
            width: "100px",
            fontSize: 16,
            marginBottom: "40px",
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default EditRecipe;
