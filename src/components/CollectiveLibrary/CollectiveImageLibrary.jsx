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
      <Header />
      <div className="flex-col justify-center">
        <h2 className="flex justify-center mt-36 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Welcome to the collective Images library
        </h2>
        <div className="flex justify-center my-[3%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image) => {
              return (
                <div key={image._id} className="w-full max-w-sm rounded-lg">
                  <Link to={`/image/shared/${image._id}`}>
                    <img
                      src={image.imageUrl}
                      alt={image.name}
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        height: "100%",
                      }}
                      className="h-auto max-w-full rounded-lg p-2 rounded-t-lg hover:scale-105 active:scale-65 hover:brightness-75"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollectiveImageLibrary;
