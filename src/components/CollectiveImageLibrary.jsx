import Header from "./Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CollectiveImageLibrary = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/image");
      console.log(response);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

 const handleChangeShared = async (item) => {
  const newImage = {
    name: item.name,
    imageUrl: item.imageUrl,
    contributor: item.contributor,
    owner: item.owner,
    shared: !item.shared
  }

  try {
    const response = await axios.put('http://localhost:5005/image/shared/' + item._id, newImage);
    console.log(response);
    fetchData()
  } catch(error) {
    console.log(error)
  }
 }

  return (
    <div>
      <h1>Collective Image Library</h1>
      {images.map((image) => {
        return (
          <div key={image._id}>
            <img src={image.src} height="200" />
            <p>{image.name}</p>
            <button onClick={() => handleChangeShared(image)}>{image.shared ? 'Shared' : 'Not Shared'}</button>
          </div>
        );
      })}
    </div>
  );
};

export default CollectiveImageLibrary;


