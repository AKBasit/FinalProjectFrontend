import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../contexts/UserContext";
// import axios from "axios";
import service from "../../services/file-image-upload.service";
import { hourglass } from "ldrs";
import { FiLogIn } from "react-icons/fi";
import Header from "../Layout/Header";

hourglass.register();

// Default values shown

export default function CreateImages() {
  const [name, setName] = useState("");
  const [contributor, setContributor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    setLoading(true);

    try {
      const uploadData = new FormData();

      // imageUrl => this name has to be the same as in the model since we pass
      // req.body to .create() method when creating a new movie in '/api/movies' POST route
      uploadData.append("imageUrl", e.target.files[0]);

      const response = await service.uploadImage(uploadData);

      // response carries "fileUrl" which we can use to update the state
      setImageUrl(response.fileUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error while uploading the file: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await service.createImage({
        name,
        contributor,
        imageUrl,
      });

      // Reset the form
      setName("");
      setContributor("");
      setImageUrl("");

      // navigate to another page
      navigate("/profile");
    } catch (error) {
      console.error("Error while adding the new image: ", error);
    }
  };

  // const handleCreateWebDesign = async (e) => {
  //   e.preventDefault();
  //   console.log("user in create func", user);
  //   const webDesignCreate = {
  //     name: name,
  //     description: description,
  //     imageUrl: image,
  //     owner: user.id,
  //   };
  //   console.log(webDesignCreate);
  //   const { data } = await axios.post(
  //     "http://localhost:5005/web-design/",
  //     webDesignCreate
  //   );
  //   console.log("web design successfully created", data);
  //   navigate("/profile");
  // };

  // function convertToBase64(e) {
  //   console.log(e);
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     setImage(reader.result);
  //   };
  //   reader.onerror = (error) => {
  //     console.log("Error: ", error);
  //   };
  // }

  if (loading) {
    return (
      <div className="flex justify-center py-96 h-screen bg-black/5">
        <l-hourglass
          size="40"
          bg-opacity="0.1"
          speed="1.75"
          color="black"
        ></l-hourglass>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-1/3 flex mx-auto opacity-10 absolute -z-9 left-72 top-48 -translate-x-[50%] -translate-y-[50%]"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop
                id="stop1"
                stopColor="rgba(255, 113.248, 46.159, 1)"
                offset="0%"
              ></stop>{" "}
              <stop
                id="stop2"
                stopColor="rgba(172.199, 23.125, 255, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M25.9,-30.7C33.6,-24.4,39.8,-16.3,41.9,-7C44,2.3,42.1,12.7,37.2,21.9C32.4,31,24.7,38.8,15.8,40.9C6.9,43.1,-3.1,39.5,-11.9,35.2C-20.7,30.9,-28.4,25.9,-33.9,18.5C-39.3,11.2,-42.6,1.5,-41.8,-8.1C-40.9,-17.6,-35.8,-27.2,-28.2,-33.4C-20.5,-39.6,-10.3,-42.6,-0.6,-41.9C9.1,-41.2,18.2,-36.9,25.9,-30.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            stroke="url(#sw-gradient)"
          ></path>{" "}
        </svg>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-44">
          <label className="block mb-2 text-xl font-medium text-gray-900 ">
            Image title:
            <input
              name="name"
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="block w-full mt-2 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="block mt-6 text-xl font-medium text-gray-900">
            Image contributor:
            <input
              name="contributor"
              value={contributor}
              type="text"
              onChange={(e) => {
                setContributor(e.target.value);
              }}
              className="block mt-2 w-full p-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="block mt-6 text-xl font-medium text-gray-900">
            Image file:
            <input
              type="file"
              onChange={(e) => handleFileUpload(e)}
              className="block mt-2 focus:outline-none w-full text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2"
            />
          </label>
          <button
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
            Create Image
          </button>
        </form>
      </div>
    );
  }
}
