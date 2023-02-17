import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App";
import About from "./pages/About/About";
import Nav from "./components/Navigation";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage";
//STYLE
import "./utils/style/style.scss";
import Footer from "./components/Footer";
import Logement from "./pages/Logement/Logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/logement/:logementId",
    element: <Logement />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id="content">
      <Nav />
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
