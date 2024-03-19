import React from "react";
import { NavLink } from "react-router-dom";
import { FaShopify, FaUserAlt, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <section className="section">
        <ul className="d-flex align-items-center">
          <li>
            <div className="logo">
              ShopSwiftly{" "}
              <span>
                <FaShopify />
              </span>
            </div>
          </li>
          <li className="serach-bar">
            <form className="d-flex">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Type To Search Products"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </li>
          <li className="account">
            <NavLink to="/signin" className="nav-link" aria-current="page">
              <p>
                Sign In / Create Account
                <span>
                  <FaUserAlt />
                </span>
              </p>
            </NavLink>
          </li>
          <li className="Shopping">
            <NavLink to="/cart" className="nav-link" aria-current="page">
              <p>
                Shopping
                <span>
                  <FaShoppingCart />
                </span>
              </p>
            </NavLink>
          </li>
        </ul>
      </section>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  | Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/women" className="nav-link">
                  | Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/men" className="nav-link">
                  | Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/baby" className="nav-link">
                  | Baby
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/jewlery" className="nav-link">
                  | Jewlery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/brand" className="nav-link">
                  | Brand
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/handmade" className="nav-link">
                  | Hand Made
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shoes" className="nav-link">
                  | Shoes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gym" className="nav-link">
                  | GYM
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sport" className="nav-link">
                  | Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/furniture" className="nav-link">
                  | Furniture
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/kitchen" className="nav-link">
                  | Kitchen
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/electronic" className="nav-link">
                  | Electronic
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/automobile" className="nav-link">
                  | AutoMobiles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Blog" className="nav-link">
                  | Other |
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
