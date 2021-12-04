import React from "react";
import '../styles/navbar.css'
import {Container, Navbar, Nav, Button} from 'react-bootstrap'

const Navbars =()=>{
    return(
      <>
        <Navbar expand="lg" className="navbar-expand-sm bg-dark navbar-dark fixed-top skjlsdjgbsdjfbsdfv">
          <Container className="justify-content-center">
            <Nav.Link className ="web-logo" href="/"></Nav.Link>
            <Navbar.Brand href="/">i-Vote</Navbar.Brand>
          </Container>
            <input placeholder="Select For The Political Party You Wish To Vote" type='text' name = "password" className ="form-control searchbar"/>
          <Container className="p">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/contact">Update<span className ="span_class">_</span>Info</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Button href="/" className="ml-4">LogOut</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};
export default Navbars;