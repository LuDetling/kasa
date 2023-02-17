import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./utils/style/style.scss";

import App from "./App";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div id="content">
      <App />
    </div>
    <Footer />
  </BrowserRouter>
);
