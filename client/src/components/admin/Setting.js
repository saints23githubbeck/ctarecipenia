import React from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div>
      <h6 className="p-3">Site Setting</h6>
      <div className="row d-flex ">
        <div className="d-flex col-6 m-3">
          <p className="w-25 h-75 text-end ptag">Language</p>
          <select className="w-75 h-75  border">
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>
        <div className=" d-flex col-5 m-3">
          <p className="w-25 h-75 text-end ptag">Direction</p>
          <select className="w-75 h-75  border">
            <option>Right to Left</option>
            <option>Left to Right</option>
          </select>
        </div>
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="Food"
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Copyright</p>
        <input className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="2022 Recipemania"
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Logo</p>
        <input className="w-50 h-75 p-1 border" type="file" placeholder="Choose File" />
        <img className="w-25 h-75 p-1" src="" alt="file" />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Favicon</p>
        <input className="w-50 h-75 p-1 border" type="file" placeholder="Choose File" />
        <img className="w-25 h-75 p-1" src="" alt="file" />
      </div>
      <hr className="m-3"  />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Time Zone</p>
        <input  className="w-75 h-75 p-1 border" 
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="Africa / Canada"
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea  className="w-75 h-75 p-1 text-wrap border" 
          type="text"
          rows={10}
          placeholder="lggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ord"
        />
      </div>
      <hr className="m-3" />
      <div className="m-3">
        <Link to="#">
          <button
            style={{
              marginRight: "50px",
              backgroundColor: "#3B3998",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
              marginBottom:"40px",
            }}
          >
            Save
          </button>
        </Link>
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "#DB2C2C",
            border: "none",
            borderRadius: "5px",
            padding: 10,
            color: "#fff",
            width: "100px",
              marginBottom:"40px",
              fontSize: 16, 
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Setting;
