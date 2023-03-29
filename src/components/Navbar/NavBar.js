import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import "./NavBar.css";
import Shop from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav-links">
            <Nav.Link href="#">CAFES</Nav.Link>
            <Nav.Link href="#">VAJILLA</Nav.Link>
            <Nav.Link href="#">CAFETERAS</Nav.Link>
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