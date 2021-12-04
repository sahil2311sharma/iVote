import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './styles/footer.css'
import { BsFacebook, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";


const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 bg-dark text-white op">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
          <h5 className="title">Product</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Business</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Features</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pricing</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Mobile</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Company</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Team</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sign-In</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Learn More</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Support</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Developers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Program</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Voting</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Connect With Us</h5>
            <ul>
              <li className="list-unstyled">
              <a href="http://facebook.com"><BsFacebook /> Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><BsGoogle /> Google</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><BsGithub /> Github</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><BsYoutube /> Youtube</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p className="text-white">© 2021 Copyright: i-Vote.com</p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;