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
    <div>
      <Header />
      <div className="flex-col justify-center">
        <h2 className="flex justify-center mt-36 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Welcome to the collective Web Designs library
        </h2>
      </div>
      <div className="flex justify-center my-[3%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {webDesign.map((webDesign) => {
            return (
              <div key={webDesign._id} className="w-full max-w-sm rounded-lg">
                <Link to={`/web-design/shared/${webDesign._id}`}>
                  <img
                    src={webDesign.imageUrl}
                    alt={webDesign.name}
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
  );
};
export default CollectiveWebDesignLibrary;
