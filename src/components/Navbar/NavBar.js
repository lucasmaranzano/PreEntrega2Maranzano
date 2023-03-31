import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import "./NavBar.css";
import Shop from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="80" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav-links">
            <Link to="/category/men's clothing" className="nav-link">Cafes</Link>
            <Link to="/category/jewelery" className="nav-link">VAJILLA</Link>
            <Link to="/category/electronics" className="nav-link">CAFETERAS</Link>
          </Nav>

          <Nav>
            <Nav.Link href="#">
              <span>
                <Shop />
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
