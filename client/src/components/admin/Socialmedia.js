import { Link } from "react-router-dom";
import React from 'react'
import * as FaIcons  from 'react-icons/fa';

const Socialmedia = () => {
  return (
   <div>
     <h6 className="p-3">Social Media Setting</h6>
      <div className="row  m-3">
        <FaIcons.FaFacebookF className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaTwitter className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaInstagram className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaYoutube className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaTumblr className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaVine className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaPinterest className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaBehance className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaDribbble className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaReddit className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
        />
      </div>
      <hr className="m-3" />
      <div className="row  m-3">
        <FaIcons.FaLinkedin className="w-25 text-end ptag" width={20} height={20} />
        <input className="w-75 h-75 p-1 border"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="http//contact@email.com"
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
  )
}

export default Socialmedia