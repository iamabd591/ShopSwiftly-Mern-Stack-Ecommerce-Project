import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "100vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
}
