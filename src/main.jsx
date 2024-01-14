import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextWrapper } from "./contexts/UserContext.jsx";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextWrapper>
        <App />
      </UserContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
