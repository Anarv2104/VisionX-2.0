import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/theme.min.css"; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);