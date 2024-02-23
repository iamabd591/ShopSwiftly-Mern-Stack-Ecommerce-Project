import React from "react";
import { NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa6";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
export default function Header() {
  return (
    <>
      <section>
        <ul>
          <li>
            {" "}
            <div className="logo">
              ShopSwiftly{" "}
              <spam>
                <FaShopify />
              </spam>
            </div>
          </li>

          <li>
            <div className="serach-bar">
              <form className="d-flex">
                <input
                  className="form-control me-3"
                  type="search"
                  placeholder="Type To Search Products"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </li>

          <li>
            <div className="account">
              <div className="nav-item">
                <NavLink to="/signin" className="nav-link" aria-current="page">
                  Sign In Or Create Account
                  <span>
                    <FaUserAlt />
                  </span>
                </NavLink>
              </div>
            </div>
          </li>

          <li>
            <div className="Shopping">
              <div className="nav-item">
                <NavLink to="/cart" className="nav-link" aria-current="page">
                  Shopping
                  <span>
                    <FaShoppingCart />
                  </span>
                </NavLink>
              </div>
            </div>
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
                <NavLink to="/women" className="nav-link" aria-current="page">
                  | Women
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/men" className="nav-link">
                  | Men
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/baby" className="nav-link" aria-current="page">
                  | Baby
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/jewlery" className="nav-link" tabIndex="-1">
                  | Jewlery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/brand" className="nav-link" tabIndex="-1">
                  | Brand
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/handmade" className="nav-link" tabIndex="-1">
                  | Hand Made
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/shoes" className="nav-link" tabIndex="-1">
                  | Shoes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/gym" className="nav-link" tabIndex="-1">
                  | GYM
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/sport" className="nav-link" tabIndex="-1">
                  | Sports
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/furniture" className="nav-link" tabIndex="-1">
                  | Furniture
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/kitchen" className="nav-link" tabIndex="-1">
                  | Kitchen
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/accessories" className="nav-link" tabIndex="-1">
                  | Accessories
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/electronic" className="nav-link" tabIndex="-1">
                  | Electronic
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/automobile" className="nav-link" tabIndex="-1">
                  | AutoMobiles
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Blog" className="nav-link" tabIndex="-1">
                  | Blog |
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
