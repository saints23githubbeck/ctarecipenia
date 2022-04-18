import { IoMdArrowDropleft } from 'react-icons/io';
import { Link, useLocation } from "react-router-dom";
import React from "react";

const EditPage = () => {
  // const { state } = useLocation();

  function reset() {
    window.location.reload();
  }
  return (
    <div>
            <div className="d-flex m-3 justify-content-between">
      <h5 className="p-3" >Edit Page</h5>
        <Link to={-1}>
          <h6><IoMdArrowDropleft  /> Back</h6>
        </Link>
      </div>

      <hr className="m-3" />
{/* 
<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Recipe</p>
 <input className="w-75 h-75 p-1 border"
   type="email"
   required
   id="email"
   autoComplete="email"
   autoFocus
   placeholder={state.title}
 />
</div>
<hr className="m-3" />

<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Title</p>
 <input className="w-75 h-75 p-1 border"
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
 <p className="w-25 h-75 text-end ptag">Image</p>
 <input className="w-75 h-75 p-1 border"
   type="file"
   required
   id="phone"
   autoComplete="number"
   autoFocus
   placeholder={state.image}
 />
</div>
<hr className="m-3" /> */}
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
              marginBottom:"40px",

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
              marginBottom:"40px",

            }}
            onClick={reset}
          >
            Reset
          </button>
        </div>
    </div>
  );
};

export default EditPage;
