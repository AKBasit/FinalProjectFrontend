import Header from "../Layout/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { dotWave } from "ldrs";

dotWave.register();
const API_URL = import.meta.env.VITE_API_URL;

const CollectiveFontLibrary = () => {
  const [loading, setLoading] = useState(true);
  const [font, setFont] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/font`);
      setTimeout(() => {
        setFont(response.data);
        setLoading(false);
        console.log(response);
      }, 1200);
    } catch (error) {
      console.error("Error fetching font data:", error);
    }
  };
  return (
    <div>
      <Header />
      <div className="flex-col justify-center">
        <h2 className="flex justify-center mt-40 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Welcome to the collective Font library
        </h2>
      </div>
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
            {font.map((font) => {
              return (
                <div key={font._id} className="w-full max-w-sm rounded-lg">
                  <Link to={`/font/shared/${font._id}`}>
                    <img
                      src={font.imageUrl}
                      alt={font.name}
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
  );
};
export default CollectiveFontLibrary;
