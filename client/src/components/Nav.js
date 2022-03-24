import React, { useState, useEffect } from 'react'
import {
  Link
} from "react-router-dom";


import "../assets/styles/nav.scss"
import logo1 from "../assets/images/logo1.png"
import logo2 from "../assets/images/logo2.png"
import menuBar from "../assets/images/menu-bar.png"

const Nav = ({landingPage, setModalShow}) => {

  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(screen > 768?true:false);


  const handleMenu = () => {
    setMenu(!menu)
  }
  const closeMenu = () => {
    setMenu(!menu)
  }
  const handleLogin = () => {
    setModalShow(true)
    closeMenu()
  }

  useEffect(() => {
      function handleResize() {
        setScreen(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      if(screen > 768){
        setMobile(false);
      }else{
        setMobile(true);
      }
      return () => window.removeEventListener('resize', handleResize);
  }, [screen]);
 
  return (
    <nav className={`pt-3 py-md-2 ${landingPage?"":"blackNav"}`}  >
      <div  className='nav_wrapper wrapper d-flex justify-content-between flex-column flex-md-row md-align-items-center'>
        <div>
          <Link to="/">
            <img className='logo' src={ landingPage || mobile ? logo1:logo2 } alt="logo" />
          </Link>
        </div>
        <div className='nav_section'> 
          <div 
            onClick={handleMenu} 
            className='menu d-flex justify-content-between align-items-center my-3 py-2 px-3 d-md-none'>
            <span>Menu</span>
            <img className='menuBar' src={menuBar} alt="menu bar" />
          </div>  
          <ul className={`nav_items ${menu?'open':'close'}`}>
            <li onClick={closeMenu}><Link to="/">Home</Link></li>
            <li onClick={closeMenu}><Link to="/categories">Categories</Link></li>
            <li onClick={closeMenu}><Link to="/recipes">Recipes</Link></li>
            <li onClick={closeMenu}><Link to="/blogs">Blogs</Link></li>
            <li onClick={closeMenu}><Link to="/contact-us">Contact Us</Link></li>
            <li onClick={handleLogin}><span>Login / Register</span></li>
          </ul>
        </div>
      </div>


       
    </nav>
  )
}

export default Nav