import React, { createElement, lazy, Suspense, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contanct";
import Error from "./components/Error";
import RestauRantMenu from "./components/RestauRantMenu";
import userContext from "./utils/userContext";
const InstaMart = lazy(() => import("./components/InstaMArt"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Its Suman",
    email: "its real email",
  });

  return (
    <userContext.Provider
      value={{
        user: user,
        setUser:setUser
      }}
    >
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    </userContext.Provider>
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
          <Suspense>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // this render method takes an element and injected in root
