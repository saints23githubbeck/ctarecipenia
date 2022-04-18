import { Link } from "react-router-dom";
import React from 'react'

const Contact = () => {
  return (
   <div> 
     <h6 className="p-3">Contact Information Setting</h6>
       <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Webmaster Email</p>
        <input className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="info@food.com"
        />
      </div>
      <hr className="m-3" />

       <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Contact form Email</p>
        <input className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="contact@email.com"
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Phone</p>
        <input className="w-75 h-75 p-1 border"
          type="tel"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder="+233444641314"
        />
      </div>
      <hr className="m-3" />
     
      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Support</p>
        <input className="w-75 h-75 p-1 border"
          type="tel"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder="0641314"
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

export default Contact