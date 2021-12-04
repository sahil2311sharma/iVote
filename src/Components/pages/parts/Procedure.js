import React from "react";

import Navi from "../parts/Navi";
import "../styles/user.css";
import Video from "./video";
import { Button } from "react-bootstrap";

const Procedure = () => {
  return (
    <div className="whole_page_container">
      <Navi />
      <div className="procedure">
        <div className="inner">
          <h1>Procedure Of Voting</h1>
          <Video className="videoo" videoId="YVgfHZMFFFQ" />
          <div>
            <div className="container-grid">
              Create Metamask Account
              <Button
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                className="buttone"
                target="_blank"
              >
                Create
              </Button>
            </div>
            <hr style={{ height: "20px" }} className="horizoon" />
            <div>
              <Button href="/faucet" className="ml-4 btn">
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Procedure;
