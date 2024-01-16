import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextWrapper } from "./contexts/UserContext.jsx";
import App from "./App.jsx";
import { ToDoWrapper } from "./contexts/TodoContext.jsx";
import { WebDesignWrapper } from "./contexts/WebDesignContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextWrapper>
        <WebDesignWrapper>
          <ToDoWrapper>
            <App />
          </ToDoWrapper>
        </WebDesignWrapper>
      </UserContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
