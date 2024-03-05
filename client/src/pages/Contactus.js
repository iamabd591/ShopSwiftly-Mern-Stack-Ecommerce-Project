import React from "react";
import Layout from "../components/layout/Layout";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contactus = () => {
  return (
    <Layout>
      <div className="contact-main">
        <div className="map"></div>
        <div className="contact-info">
          <h2>Get In Touch With us</h2>

          <div className="contact-line">
            <p>
              <span>
                <FaClock />
              </span>
              Time: 24/7 a Week
            </p>
          </div>

          <div className="contact-line">
            <p>
              <span>
                {" "}
                <MdEmail />
              </span>
              Email: Info@ShopSwifly.com
            </p>
          </div>

          <div className="contact-line">
            <p>
              <span>
                {" "}
                <FaMobileAlt />
              </span>
              Phone: +241 789256 3773
            </p>
          </div>

          <div className="contact-line">
            <p>
              <span>
                <FaLocationDot />
              </span>
              Address: 15205 North Kierland Blvd. Suite 100
            </p>
          </div>
          <div className="contact-bttn">
            <button className="login-register-btn">Login</button>
            <button className="login-register-btn">Register</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contactus;
