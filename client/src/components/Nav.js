import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";

import { logOut, logOutAction } from "../appState/actions/AuthAction";
import { useNavigate } from "react-router-dom";

import "../assets/styles/nav.scss";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import menuBar from "../assets/images/menu-bar.png";
import logoutLogo from "../assets/images/log-out.svg";
import dashboardLogo from "../assets/images/dashboard-logo.svg";

const Nav = ({ landingPage, setModalShow }) => {
    const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(screen > 768 ? true : false);
  const userProfile = useSelector((state) => state.user);
  const { user, isLoggedIn } = userProfile;
  
  const handleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(!menu);
  };
  const handleLogin = () => {
    setModalShow(true);
    closeMenu();
  };

  const handleLogOut = () => {
    console.log("logout from nav")
    logOutAction(navigate);
  }

  useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    if (screen > 768) {
      setMobile(false);
    } else {
      setMobile(true);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [screen]);

  return (
    <nav className={`pt-3 py-md-2 ${landingPage ? "" : "blackNav"}`}>
      <div className="nav_wrapper wrapper d-flex justify-content-between flex-column flex-md-row md-align-items-center">
        <div>
          <Link to="/">
            <img
              className="logo"
              src={landingPage || mobile ? logo1 : logo2}
              alt="logo"
            />
          </Link>
        </div>
        <div className="nav_section">
          <div
            onClick={handleMenu}
            className="menu d-flex justify-content-between align-items-center my-3 py-2 px-3 d-md-none"
          >
            <span>Menu</span>
            <img className="menuBar" src={menuBar} alt="menu bar" />
          </div>

          <ul className={`nav_items ${menu ? "open" : "close"}`}>
            <li onClick={closeMenu}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            {isLoggedIn ? (
              <li className="profile">
                <Dropdown className="d-inline">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    <span className="profile_toggle">
                      {user?.profilePic ? (
                        <img src={user?.profilePic} alt="user prifile" />
                      ) : (
                        <span>{user?.username?.split("")[0]}</span>
                      )}
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div>
                      <p>
                        <img src={dashboardLogo} alt="dashboard" />
                        <Link to="/user-dashboard">Dashboard</Link>
                      </p>
                      <p onClick={handleLogOut}>
                        <img src={logoutLogo} alt="logoutLogo" />
                        <span>Logout</span>
                      </p>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            ) : (
              <li onClick={handleLogin}>
                <span>Login / Register</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
