import React from 'react';
import styles from '../../../assets/css/Header.module.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// const homeProduct = [
//     {
//         id: 1,
//         title: "test"
//     }
// ]
const Header = () => {
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
                            <Nav.Link as={NavLink} to="/home" className={styles.itemNav} >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/recipes" className={styles.itemNav}>Recipes</Nav.Link>
                            <Nav.Link as={NavLink} to="/categories" className={styles.itemNav}>Categories</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className={styles.itemNav}>About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/community" className={styles.itemNav}>Community</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className={styles.itemNav}>Contact Us</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;