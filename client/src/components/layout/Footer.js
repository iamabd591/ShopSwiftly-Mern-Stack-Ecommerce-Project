import React from "react";
import {
  FaShopify,
  FaXTwitter,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
  FaCcApplePay,
  FaLocationDot,
} from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaWhatsapp,
  FaMobileAlt,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="info">
          <h2>
            ShopSwiftly{" "}
            <span>
              <FaShopify />
            </span>
          </h2>
          <p>
            Technology is the practical application of scientific knowledge to
            solve real-world problems especially in industries and everyday
            life. It includes a wide range of tools, systems, and methods to
            solve problems or perform specific tasks
          </p>
          <div className="Social">
            <ul>
              <li>
                <div className="whatsapp icons">
                  <FaWhatsapp />
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div className="facebook icons">
                  <FaFacebook />
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div className="instagram icons">
                  <FaInstagramSquare />
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div className="linked icons">
                  <FaLinkedin />
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div className="twitter icons">
                  <FaXTwitter />
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div className="youtube icons">
                  <FaYoutube />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-Nav">
          <h4>Quicl Links</h4>
          <div className="nav">
            <ul>
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  FeadBack
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Customer Support
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="payment">
          <div className="infomation">
            <ul>
              <li>
                <p>
                  <span>
                    <MdEmail />
                  </span>{" "}
                  Info@ShopSwifly.com
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  <span>
                    <FaLocationDot />
                  </span>{" "}
                  15205 North Kierland Blvd. Suite 100
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <p>
                  <span>
                    <FaMobileAlt />
                  </span>{" "}
                  +241 789256 3773
                </p>
              </li>
            </ul>
          </div>
          <div className="method">
            <ul>
              <li>
                <div className="paypal">
                  <FaCcPaypal />
                </div>
              </li>

              <li>
                <div className="visa">
                  <FaCcVisa />
                </div>
              </li>

              <li>
                <div className="aexpress">
                  <SiAmericanexpress />
                </div>
              </li>

              <li>
                <div className="mcard">
                  <FaCcMastercard />
                </div>
              </li>

              <li>
                <div className="gpay">
                  <FaGooglePay />
                </div>
              </li>

              <li>
                <div className="apay">
                  <FaCcApplePay />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rights">
        <h4>
          &copy;2024-25 ShopSwiftly <FaShopify /> All rights reserved.
        </h4>
      </div>
    </>
  );
}
