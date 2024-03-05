import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout/Layout";

function Signup_step_2() {
  return (
    <Layout>
      <div className="input-form">
        <form className="form-register" action="#" method="post">
          <h3 className="heading">Residential Information</h3>
          <p>Please Enter your Contact information to prosceed next.</p>
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
              <button className="Signup_step_2">Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Signup_step_2;
