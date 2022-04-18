import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropleft } from 'react-icons/io';
import React from "react";

const EditBlog = () => {
  const { state } = useLocation();

  function reset() {
    window.location.reload();
  }
  return (
    <div>
            <div className="d-flex m-3 justify-content-between">
      <h5 className="p-3" >Edit Blog</h5>
        <Link to={-1}>
          <h6><IoMdArrowDropleft  /> Back</h6>
        </Link>
      </div>

      <hr className="m-3" />

      <div className="d-flex justify-content-end m-3">
        <div className="row m-1">
          <p className="w-25 h-75 text-end ptag">Prepare Time</p>
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
        <div className="row m-1">
          <p className="w-25 h-75 text-end ptag">Cooking Time</p>
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
   placeholder={state.title}
 />
</div>
<hr className="m-3" />

<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Permlink</p>
 <input className="w-75 h-75 p-1 border"
   type="text"
   required
   id="name"
   autoComplete="name"
   autoFocus
   placeholder={state.permlink}
 />
</div>
<hr className="m-3" />

<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Short Description</p>
 <textarea className="w-75 h-75 p-1 border"
   type="text"
rows={5}
   id="name"
   autoComplete="name"
   placeholder={state.shortDesc}
 />
</div>
<hr className="m-3" />

<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Description</p>
 <textarea className="w-75 h-75 p-1 border"
   type="text"
rows={10}
   id="name"
   autoComplete="name"
   placeholder={state.desc}
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
         <img className="w-25 h-75 p-1" src={state.image} alt={state.image} style={{width: "30px", height:"30px", borderRadius:"10px"}} />
      </div>
      <hr className="m-3" />


      <div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Meta Description</p>
 <input className="w-75 h-75 p-1 border"
   type="text"
   required
   id="name"
   autoComplete="name"
   autoFocus
   placeholder={state.metaDesc}
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

export default EditBlog;