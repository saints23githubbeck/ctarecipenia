import React, { useState } from "react";
import styles from "../../../assets/css/Header.module.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
const Header = () => {
  const { user } = useFirebase();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Nav.Link as={NavLink} to="/home" className={styles.itemNav}>
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
              <Nav.Link onClick={handleShow} className={styles.itemNav}>
                <i className="fas fa-search"></i>
              </Nav.Link>
              {user?.email ? (
                <div className={styles.itemNav}><i className="fas fa-user"></i> {user.displayName}</div>
              ) : (
                <Nav.Link as={NavLink} to="/login" className={styles.itemNav}>
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              )}

              <Nav.Link as={NavLink} to="/addrecipe" className={styles.itemNav}>
                <Button className={styles.recipebtn}>
                  <i className="fas fa-plus-circle"></i> Add Recipe
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Recipe Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Recipe Keyword"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
