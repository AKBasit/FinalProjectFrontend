import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const WebDesignContext = createContext();

const WebDesignWrapper = ({ children }) => {
  const [webDesigns, setWebDesigns] = useState([]);
  const { user } = useContext(UserContext);
  const getWebDesigns = async () => {
    const { data } = await axios.get(
      "http://localhost:5005/webdesigns/allWebdesigns",
      {
        headers: {
          currentuser: user.id,
        },
      }
    );
    console.log("response with all web designs", data);
    setWebDesigns(data);
  };

  return (
    <WebDesignContext.Provider
      value={{ webDesigns, setWebDesigns, getWebDesigns }}
    >
      {children}
    </WebDesignContext.Provider>
  );
};
export { WebDesignContext, WebDesignWrapper };
