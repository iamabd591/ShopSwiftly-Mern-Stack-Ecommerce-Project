import React from "react";
import {
  FaShopify,
  FaXTwitter,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
  FaCcApplePay,
} from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterestSquare,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
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
                <div className="twitter icons">
                  <FaXTwitter />
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div className="pintrest icons">
                  <FaPinterestSquare />
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
          ALL Right of ShopSwiftly <FaShopify /> &copy; is Reserved-2024-25
        </h4>
      </div>
    </>
  );
}
