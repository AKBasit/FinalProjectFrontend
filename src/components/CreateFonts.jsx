import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../contexts/UserContext";
// import axios from "axios";
import service from "../services/file-font-upload.service";
import { hourglass } from "ldrs";

hourglass.register();

export default function CreateFonts() {
  const [name, setName] = useState("");
  const [license, setLicense] = useState("");
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

      const response = await service.uploadFonts(uploadData);

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
      const res = await service.createFont({
        name,
        license,
        imageUrl,
      });

      // Reset the form
      setName("");
      setLicense("");
      setImageUrl("");

      // navigate to another page
      navigate("/profile");
    } catch (error) {
      console.error("Error while adding the new font: ", error);
    }
  };

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
      <form onSubmit={handleSubmit}>
        <label>
          Font Name:
          <input
            name="name"
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Font License:
          <input
            name="license"
            value={license}
            type="text"
            onChange={(e) => {
              setLicense(e.target.value);
            }}
          />
        </label>

        <label>
          Font Image:
          <input type="file" onChange={(e) => handleFileUpload(e)} />
        </label>
        <button className="">Create Font</button>
      </form>
    );
  }
}
