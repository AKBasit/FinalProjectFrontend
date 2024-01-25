import Header from "../Layout/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const handleChangeShared = async (item) => {
    const newFont = {
      name: item.name,
      imageUrl: item.imageUrl,
      contributor: item.contributor,
      owner: item.owner,
      shared: !item.shared,
    };

    try {
      const response = await axios.put(
        "http://localhost:5005/font/shared/" + item._id,
        newFont
      );
      console.log(response);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Collective Font Library</h1>
      {fonts.map((font) => {
        return (
          <div key={font._id}>
            <img src={font.imageUrl} height="200" />
            <p>{font.name}</p>
            <button onClick={() => handleChangeShared(font)}>
              {font.shared ? "Shared" : "Not Shared"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CollectiveFontLibrary;
