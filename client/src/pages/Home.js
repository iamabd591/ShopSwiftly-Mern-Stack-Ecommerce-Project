import React from "react";
import Layout from "../components/layout/Layout";
import { dataList } from "../data/productData.js";

const Card = ({ id, image, title, price, stock }) => (
  <div key={id} className="card">
    <div className="card-img">
      <img src={image} alt={title} />
    </div>
    <div className="card-detail">
      <div className="card-heading">
        <h4>{title}</h4>
      </div>
      <div className="card-price">
        <p>
          Price:<span className="price">${price}</span>
        </p>
        <p>
          Stock :
          <span className="stock" style={{ color: stock ? "green" : "red" }}>
            {stock ? "Available" : "Not Available"}
          </span>
        </p>
      </div>
    </div>
    <div className="cart-btn">
      <button>Add To Cart</button>
    </div>
  </div>
);

const Home = () => {
  return (
    <Layout>
      <div className="home-main">
        <div className="first-section">
          {dataList.map((product) => (
            <Card {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
