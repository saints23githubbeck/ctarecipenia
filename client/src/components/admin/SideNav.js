import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../../assets/images/logo2.png"
import menuBar from "../../assets/images/menu-bar-admin.png"

import dashboard from "../../assets/images/sidenav-dashboard.svg"
import settings from "../../assets/images/sidenav-settings.svg"
import slider from "../../assets/images/sidenav-slider.svg"
import users from "../../assets/images/sidenav-users.svg"
import administrator from "../../assets/images/sidenav-administrator.svg"
import normalUsers from "../../assets/images/sidenav-normalUsers.svg"
import categories from "../../assets/images/sidenav-categories.svg"
import blog from "../../assets/images/sidenav-blog.svg"
import recipes from "../../assets/images/sidenav-recipes.svg"
import advertisement from "../../assets/images/sidenav-advertisement.svg"
import newsletter from "../../assets/images/sidenav-newsletter.svg"
import pages from "../../assets/images/sidenav-pages.svg"
import logout from "../../assets/images/sidenav-logout.svg"

import cancel from "../../assets/images/cancel-admin.png"


const SideNav = () => {

  const [menuStatus, setMenuStatus] = React.useState(false)
  const [subnav, setSubnav] = React.useState(false)

  return (
    <div className='sideNav'>
      <div>
        <div className='logo_wrapper'>
          <img className='menubar' onClick={() => setMenuStatus(!menuStatus)} src={menuBar} alt="menuBar" />
          <img className='logo' src={logo} alt="logo" />
        </div>
        <div className='sideNav_contents'>
          <ul className={ menuStatus?'open':'close' }>
            <img onClick={() => setMenuStatus(!menuStatus)} className='cancel' src={cancel} alt="cancel" />
            <li>
              <Link to="/admin/dashboard" onClick={() => setMenuStatus(false)}>
                <img src={dashboard} alt="dashboard icon" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" onClick={() => setMenuStatus(false)}>
                <img src={settings} alt="settings" />
                Settings
              </Link>
            </li>
            <li>
              <Link to="/admin/slider" onClick={() => setMenuStatus(false)}>
                <img src={slider} alt="slider icon" />
                Slider
              </Link>
            </li>
            <li className='subNav_wrapper'>
              <span className='subNav d-flex justify-content-between' onClick={() => setSubnav(!subnav)}>  
                  <div>
                    <img src={users} alt="users icon" />
                    <span>Users</span>
                  </div>
                  <span>{ subnav?'∧':'∨' }</span>
              </span>
              <ul className={ subnav?'openSub':'closeSub' }>
                <li>
                  <Link to="/admin/administrator" onClick={() => setMenuStatus(false)}>
                    <img src={administrator} alt="administrator icon" />
                    Administrator
                  </Link>
                </li>
                <li>
                  <Link to="/admin/normalUsers" onClick={() => setMenuStatus(false)}>
                    <img src={normalUsers} alt="normalUsers icon" />
                    Normal Users
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/admin/categories" onClick={() => setMenuStatus(false)}>
                <img src={categories} alt="categories icon" />
                Categories
              </Link>
            </li>
            <li>
              <Link to="/admin/recipes" onClick={() => setMenuStatus(false)}>
                <img src={recipes} alt="recipes icon" />
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/admin/blog" onClick={() => setMenuStatus(false)}>
                <img src={blog} alt="blog icon" />
                Blog
              </Link>
            </li>
            <li>
              <Link to="/admin/advertisement" onClick={() => setMenuStatus(false)}>
                <img src={advertisement} alt="advertisement icon" />
                Advertisement
              </Link>
            </li>
            <li>
              <Link to="/admin/newsletter" onClick={() => setMenuStatus(false)}>
                <img src={newsletter} alt="newsletter icon" />
                Newsletter
              </Link>
            </li>
            <li>
              <Link to="/admin/pages" onClick={() => setMenuStatus(false)}>
                <img src={pages} alt="pages icon" />
                Pages
              </Link>
            </li>
            <li>
              <Link to="/admin" onClick={() => setMenuStatus(false)}>
                <img src={logout} alt="logout icon" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideNav