import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout/Layout";

function Signup() {
  return (
    <Layout>
      <div className="signup-main">
        <div className="personal-info">
          <h1>Personal Information</h1>
          <p>Enter Your Personal Information</p>
          <form method="post" action="#">
            <div className="name">
              <div className="first-name">
                <lable>
                  First Name<spna>*</spna>
                </lable>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="last-name">
                <lable>
                  Last Name<spna>*</spna>
                </lable>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  autoCapitalize="off"
                />
              </div>
            </div>
            <div className="email">
              <lable>
                Email<spna>*</spna>
              </lable>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                autoComplete="off"
              />
            </div>
            <div className="password-field">
              <div className="Password">
                <lable>
                  Password<spna>*</spna>
                </lable>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="Cpassword">
                <lable>
                  Confrim Password<spna>*</spna>
                </lable>
                <input
                  type="password"
                  placeholder="Confrim Password"
                  required
                  autoCapitalize="off"
                />
              </div>
            </div>
            <div className="gender">
              <label>Gender:</label>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
