import React, { useState } from "react";
import "../LoginPageComponent/login.css";
import LoginImage from "../LoginPageComponent/assets/Illustration.svg";
import google from "../LoginPageComponent/assets/googleIcon.svg";
import faceBook from "../LoginPageComponent/assets/facebook.svg";
import linkedIn from "../LoginPageComponent/assets/linkedIn.svg";
import twitter from "../LoginPageComponent/assets/twitter.svg";
import { useNavigate } from "react-router-dom";
import Validation from "./Validation";
function LoginPage() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSignIn = () => {
    if (values.username === "bismina" && values.password === "123456") {
      navigate("/home");
    } else {
      alert("Invalid username or password.");
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className="main_wrapper">
      <div className="loginSide">
        <h1>Sign In</h1>
        <div className="subHeading">
          <h4>New user?</h4>
          <p>Create an account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="usernamediv">
            <input
              name="username"
              type="text"
              placeholder="Username or email"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginTop: "-6px",
                  marginBottom: "3px",
                }}
              >
                {errors.username}
              </p>
            )}
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginTop: "-6px",
                  marginBottom: "3px",
                }}
              >
                {errors.password}
              </p>
            )}
          </div>
          <div className="checkboxDiv">
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="checked"
            />
            <label for="myCheckbox">Keep me signed in</label>
          </div>
          <div>
            <button type="submit" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
        </form>

        <div class="label-container">
          <div class="label-line"></div>
          <div class="label-text">Or Sign In With</div>
          <div class="label-line"></div>
        </div>
        <div className="footerIcon">
          <img src={google} alt="google" />
          <img src={faceBook} alt="faceBook" />
          <img src={linkedIn} alt="linkedIn" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>

      <div className="imageSide">
        <img src={LoginImage} alt="login" />
      </div>
    </div>
  );
}

export default LoginPage;
