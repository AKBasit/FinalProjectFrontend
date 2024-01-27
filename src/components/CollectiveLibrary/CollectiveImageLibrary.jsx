import Header from "../Layout/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const CollectiveImageLibrary = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/image");
      console.log(response);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };
  return (
    <div>
      <h1>Collective Image Library</h1>
      {images.map((image) => {
        return (
          <div key={image._id}>
            <Link to={`/image/shared/${image._id}`}>
              <img
                src={image.imageUrl}
                alt={image.name}
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
  );
};
export default CollectiveImageLibrary;
