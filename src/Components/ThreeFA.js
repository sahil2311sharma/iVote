import React from "react";
import "./styles/ThreeFA.css";
import ParticleBackground from "./particle/Particle_Contact";
import axios from "axios";

const ThreeFA = ({ name, setAuthenticated, twoFAauth }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    if (localStorage.getItem("twoFAauth")) {
      axios
        .post("/api/recognise_face", { name: localStorage.getItem("name") })
        .then((response) => {
          console.log(response.data);
          if (response.data.authenticated === true) {
            setAuthenticated(true);
            localStorage.setItem("authenticated", true);
            alert("Authentication Successful!");

            redirect();
          } else {
            alert("Cannot Recognise :( Try Sitting Properly.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("User not authenticated for second factor of authentication.");
      redirectBack();
    }
  };

  const redirectBack = () => {
    window.location = "http://localhost:3000/twoFA";
  };
  const redirect = () => {
    window.location = "http://localhost:3000/user";
  };
  return (
    <div className="contact_pageeee">
      <div id="contact" className="center">
        <div className="Particle_screen_1" id="particle">
          <ParticleBackground />
          <div id="text_div center_all">
            <div className="center_all">
              <div>
                <h1>Facial Recognition Model</h1>
              </div>
              <div>
                <input
                  type="button"
                  className="web-cam btn"
                  value="Click Here to Scan Your Face "
                  onClick={handleSubmit}
                />
              </div>
              <br />
              <br />
              <div>
                <p>
                  Press <b>Q</b> to quit window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThreeFA;
