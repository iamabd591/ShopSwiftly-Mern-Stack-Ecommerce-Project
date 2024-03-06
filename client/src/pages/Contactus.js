import React from "react";
import Layout from "../components/layout/Layout";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contactus = () => {
  return (
    <Layout>
      <div className="contact-main">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083.288210189334!2d-111.93286698349134!3d33.62467946850527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7415dbeab47f%3A0x2f77d3af9c637569!2s15205%20N%20Kierland%20Blvd%20%23%20100%2C%20Scottsdale%2C%20AZ%2085254%2C%20USA!5e0!3m2!1sen!2s!4v1709734675710!5m2!1sen!2s"
            width="100%"
            height="620px"
            style={{ border: "0" }}
            title="Google Map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
