import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import service from "../../services/file-upload.service";
import { hourglass } from "ldrs";
import Header from "../Layout/Header";
import { FiLogIn } from "react-icons/fi";
import blob from "../../../public/blob.mov";
import { UserContext } from "../../contexts/UserContext";

hourglass.register();

// Default values shown

export default function CreateWebDesigns() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    setLoading(true);

    try {
      const uploadData = new FormData();

      // imageUrl => this name has to be the same as in the model since we pass
      // req.body to .create() method when creating a new movie in '/api/movies' POST route
      uploadData.append("imageUrl", e.target.files[0]);

      const response = await service.uploadWebDesign(uploadData);

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
      const res = await service.createWebDesign({
        name,
        description,
        imageUrl,
        owner: user ? user.id : null,
      });

      // Reset the form
      setName("");
      setDescription("");
      setImageUrl("");

      // navigate to another page
      navigate("/profile");
    } catch (error) {
      console.error("Error while adding the new web design: ", error);
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
        <video
          src={blob}
          width="750"
          height="750"
          autoPlay
          loop
          className="opacity-30 w-1/3 flex mx-auto  absolute -z-9 left-96 top-48 -translate-x-[50%] -translate-y-[50%]"
        />
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-44">
          <label className="block mb-2 text-xl font-medium text-gray-900 ">
            Web Design Name:
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
            Web Design Description:
            <input
              name="description"
              value={description}
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="block mt-2 w-full p-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="block mt-6 text-xl font-medium text-gray-900">
            Web Design Image:
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
            Create Web Design
          </button>
        </form>
      </div>
    );
  }
}
