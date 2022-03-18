import React from 'react'
import {
  Link
} from "react-router-dom";


import "../assets/styles/nav.scss"
import logo1 from "../assets/images/logo1.png"
import logo2 from "../assets/images/logo2.png"

const Nav = ({landingPage}) => {
  return (
    <nav>
      <img src={ landingPage ? logo1:logo2 } alt="logo" />
      
      <div>   
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li>Login / Register</li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav