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
            Welcome to ShopSwifly! Your go-to destination for hassle-free online
            shopping. Discover a vast array of quality products from global
            brands. Experience seamless browsing, secure transactions, and swift
            worldwide shipping.
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
          <h4>Quick Links</h4>
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
                    FeadBack
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
          &copy; 2024-25 ShopSwiftly <FaShopify /> All rights reserved.
        </h4>
      </div>
    </>
  );
}
