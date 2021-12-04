import React, { useState } from "react";
import "./styles/signin.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleBackground from "./particle/ParticleBackground";
import "./styles/contact.css";
import axios from "axios";
import Typical from "react-typical";
const steps = [
  "We Concern Your Privacy 👌",
  50,
  "So that's why we build this platform ",
  50,
  "It's a 3 Factor Authentication System",
  50,
  "Each Vote Matters ❤️",
  1000,
];

// export default class Signin extends React.Component{
const Signin = ({ setOneFAauth, setName }) => {
  const [id, setId] = useState("");
  const [dob, setDob] = useState("");

  const login = (event) => {
    event.preventDefault();
    console.log(dob);
    axios
      .post("/api/login", { id: id, dob: dob })
      .then((response) => {
        if (response.data.authenticated === true) {
          setOneFAauth(true);
          localStorage.setItem("oneFAauth", true);
          setName(response.data.name);
          localStorage.setItem("name", response.data.name);
          alert(response.data.message);
          redirect();
        } else {
          alert(response.data.message);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const redirect = () => {
    window.location = "http://localhost:3000/twoFA";
  };
  // render(){
  return (
    <div className="contact_pageeee">
      <div id="signin" className="center">
        <div className="Particle_screen" id="particle">
          <Navbar />
          <ParticleBackground />
          <div id="text_div center_all">
            <div className="center_all">
              <div className="grid-container">
                <div className="grid-item-1">
                  <h3 className="typical_upper">
                    <Typical
                      wrapper="span"
                      steps={steps}
                      loop={Infinity}
                      className={"caca"}
                    />
                  </h3>
                </div>

                <div className="grid-item grid-item-2">
                  <form className=" form_format">
                    <div>
                      <h3 style={{ textAlign: "center" }}>Log In</h3>
                      <label className="left-shigt">ID</label>
                      <input
                        placeholder="Enter your ID"
                        type="text"
                        name="id"
                        className="form-control"
                        onChange={(event) => setId(event.target.value)}
                      />

                      <label className="left-shigt">DOB</label>
                      <input
                        placeholder="Enter your DOB"
                        type="date"
                        name="user_email"
                        className="form-control"
                        onChange={(event) => setDob(event.target.value)}
                      />

                      <div className="submit_btn_d">
                        <input
                          className="submit_btn"
                          type="submit"
                          value="Login"
                          onClick={login}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_div">
          <Footer />
        </div>
      </div>
    </div>
  );
  // }
};
export default Signin;
