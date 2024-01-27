import Header from "../Layout/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const CollectiveWebDesignLibrary = () => {
  const [loading, setLoading] = useState(true);
  const [webDesign, setWebdesign] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/web-design");
      console.log(response);
      setWebdesign(response.data);
    } catch (error) {
      console.error("Error fetching webdesign data:", error);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-4 gap-5">
        <button>
          <a href="/profile">Profile</a>
        </button>
        <h1>Collective Webdesign Library</h1>
        {webDesign.map((webDesign) => {
          return (
            <div key={webDesign._id}>
              <Link to={`/web-design/shared/${webDesign._id}`}>
                <img
                  src={webDesign.imageUrl}
                  alt={webDesign.name}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "100%",
                  }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CollectiveWebDesignLibrary;
