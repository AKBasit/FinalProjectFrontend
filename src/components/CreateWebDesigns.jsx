import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../contexts/UserContext";
// import axios from "axios";
import service from "../services/file-upload.service";
import { hourglass } from "ldrs";

hourglass.register();

// Default values shown

export default function CreateWebDesigns() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
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
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Web Design Name:
          <input
            name="name"
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block mb-2 text-sm font-medium text-gray-900">
          Web Design Description:
          <input
            name="description"
            value={description}
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label>
          Web Design Image:
          <input type="file" onChange={(e) => handleFileUpload(e)} />
        </label>
        <button className="">Create Web Design</button>
      </form>
    );
  }
}
