import React from "react";
import "./styles/navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navbars = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-expand-sm fixed-top skjlsdjgbsdjfbsdfv"
      >
        <Container className="justify-content-center">
          <Nav.Link className="web-logo2" href="/"></Nav.Link>
          <Navbar.Brand href="/">i-Vote</Navbar.Brand>
        </Container>

        <Container className="p">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/ElectionParties">View Election</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbars;
