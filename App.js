/*
 * HMR (Hot module reolding)
 * File wacther algorithm
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and production build
 * Super fast build algorithm
 * Image optimization
 * Caching while development
 * Compression
 * Compatitable with older version of browser
 * HTTPS on dev
 * Port number
 * Consistent Hashing algorithm
 * Zero config
 *
 *
 *
 *
 * Transitive dependencies
 */

import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

import React from "react";
import React from 'react'

const Title = () => {
  return (
    <div>Title</div>
  )
};
const HeaderComponent = () => {
  return (
    <div>
        <Title/>
      <h2>Namste React</h2>
      <h2>This is a h2 page</h2>
    </div>
  );
};

export default Title;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>); // this render method takes an element and injected in root
