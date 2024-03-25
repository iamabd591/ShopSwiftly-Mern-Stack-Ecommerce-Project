import React from "react";
import Layout from "../components/layout/Layout/";
import dataList from "../data/productData.js";
import Card from "../components/layout/card";
import Banner from "../components/layout/banner/index.jsx";

const Home = () => {
  return (
    <Layout>
      <div className="home-main">
        <div className="first-section">
          {dataList?.map((product) => {
            return (
              <>
                {product.type === "product" ? (
                  <Card key={product.id} {...product} />
                ) : (
                  <Banner key={product.id} {...product} />
                )}
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
