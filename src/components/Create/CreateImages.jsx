import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../contexts/UserContext";
// import axios from "axios";
import service from "../../services/file-image-upload.service";
import { hourglass } from "ldrs";

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
      <form onSubmit={handleSubmit}>
        <label>
          Image Name:
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
          Image contributor:
          <input
            name="contributor"
            value={contributor}
            type="text"
            onChange={(e) => {
              setContributor(e.target.value);
            }}
          />
        </label>

        <label>
          Image:
          <input type="file" onChange={(e) => handleFileUpload(e)} />
        </label>
        <button className="">Create Image</button>
      </form>
    );
  }
}
