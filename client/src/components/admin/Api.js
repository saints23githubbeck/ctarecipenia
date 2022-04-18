import React from "react";
import { Link } from "react-router-dom";

const Api = () => {
  return (
    <div>
      <h6 className="p-3">Api Setting</h6>
      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">
          Google Analytics Acount (Tracking ID)
        </p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="ex, UA-574878-1"
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Google site key</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          autoFocus
          placeholder="9668561"
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Google serect key</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="number"
          autoComplete="number"
          autoFocus
          placeholder="+233444641314"
        />
      </div>
      <hr className="m-3" />
      <div>
        <div className="row  m-3">
          <p className="w-25 h-75 text-end ptag">Crips Chat</p>
          <input
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="text"
            autoFocus
            placeholder="54678ds-ug5755-8ybbj-8777"
          />
        </div>
        <div className="text-center">
          <input type="checkbox" />
          <label>Display Crips Chat</label>
        </div>
      </div>

      <hr className="m-3" />
      <div>
        <div className="row  m-3">
          <p className="w-25 h-75 text-end ptag">Discus Comments</p>
          <input
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="text"
            autoFocus
            placeholder="loque moddja"
          />
        </div>
        <div className="text-center">
          <input type="checkbox" />
          <label>Display Discus Comments</label>
        </div>
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

export default Api;
