import React from "react";
import "../styles/faucet.css";
import ParticleBackground from "../../particle/Particle_Contact";
import { Button } from "react-bootstrap";
const Faucet = () => {
  return (
    <div className="contact_pageeee">
      <div id="contact" className="center">
        <div className="Particle_screen_1" id="particle">
          <ParticleBackground />
          <div id="text_div center_all">
            <div className="center_all">
              <div>
                <h1>Get Ethereum To Cast Vote</h1>
              </div>
              <div className="drop-btn-click buy-buton" />
              <div>
                <Button
                  className=" btn buy-buton"
                  href="https://faucet.rinkeby.io/"
                  target="_blank"
                >
                  Buy Faucets
                </Button>
              </div>
              <hr
                style={{ height: "20px", width: "150vh", margin: "50px, 0px" }}
                className="horizoon"
              />
              <div>
                <Button href="/ElectionParties" className="ml-4 btn buy-buton">
                  Proceed To Voting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faucet;
