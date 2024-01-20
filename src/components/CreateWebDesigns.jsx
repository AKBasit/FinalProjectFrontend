import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function CreateWebDesigns() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleCreateWebDesign = async (e) => {
    e.preventDefault();
    console.log("user in create func", user);
    const webDesignCreate = {
      name: name,
      description: description,
      imageUrl: imageUrl,
      owner: user.id,
    };
    const { data } = await axios.post(
      "http://localhost:5005/web-design/",
      webDesignCreate
    );
    console.log("web design successfully created", data);
    navigate("/profile");
  };
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

  return (
    <form
      onSubmit={handleCreateWebDesign}
      method="POST"
      action="/"
      encType="multipart/form-data"
    >
      <label>
        Web Design Name:
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
        Web Design Description:
        <input
          name="description"
          value={description}
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>

      <label>
        Web Design Image:
        <input
          type="file"
          name="imageUrl"
          value={imageUrl}
          accept="image/png, image/jpg"
          placeholder="Upload your image..."
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
        {imageUrl == "" || imageUrl == null ? (
          ""
        ) : (
          <img width={100} height={100} src={imageUrl} />
        )}
      </label>
      <button className="">Create Web Design</button>
    </form>
  );
}
