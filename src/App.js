import React, { createElement, lazy, Suspense, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Offers from "./components/Offers";
import Help from "./components/Help";
import Error from "./components/Error";
import RestauRantMenu from "./components/RestauRantMenu";
import userContext from "./utils/userContext";
import store from "./utils/store";
import { Provider, useDispatch } from "react-redux";
import Cart from "./components/Cart";
import FoodGallery from "./components/FoodGallery";
import LoginPage from "./components/LoginPage";


const InstaMart = lazy(() => import("./components/InstaMArt"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Its Suman",
    email: "its real email",
  });

  return (
    <Provider store={store}>
      <userContext.Provider
        value={ {
          user: user,
          setUser: setUser,
        }}
      >
        <React.Fragment>
          <Header />
          <Outlet />
          <Footer />
        </React.Fragment>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/",
        element: <FoodGallery />,
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
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // this render method takes an element and injected in root
