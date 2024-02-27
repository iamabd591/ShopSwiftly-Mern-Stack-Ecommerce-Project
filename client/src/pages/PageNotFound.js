import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="d-flex align-items-center justify-content-center vh-100 notfound">
        <div className="text-center">
          <h1 className="display-1 fw-bold text-404">404</h1>
          <p className="fs-3 p-text">
            {" "}
            <span className="text-danger danger">Opps!</span> Page not found.
          </p>
          <p className="lead lead-txt">
            The page you’re looking for doesn’t exist.
          </p>
          <Link to="/" className="btn btn-primary btn-home">
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
