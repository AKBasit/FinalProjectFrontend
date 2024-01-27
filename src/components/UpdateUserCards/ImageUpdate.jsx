import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ImageUpdate() {
  const [name, setName] = useState("");
  const [contributor, setContributor] = useState("");
  const { imageId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/image/${imageId}`
        );
        const foundImage = response.data.data; // Adjust this based on your API response structure
        console.log("found image", foundImage);
        setName(foundImage.name);
        setContributor(foundImage.contributor);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImage();
  }, [imageId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedImage = {
      name: name,
      contributor: contributor,
    };

    try {
      const response = await axios.put(
        `http://localhost:5005/image/${imageId}`,
        updatedImage
      );
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Update Image</h2>
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
          Contributor:
          <input
            value={contributor}
            placeholder="contributor"
            onChange={(event) => {
              setContributor(event.target.value);
            }}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default ImageUpdate;
