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

import React from 'react';
import  ReactDOM  from 'react-dom/client';
const heading1 = React.createElement("h1", { key: 1 }, "Its form react"); // create Element
const heading2 = React.createElement("h2", { key: 2 }, "Its form react h2");
const root = React.createElement("div", {}, [heading1, heading2]); // passing multile child

const rootreact = ReactDOM.createRoot(document.getElementById("root")); // create root
rootreact.render(root); // this render method takes an element and injected in root
