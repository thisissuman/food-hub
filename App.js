import React, { createElement, lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contanct";
import Error from "./Error";
import RestauRantMenu from "./RestauRantMenu";
import LoginPage from "./LoginPage";
const InstaMart = lazy(() => import("./InstaMArt"));
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restarurant/:id",
        element: <RestauRantMenu />,
      },
      {
        path: "/insta",
        element: (
          
            <InstaMart />
          
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // this render method takes an element and injected in root
