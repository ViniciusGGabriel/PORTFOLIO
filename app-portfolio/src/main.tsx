import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("portfolio")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
