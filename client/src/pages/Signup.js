import React from "react";
import Layout from "../components/layout/Layout";

function Signup() {
  return (
    <Layout>
      <div className="signup-main">
        <form method="post" action="#">
          {/* Personal Information */}
          <div className="personal-info">
            <h2>Personal Information</h2>
            <p>Enter Your Personal Information</p>
            <div className="name">
              <div className="first-name">
                <label htmlFor="firstName">First Name<span>*</span></label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="last-name">
                <label htmlFor="lastName">Last Name<span>*</span></label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  autoCapitalize="off"
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email<span>*</span></label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                required
                autoComplete="off"
              />
            </div>
            <div className="password-field">
              <div className="Password">
                <label htmlFor="password">Password<span>*</span></label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="Cpassword">
                <label htmlFor="confirmPassword">Confirm Password<span>*</span></label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  autoCapitalize="off"
                />
              </div>
            </div>
            <div className="gender">
              <label>Gender<span>* </span></label>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="gender">
              <label>Date of Birth<span>* </span></label>
              <input type="date" />
            </div>
          </div>

          {/* Residential Information */}
          <div className="residitional-info">
            <h2>Residential Information</h2>
            <p>Enter Your Residential Information</p>
            <div className="address-info">
              <div className="address">
                <label htmlFor="ssn">Social Security No<span>*</span></label>
                <input
                  type="text"
                  id="ssn"
                  placeholder="SSN\CNIC\PASSPORT NO"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="address">
                <label htmlFor="address">Address<span>*</span></label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Your Address"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="Street">
                <div className="street-no">
                  <label htmlFor="streetNo">Street No<span>*</span></label>
                  <input
                    type="text"
                    id="streetNo"
                    placeholder="Street No"
                    required
                    autoCapitalize="off"
                  />
                </div>
                <div className="Postal">
                  <label htmlFor="postalCode">Postal Code<span>*</span></label>
                  <input
                    type="tel"
                    id="postalCode"
                    placeholder="Postal Code"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>
              <div className="Codes">
                <div className="code">
                  <label htmlFor="countryCode">Country Code<span>*</span></label>
                  <input
                    type="tel"
                    id="countryCode"
                    placeholder="Code"
                    required
                    autoCapitalize="off"
                  />
                </div>
                <div className="phone-no">
                  <label htmlFor="phoneNumber">Phone No<span>*</span></label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bank Information */}
          <div className="bank-info">
            <h2>Bank Information</h2>
            <p>Enter Your Banking Information</p>
            <div className="address-info">
              <div className="address">
                <label htmlFor="bankName">Bank Name<span>*</span></label>
                <input
                  type="text"
                  id="bankName"
                  placeholder="Enter Bank Name"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="address">
                <label htmlFor="accountTitle">Account Title<span>*</span></label>
                <input
                  type="text"
                  id="accountTitle"
                  placeholder="Account Title"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="address">
                <label htmlFor="accountNumber">Account Number<span>*</span></label>
                <input
                  type="text"
                  id="accountNumber"
                  placeholder="Account Number"
                  required
                  autoCapitalize="off"
                />
              </div>
              <div className="address">
                <label htmlFor="ibnNumber">IBN Number<span>*</span></label>
                <input
                  type="text"
                  id="ibnNumber"
                  placeholder="IBN Number"
                  required
                  autoCapitalize="off"
                />
              </div>
            </div>
            <div className="">
              <button className="register-btn">Register</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
