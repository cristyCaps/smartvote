import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";      // ✅ your App file
import "./index.css";             // ✅ your style file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
