import React from "react";
import Layout from "../components/layout/Layout";
import { TiShoppingCart } from "react-icons/ti";

const Sign = () => {
  return (
    <Layout>
      <div className="main">
        <div className="form-div">
          <form method="post" action="#">
            <h2>Log In </h2>
            <p>
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

            <div className="input-check">
              <input type="checkbox" id="remember" />
              <lable htmlFor="remember">Remember Me</lable>
            </div>

            <div className="logi-btn">
              <button> Login </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Sign;
