import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function CreateWebDesigns() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleCreateWebDesign = async (e) => {
    e.preventDefault();
    console.log("user in create func", user);
    const webDesignCreate = {
      name: name,
      description: description,
      owner: user.id,
    };
    const { data } = await axios.post(
      "http://localhost:5005/webdesigns/createWebdesign",
      webDesignCreate
    );
    console.log("web design successfully created", data);
    navigate("/profile");
  };
  function convertToBase64(e) {
    console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  return (
    <form onSubmit={handleCreateWebDesign}>
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
          name="image"
          accept="image/*"
          type="file"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        {image == "" || image == null ? (
          ""
        ) : (
          <img width={100} height={100} src={image} />
        )}
      </label>
      <button className="">Create Web Design</button>
    </form>
  );
}
