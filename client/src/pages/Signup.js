import React from "react";
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
            <div className="gender">
              <label>
                Date of Birth<span>* </span>
              </label>
              <input type="date" />
            </div>
          </div>

          <div className="residitional-info">
            <h2>Resedentional Information</h2>
            <p>Enter Your Resedentional Information</p>

            <div className="address-info">
              <div className="address">
                <div>
                  <label>
                    Social Sercurity No<span>*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="SSN\CNIC\PASSPORT NO"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>
              <div className="address">
                <div>
                  <label>
                    Address<span>*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>
              <div className="Street">
                <div className="street-no">
                  {" "}
                  <label>
                    Street No<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Street No"
                    required
                    autoCapitalize="off"
                  />
                </div>
                <div className="Postal">
                  <label>
                    Postal Code<span>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Postal Code"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>
              <div className="Codes">
                <div className="code">
                  <label>
                    Country Code<span>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Code"
                    required
                    autoCapitalize="off"
                  />
                </div>
                <div className="phone-no">
                  <label>
                    Phone No<span>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bank-info">
            <h2>Bank Information</h2>
            <p>Enter Your Banking Information</p>

            <div className="address-info">
              <div className="address">
                <div>
                  <label>
                    Bank Name<span>*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="EnterBank Name"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>
              <div className="address">
                <div>
                  <label>
                    Account Title<span>*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Account Title"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>

              <div className="address">
                <div>
                  <label>
                    Account Number<span>*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Account Number"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>

              <div className="address">
                <div>
                  <label>
                    IBN Number<span>*</span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="IBN Number"
                    required
                    autoCapitalize="off"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <button className="register-btn"> Register</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
