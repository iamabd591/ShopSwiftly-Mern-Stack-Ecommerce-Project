import React from "react";
import Layout from "../components/layout/Layout/";
import { dataList } from "../data/productData.js";
import Card from "../components/layout/card";

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
