import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function CreateFonts() {
  const [name, setName] = useState("");
  const [license, setLicense] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleCreateFont = async (e) => {
    e.preventDefault();
    console.log("user in create func", user);
    const fontCreate = {
      name: name,
      license: license,
      owner: user.id,
    };
    const { data } = await axios.post(
      "http://localhost:5005/font/",
      fontCreate
    );
    console.log("font successfully created", data);
    navigate("/profile");
  };

  return (
    <form onSubmit={handleCreateFont}>
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
      <button className="">Create Font</button>
    </form>
  );
}
