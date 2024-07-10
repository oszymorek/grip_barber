import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ServicesDetails from "./components/ServicesDetails";
import FinancingDetails from "./components/FinancingDetails";
import NoFoundPage from "./NoFoundPage";
import AboutUs from "./components/AboutUs";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoFoundPage />,
  },
  {
    path: "/services",
    element: <ServicesDetails />,
  },
  {
    path: "/financing",
    element: <FinancingDetails />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
