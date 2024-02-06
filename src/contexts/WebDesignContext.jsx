import axios from "axios";
import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

const WebDesignContext = createContext();
const API_URL = import.meta.env.VITE_API_URL;

const WebDesignWrapper = ({ children }) => {
  const [webDesigns, setWebDesigns] = useState([]);
  const { user } = useContext(UserContext);
  const getWebDesigns = async () => {
    const { data } = await axios.get(`${API_URL}/web-design/user`, {
      headers: {
        currentuser: user.id,
      },
    });
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
