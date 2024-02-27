import React from "react";
import Layout from "../components/layout/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="input-form">
        <form className="form-register" action="#" method="post">
          <h3 className="heading">Personal Information</h3>
          <p>
            Please enter your information and proceed to the next step so we can
            build your accounts.
          </p>
          <div className="form-name">
            <fieldset>
              <legend>First Name</legend>
              <input
                type="text"
                className="form-control"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                required
              />
            </fieldset>

            <fieldset>
              <legend>Last Name</legend>
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
              <legend>Email</legend>
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
              <legend>Password</legend>
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
              <legend>Confrim Password</legend>
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
              <legend>Address</legend>
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
              <legend>Phone</legend>
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
              <legend>Gender</legend>
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
              <legend>Social Scurity No</legend>
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
                  I Agreed With Terms & Conditions
                </label>
              </div>
            </fieldset>

            <div className="form-btn">
              <input type="submit" className="btn" name="submit" />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
