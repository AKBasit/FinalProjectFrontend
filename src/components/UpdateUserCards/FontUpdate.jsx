import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
          license:
          <input
            value={license}
            placeholder="license"
            onChange={(event) => {
              setLicense(event.target.value);
            }}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default FontUpdate;
