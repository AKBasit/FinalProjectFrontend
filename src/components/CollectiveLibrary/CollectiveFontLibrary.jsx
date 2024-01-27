import Header from "../Layout/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const CollectiveFontLibrary = () => {
  const [loading, setLoading] = useState(true);
  const [fonts, setFonts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/font");
      console.log(response);
      setFonts(response.data);
    } catch (error) {
      console.error("Error fetching font data:", error);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-4 gap-5">
        <button>
          <a href="/profile">Profile</a>
        </button>
        <h1>Collective Font Library</h1>
        {fonts.map((font) => {
          return (
            <div key={font._id}>
              <Link to={`/font/shared/${font._id}`}>
                <img
                  src={font.imageUrl}
                  alt={font.name}
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
export default CollectiveFontLibrary;
