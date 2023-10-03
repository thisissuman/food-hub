export const sum = (a, b) => a + b;
// Install react testing library -- npm install --save-dev @testing-library/react
// Install Jest -- npm i -D jest
// Configure jest   -- npx jest --init
// npm run test (in will give error )
// install npm i -D jest-environment-jsdom in jest 29
// npm run test.  ( 30 files checked. -- 0 matches)
// create first test  by creating a new folder as __tests__ in coponents.
// create firtst test file. note.test.js
// configure babe; -- npm install --save-dev babel-jest @babel/core @babel/preset-env
// configure : { "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]] }  -- add this in .babelrc or babel.config.js
// Wrote our test cases expect toBe
// re run the npm run test.
// wrap the test in redux provider 
// wrap the provider in <StaticRouter> 

// lets do unit testng.
// render the Header componet.  -- after write header test
// install npm i -D @babel/preset-react for to read the jsx file for testing.
// if logo is not harrdcoded then we need to do mock.  in jest.config.js put moduleNameMapper: {    "\\.(jpg||png||svg)$":"" },
// Provider store
// run npm test.
// check the logo if its present.
// const logo = header.getByTestId("logo"); expect(logo.src).toBe( "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kfdoTQAkfzU6jov5O7b0CfQIZM1fYWPv65XEbwEcRIZcaMZuPUcuV9hwX5Ixi0_1VD8&usqp=CAU" );


// lets do intigration  testng.
// enable HMR for jest .
// "watch-test": "jest --watch"   npm run watch-test
// install toBeInTheDocument , install @testing-library/jest-dom
// test the input search  firevent