import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from '../../../appState/auth/actions';
import styles from "../../../assets/css/Header.module.css";
import {
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";
const Header = () => {
 
  const dispatch = useDispatch();
  const loggedIn = useSelector((state)=> state.loggedIn);
 
  let data = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")):null;
  console.log(data, "1st user from head log");
  const [user, setUser] = useState(data?.user);

  useEffect(()=> {
    setUser(localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).user:null);
  },[loggedIn])


  const handlelogOut = ( ) => {
    console.log("user l0gout from head log")
    dispatch(logOut());
  }


  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={styles.menu}>
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link as={NavLink} to="/">
              <span className={styles.logo}>Recipemania</span>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/" className={styles.itemNav}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/recipes" className={styles.itemNav}>
                Recipes
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/categories"
                className={styles.itemNav}
              >
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-us" className={styles.itemNav}>
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/community" className={styles.itemNav}>
                Community
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className={styles.itemNav}>
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Nav.Link className={styles.itemNav}>
                <i className="fas fa-search"></i>
              </Nav.Link>
              {user ?(
                <div className={styles.itemNav}>
                  
                  <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle 
                    id="dropdown-autoclose-true" 
                    style={{background: "inherit", border: "none"}}>
                      <i className="fas fa-user"></i> {user.username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="mt-3">
                      <Dropdown.Item href="#">Profile</Dropdown.Item>
                      <Dropdown.Item href="/addrecipe">ADD RECIPE</Dropdown.Item>   
                      <div onClick={handlelogOut} className={styles.itemNav}>
                        <Button className={styles.recipebtn}>Log Out</Button>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ):(
                <Nav.Link as={NavLink} to="/login" className={styles.itemNav}>
                  {/* <i className="fas fa-user"></i>  */}
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;