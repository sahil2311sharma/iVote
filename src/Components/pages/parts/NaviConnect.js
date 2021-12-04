import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Web3 from "web3";

const Navbars = ({ setWeb3, setAddr, web3, addr }) => {
  // const [web3, setWeb3] = useState(null);
  // const [addr, setAddr] = useState("");
  useEffect(() => {
    let web3 = new Web3(Web3.givenProvider);
    setWeb3(web3);
  }, []);

  const connect = (event) => {
    event.preventDefault();
    web3.eth.requestAccounts().then((res) => {
      setAddr(res[0]);
      web3.eth.defaultAccount = res[0];
    });
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-expand-sm bg-dark navbar-dark fixed-top skjlsdjgbsdjfbsdfv"
      >
        <Container className="justify-content-center">
          <Nav.Link className="web-logo" href="/"></Nav.Link>
          <Navbar.Brand href="/">i-Vote</Navbar.Brand>
        </Container>
        {/* <input
          placeholder="Select For The Political Party You Wish To Vote"
          type="text"
          name="password"
          className="form-control searchbar"
        /> */}
        <Container className="p">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/contact">
                Contact<span className="span_class">_</span>Us
              </Nav.Link>
              <Button href="#" className="ml-4" onClick={connect}>
                <span>{addr ? addr.substring(0, 15) : "Connect Wallet"}</span>
                {/* Connect<span className="span_class">_</span>Account */}
              </Button>
              <Button href="/" className="ml-4">
                LogOut
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbars;
