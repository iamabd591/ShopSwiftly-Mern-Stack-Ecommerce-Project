import React from "react";
import Layout from "../components/layout/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="register-form">
        {/* <div className="form-image">
          <img
            src={"../images/Registration.gif"}
            alt="Description of the image"
          />
        </div> */}
        <div className="input-form">
          <form className="form-register" action="#" method="post">
            <h3 className="heading">Personal Information</h3>
            <p>Please Enter your information so we can build your account.</p>
            <div className="first-name">
              <fieldset>
                <legend>
                  First Name <span> * </span>
                </legend>
                <input
                  type="text"
                  className=" form-control"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                  required
                />
              </fieldset>
            </div>

            <div className="last-name">
              <fieldset>
                <legend>
                  Last Name <span> * </span>
                </legend>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  required
                />
              </fieldset>
            </div>

            <div className="form-email">
              <fieldset>
                <legend>
                  Email <span> * </span>
                </legend>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </fieldset>
            </div>

            <div className="form-password">
              <fieldset>
                <legend>
                  Password <span> * </span>
                </legend>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>
                  Confrim Password <span> * </span>
                </legend>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  placeholder=" Confrim Password"
                  required
                />
              </fieldset>
            </div>

            <div className="form-address">
              <fieldset>
                <legend>
                  Address <span> * </span>
                </legend>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="Address"
                  required
                />
              </fieldset>
            </div>

            <div className="form-phone">
              <fieldset>
                <legend>
                  Phone <span> * </span>
                </legend>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </fieldset>
            </div>

            <div className="form-gender">
              <fieldset>
                <legend>
                  Gender <span> * </span>
                </legend>
                <div className="form-check">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    className="form-check-input"
                  />
                  <label htmlFor="male" className="form-check-label">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="form-check-input"
                  />
                  <label htmlFor="female" className="form-check-label">
                    Female
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="form-ssn">
              <fieldset>
                <legend>
                  Social Scurity No <span> * </span>
                </legend>
                <input
                  type="text"
                  className="form-control"
                  id="SSN"
                  name="SSN"
                  placeholder="SSN\CNIC\Passport No"
                  required
                />
              </fieldset>
            </div>

            <div className="form-condition">
              <fieldset>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    className="form-check-input"
                  />
                  <label htmlFor="remember-me" className="form-check-label">
                    I Agreed With Terms & Conditions <span> * </span>
                  </label>
                </div>
              </fieldset>

              <div className="form-btn">
                <button className="btn-submit">Create Account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
