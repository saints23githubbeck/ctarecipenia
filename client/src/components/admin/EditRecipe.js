import { IoMdArrowDropleft } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const EditRecipe = () => {
  const { state } = useLocation();

  function reset() {
    window.location.reload();
  }
  return (
    <div>
      <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Edit Recipe</h5>
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
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder={state.category}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
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
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.permlink}
        />
      </div>
      <hr className="m-3" />

      <div className="row m-3">
        <p className="w-25 h-75 text-end ptag">Difficulty</p>
        <div className="d-flex justify-content-between   w-75 h-75 p-1">
          <div className="">
            <input type="radio" />
            <label>Easy</label>
          </div>
          <div className="">
            <input type="radio" />
            <label>Medium</label>
          </div>
          <div className="">
            <input type="radio" />
            <label>Hard</label>
          </div>
          <div></div>
        </div>
      </div>
      <hr className="m-3" />

      <div className="d-flex  align-items-center w-80 m-3">
        <div className="w-50 row m-1">
      <p className="w-25 h-75 text-end ptag px-4">Prepare Time</p>
          <input
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
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder={state.cookingTime}
          />
        </div>
      </div>
      <hr className="m-3" />

      <div className="d-flex  align-items-center w-80 m-3">
        <div className="w-50 row m-1">
      <p className="w-25 h-75 text-end ptag px-4">Serves</p>
          <input
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
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={5}
          placeholder="lggjhdPassw jhhdjfhfhjhf ordlggjhdPasswPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw"
        />
      </div>

      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Direction</p>
        <textarea
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={5}
          placeholder=""
        />
      </div>

      <hr className="m-3" />
      <div className="m-3">
        <Link to={-1}>
          <button
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
            Save
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
