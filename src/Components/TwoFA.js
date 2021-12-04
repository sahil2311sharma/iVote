import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles/twoFA.css";
import axios from "axios";

function TwoFA({ setTwoFAauth, oneFAauth }) {
  const [secret, setSecret] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    axios
      .get("/api/get-secret")
      .then((response) => {
        console.log(response.data);
        setSecret(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (localStorage.getItem("oneFAauth")) {
      axios
        .post("/api/verify-token", { otp: token, secret: secret })
        .then((response) => {
          console.log(response.data);
          if (response.data.authenticated === true) {
            setTwoFAauth(true);
            localStorage.setItem("twoFAauth", true);
            alert("Authentication Successful!");
            redirect();
          } else {
            alert("Authentication Failed. Try Again.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("User not authenticated for first factor of authentication.");
      redirectBack();
    }
  };

  const reset = (event) => {
    event.preventDefault();
    axios
      .get("/api/get-secret")
      .then((response) => {
        console.log(response.data);
        setSecret(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const redirect = () => {
    window.location = "http://localhost:3000/threeFA";
  };

  const redirectBack = () => {
    window.location = "http://localhost:3000/";
  };
  return (
    <div className="two_fa_box">
      <header className="header_two_fa">
        {" "}
        <u>FA Authentication</u>
      </header>
      <div className="main_body_two_fa">
        <div className="main_body_two_fa_1">
          <h3>Instructions!!</h3>
          <ol>
            <li>
              Download{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_IN&gl=US"
                target="_blank"
              >
                <span className="link_Style">
                  <b>Google Authentication</b>
                </span>
              </a>{" "}
              on your mobile{" "}
            </li>
            <li>Create a new account with Setup key method.</li>
            <li>Provide the required details (name/secret key).</li>
            <li>Select the time based authentication.</li>
            <li>Submit the generated key in the form.</li>
          </ol>
          <br />
          <h4>Secret Tokens</h4>
          <div className="secret_token_css_box btn_dark">
            <input
              className="secret_token_css"
              type="text"
              name="secret_Token"
              value={secret}
              readonly
            />
            <input
              className="secret_token_submit btn reset_btn"
              type="button"
              value="Reset Token"
              onClick={reset}
            />
          </div>
          <div className="secret_token_css_box btn copy_button">
            <CopyToClipboard text={secret}>
              <input
                className="secret_token_submit"
                type="button"
                value="Copy To Clip Board"
              />
            </CopyToClipboard>
          </div>
        </div>

        <div className="main_body_two_fa_2">
          <h4>Generated OTP</h4>
          <div className="gen-otp_container">
            <div className="generated_otp">
              <input
                className="generated_otp_css"
                type="text"
                name="secret_Token"
                onChange={(event) => {
                  setToken(event.target.value);
                }}
              />
            </div>
            <div className="secret_token_css_box btn copy_button">
              <input
                className="secret_token_submit"
                value="Authenticate User"
                type="submit"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoFA;
