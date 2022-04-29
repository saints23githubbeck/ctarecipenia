import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropleft } from 'react-icons/io';
import React from "react";

const EditUser = () => {
  const { state } = useLocation();
  const name = state.username.split(" ");

  function reset() {
    window.location.reload();
  }
  return (
    <div>
           <div className="d-flex m-3 justify-content-between">
      <h5 className="p-3" >Edit User</h5>
        <Link to={-1}>
          <h6><IoMdArrowDropleft  /> Back</h6>
        </Link>
      </div>

      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Usergroup</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder={state.usergroup}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Username</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.usergroup}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">First Name</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={name[0]}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Last Name</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={name[1]}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Email</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.email}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Country</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder={state.username}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Image</p>
        <input
          className="w-50 h-75 p-1 border"
          type="file"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder={state.image}
        />
        <img
          className="w-25 h-75 p-1"
          src={state.image}
          alt={state.image}
          style={{ width: "30px", height: "30px", borderRadius: "10px" }}
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Password</p>
        <input
          className="w-75 h-75 p-1 border"
          type="password"
          required
          id=""
          autoComplete="password"
          autoFocus
          placeholder="password"
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={10}
          placeholder="lggjhdPassw jhhdjfhfhjhf ordlggjhdPasswPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ord"
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

export default EditUser;