import Header from "../Layout/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { dotWave } from "ldrs";

dotWave.register();
const API_URL = import.meta.env.VITE_API_URL;

const CollectiveImageLibrary = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/image`);
      setTimeout(() => {
        setImages(response.data);
        setLoading(false);
        console.log(response);
      }, 1200);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };
  return (
    <div>
      <Header />
      <div className="flex-col justify-center">
        <h2 className="flex justify-center mt-40 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Welcome to the collective Images library
        </h2>
        <div className="flex justify-center my-[3%]">
          {loading ? (
            <div className="flex justify-center py-40">
              <l-dot-wave
                className=""
                size="47"
                speed="1"
                color="black"
              ></l-dot-wave>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image) => {
                return (
                  <div key={image._id} className="w-full max-w-sm rounded-lg">
                    <Link to={`/image/shared/${image._id}`}>
                      <img
                        src={image.imageUrl}
                        alt={image.name}
                        className="w-full h-72 object-cover rounded-lg  hover:scale-105 active:scale-65 hover:brightness-75"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CollectiveImageLibrary;
