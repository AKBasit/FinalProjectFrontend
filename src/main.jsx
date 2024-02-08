import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link } from "react-router-dom";
import { UserContextWrapper } from "./contexts/UserContext.jsx";
import App from "./App.jsx";
import { WebDesignWrapper } from "./contexts/WebDesignContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextWrapper>
        <WebDesignWrapper>
          <App>
            <div>
              <Link to="/">First</Link>
              <Link to="/second">Second</Link>
            </div>
          </App>
        </WebDesignWrapper>
      </UserContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
