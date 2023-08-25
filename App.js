import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // this render method takes an element and injected in root
