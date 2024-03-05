import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout/Layout";

function Signup() {
  return (
    <Layout>
      <div className="signup-main">
        <form method="post" action="#">
          <div className="personal-info">
            <h2>Personal Information</h2>
            <p>Enter Your Personal Information</p>
            <div className="name">
              <div className="first-name">
                <label>
                  First Name<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="last-name">
                <label>
                  Last Name<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  autoCapitalize="off"
                />
              </div>
            </div>
            <div className="email">
              <div>
                {" "}
                <label>
                  Email<span>*</span>
                </label>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="password-field">
              <div className="Password">
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="Cpassword">
                <label>
                  Confrim Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Confrim Password"
                  required
                  autoCapitalize="off"
                />
              </div>
            </div>
            <div className="gender">
              <label>
                Gender<span>* </span>
              </label>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
