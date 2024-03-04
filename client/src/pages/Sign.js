import React from "react";
import Layout from "../components/layout/Layout";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <Layout>
      <div className="main">
        <div className="form-div">
          <form method="post" action="#">
            <h2>Log In </h2>
            <p className="slogan">
              And Enjoy Happy Shopping{" "}
              <spam>
                {" "}
                <TiShoppingCart />
              </spam>
            </p>
            <div className="input-field">
              <input
                type="email"
                placeholder="Enter Your Email"
                id="email"
                required
                autoComplete="off"
              />
            </div>

            <div className="input-field">
              <input
                type="password"
                placeholder="Enter Your Password"
                id="password"
                required
                autoComplete="off"
              />
            </div>

            <div className="form-links">
              <div className="input-check">
                <input type="checkbox" id="remember" />
                <lable htmlFor="remember">Remember Me</lable>
              </div>
              <div className="fogot-pass">
                <Link to="/forgot" tabIndex="-1">
                  {" "}
                  Forgot Password ?
                </Link>
              </div>
            </div>

            <div className="login-btn">
              <button> Log in </button>
            </div>
            <div className="create-account">
              <p>
                Don't Have an account{" "}
                <spam>
                  {" "}
                  <Link to="/signup" tabIndex="-1">
                    Click Here
                  </Link>
                </spam>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Sign;
