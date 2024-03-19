import React from "react";
import Layout from "../components/layout/Layout";
import { FaMobileAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Contactus = () => {
  // Contact Information
  const contactInfo = [
    { icon: <FaClock />, text: "Time: 24/7 a Week" },
    { icon: <MdEmail />, text: "Email: Info@ShopSwifly.com" },
    { icon: <FaMobileAlt />, text: "Phone: +241 789256 3773" },
    { icon: <FaLocationDot />, text: "Address: 15205 North Kierland Blvd. Suite 100",
    },
  ];

  return (
    <Layout>
      <div className="contact-main">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083.288210189334!2d-111.93286698349134!3d33.62467946850527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7415dbeab47f%3A0x2f77d3af9c637569!2s15205%20N%20Kierland%20Blvd%20%23%20100%2C%20Scottsdale%2C%20AZ%2085254%2C%20USA!5e0!3m2!1sen!2s!4v1709734675710!5m2!1sen!2s"
            width="90%"
            height="620px"
            style={{ border: "0" }}
            title="Google Map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-info">
          <h2>Get In Touch With Us</h2>
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-line">
              <p>
                <span>{item.icon}</span>
                {item.text}
              </p>
            </div>
          ))}
          <div className="contact-bttn">
            <button className="login-register-btn">
              <NavLink to="/signin" className="nav-link">
                Login
              </NavLink>
            </button>
            <button className="login-register-btn">
              <NavLink to="/signup" className="nav-link">
                Register
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contactus;
