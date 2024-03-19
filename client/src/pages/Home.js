import React from "react";
import Layout from "../components/layout/Layout";
import { dataList } from "../data/productData.js";

const Home = () => {
  return (
    <Layout>
      <div className="home-main">
        <div className="first-section">
          {dataList.map((e) => {
            return (
              <div key={e.id} className="card">
                <div className="card-img">
                  <img src={e.image} alt="Product 1" />
                </div>
                <div className="card-detail">
                  <div className="card-heading">
                    <h4>{e.title}</h4>
                  </div>
                  <div className="card-price">
                    <p>
                      Price:<span className="price">${e.price}</span>
                    </p>
                    <p>
                      Stock :
                      <span className="stock" style={{ color: e.stock ? "green" : "red" }}>
                        {e.stock ? "Avaliable" : "Not Available"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="cart-btn">
                  <button>Add To Cart</button>
                </div>
              </div>
            );
          })}

          {/* <div className="card">
            <div className="card-img">
              <img src="images/Product4.JPG" alt="Product 1" />
            </div>
            <div className="card-detail">
              <div className="card-heading">
                <h4>Chuck Taylor All Star Leater</h4>
              </div>
              <div className="card-price">
                <p>
                  Price:<span className="price">$50</span>
                </p>
                <p>
                  Stock Available:<span className="stock">Yes</span>
                </p>
              </div>
            </div>
            <div className="cart-btn">
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src="images/Product5.JPG" alt="Product 1" />
            </div>
            <div className="card-detail">
              <div className="card-heading">
                <h4>Chuck Taylor All Star Leater</h4>
              </div>
              <div className="card-price">
                <p>
                  Price:<span className="price">$50</span>
                </p>
                <p>
                  Stock Available:<span className="stock">Yes</span>
                </p>
              </div>
            </div>
            <div className="cart-btn">
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src="images/Product6.JPG" alt="Product 1" />
            </div>
            <div className="card-detail">
              <div className="card-heading">
                <h4>Chuck Taylor All Star Leater</h4>
              </div>
              <div className="card-price">
                <p>
                  Price:<span className="price">$50</span>
                </p>
                <p>
                  Stock Available:<span className="stock">Yes</span>
                </p>
              </div>
            </div>
            <div className="cart-btn">
              <button>Add To Cart</button>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
