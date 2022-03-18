import React from 'react'
import {
  Link
} from "react-router-dom";

import "../assets/styles/footer.scss"
import logo1 from "../assets/images/logo1.png"

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div>
          <img className='logo' src={logo1} alt="logo" />
        </div>
        <div>
          <h5>Recent Categories</h5>
          <div className='d-flex justify-content-between'>
            <ul>
              <li><Link to="/">Category6</Link></li>
              <li><Link to="/">Category4</Link></li>
              <li><Link to="/">Category5</Link></li>
              <li><Link to="/">Tea</Link></li>
              <li><Link to="/">Bread</Link></li>
              <li><Link to="/">Pork</Link></li>
              <li><Link to="/">Cookies</Link></li>
              <li><Link to="/">Ice Cream</Link></li>
            </ul>
            <ul>
              <li><Link to="/">Coffee</Link></li>
              <li><Link to="/">Category6</Link></li>
              <li><Link to="/">Category6</Link></li>
              <li><Link to="/">Pasta</Link></li>
              <li><Link to="/">Category6</Link></li>
              <li><Link to="/">Cupcakes</Link></li>
              <li><Link to="/">Category</Link></li>
              <li><Link to="/">Shrimp</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h5>Latest Blogs</h5>
          <ul>
            <li><Link to="/">Make your own bread</Link></li>
            <li><Link to="/">How to be healthy</Link></li>
            <li><Link to="/">Make your own bread</Link></li>
            <li><Link to="/">How to decorate cake</Link></li>
            <li><Link to="/">Make a Party</Link></li>
            <li><Link to="/">How to make shrimp</Link></li>
          </ul>
        </div>
        <div>
          <h5>Lates Recipes</h5>
          <ul>
            <li><Link to="/">Kids recipe</Link></li>
            <li><Link to="/">Garlic shrimps</Link></li>
            <li><Link to="/">Happy shrimps</Link></li>  
          </ul>
        </div>
        <div>
          <h5>Links</h5>
          <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/">Recipes</Link></li>
            <li><Link to="/">Blogs </Link></li>
            <li><Link to="/">Contact Us </Link></li>
            <li><Link to="/">Login/ Register </Link></li>
          </ul>
        </div>
        <div className='d-flex'>
          <div>
            <h5>NEWSLETTER</h5>
            <small>Sign up to receive email updates on new recipes</small>
          </div>
          <div className='d-flex'>
            <input type="text" placeholder='Your email address' />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer