import React from "react";
import {
  FaShopify,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
  FaCcApplePay,
} from "react-icons/fa";
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
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

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
            Welcome to ShopSwifly! Your go-to destination for hassle-free online
            shopping. Discover a vast array of quality products from global
            brands. Experience seamless browsing, secure transactions, and swift
            worldwide shipping.
          </p>
          <div className="Social">
            <ul>
              <li>
                <FaWhatsapp className="whatsapp" />
              </li>
              <li>
                <FaFacebook className="facebook" />
              </li>
              <li>
                <FaInstagramSquare className="instagram" />
              </li>
              <li>
                <FaLinkedin className="linked" />
              </li>
              <li>
                <FaXTwitter className="twitter" />
              </li>
              <li>
                <FaYoutube className="youtube" />
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-Nav">
          <h4>Swift Links</h4>
          <div className="links-nave">
            <div className="nav">
              <ul>
                <li>
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutus" className="nav-link">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactus" className="nav-link">
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-link">
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <NavLink to="/" className="nav-link">
                    Top Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-link">
                    Catalogs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-link">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/feadback" className="nav-link">
                    Feedback
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-link">
                    Customer Support
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-link">
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="infomation">
            <ul>
              <li>
                <p>
                  <MdEmail /> Info@ShopSwifly.com
                </p>
              </li>
              <li>
                <p>
                  <FaLocationDot /> 15205 North Kierland Blvd. Suite 100
                </p>
              </li>
              <li>
                <p>
                  <FaMobileAlt /> +241 789256 3773
                </p>
              </li>
            </ul>
          </div>
          <div className="method">
            <ul>
              <li>
                <FaCcPaypal className="paypal" />
              </li>
              <li>
                <FaCcVisa className="visa" />
              </li>
              <li>
                <SiAmericanexpress className="aexpress" />
              </li>
              <li>
                <FaCcMastercard className="mcard" />
              </li>
              <li>
                <FaGooglePay className="gpay" />
              </li>
              <li>
                <FaCcApplePay className="apay" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rights">
        <h4>
          &copy; 2024-25 ShopSwiftly <FaShopify /> All rights reserved.
        </h4>
      </div>
    </>
  );
}
