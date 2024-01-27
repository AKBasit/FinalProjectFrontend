import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function WebDesignUpdate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { webDesignId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWebDesign = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/web-design/${webDesignId}`
        );
        const foundWebDesign = response.data.data; // Adjust this based on your API response structure
        console.log("found web design", foundWebDesign);
        setName(foundWebDesign.name);
        setDescription(foundWebDesign.description);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWebDesign();
  }, [webDesignId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedWebDesign = {
      name: name,
      description: description,
    };

    try {
      const response = await axios.put(
        `http://localhost:5005/web-design/${webDesignId}`,
        updatedWebDesign
      );
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Update Font</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            value={name}
            placeholder="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <input
            value={description}
            placeholder="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default WebDesignUpdate;
