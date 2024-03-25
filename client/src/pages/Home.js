import React from "react";
import Layout from "../components/layout/Layout/";
import dataList from "../data/productData.js";
import Card from "../components/layout/card";
import Banner from "../components/layout/banner/index.jsx";

const Home = () => {
  // Filter out the banner and card images separately
  const cardImages = dataList.filter((product) => product.type === "product");
  const bannerImage = dataList.find((product) => product.type === "banner");
  const remainingImages = dataList.filter(
    (product) => product.type !== "banner" && product.type !== "product"
  );

  return (
    <Layout>
      <div className="home-main">
        <div className="first-section">
          {/* Render first 9 card images */}
          {cardImages.slice(0, 9).map((product) => (
            <Card key={product.id} {...product} />
          ))}
          {/* Render the banner image */}
          {bannerImage && <Banner key={bannerImage.id} {...bannerImage} />}
          {/* Render the rest of the images */}
          {remainingImages.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
