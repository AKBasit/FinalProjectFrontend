import axios from "axios";
import { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Layout/Header";

function FontUpdate() {
  const [name, setName] = useState("");
  const [license, setLicense] = useState("");
  const { fontId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFont = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/font/${fontId}`
        );
        const foundFont = response.data.data; // Adjust this based on your API response structure
        console.log("found font", foundFont);
        setName(foundFont.name);
        setLicense(foundFont.license);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFont();
  }, [fontId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedFont = {
      name: name,
      license: license,
    };

    try {
      const response = await axios.put(
        `http://localhost:5005/font/${fontId}`,
        updatedFont
      );
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleUpdate} className="max-w-lg mx-auto mt-44">
        <h2 className="block mb-12 text-xl font-medium text-gray-900">
          Update Font
        </h2>
        <label className="block mb-2 text-xl font-medium text-gray-900">
          Font Name:
          <input
            value={name}
            placeholder="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            className="block w-full mt-2 p-4 text-gray-300 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mt-6 text-xl font-medium text-gray-900">
          Font License:
          <input
            value={license}
            placeholder="license"
            onChange={(event) => {
              setLicense(event.target.value);
            }}
            className="block mt-2 w-full p-8 text-gray-300 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <button
          type="submit"
          className={`
      relative z-0 flex mx-auto items-center gap-2 overflow-hidden rounded-lg border-[1px] 
      border-indigo-600 px-4 py-2 font-semibold
      uppercase text-indigo-800 transition-all duration-500 mt-12
      
      before:absolute before:inset-0
      before:-z-10 before:translate-x-[150%]
      before:translate-y-[150%] before:scale-[2.5]
      before:rounded-[100%] before:bg-indigo-600
      before:transition-transform before:duration-1000
      before:content-[""]

      hover:scale-105 hover:text-gray-200
      hover:before:translate-x-[0%]
      hover:before:translate-y-[0%]
      active:scale-95`}
        >
          <FiLogIn />
          Update Font
        </button>
      </form>
    </div>
  );
}
export default FontUpdate;
