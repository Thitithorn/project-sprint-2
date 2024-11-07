import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Signin from "./Signin";
import Signup from "./Signup";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Navbar",
    element: <Navbar />, 
  },
  {
    path: "/Footer",
    element: <Footer />, 
  },
  {
    path: "/Signin",
    element: <Signin />, 
  },
  {
    path: "/Signup",
    element: <Signup />, 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
