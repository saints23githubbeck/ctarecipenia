import React from 'react';
import styles from '../../../assets/css/Header.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                    <Navbar.Brand as={NavLink} to="/">
                        <span className={styles.logo}>Recipemania</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;