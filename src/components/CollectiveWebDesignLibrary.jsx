import Header from "./Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CollectiveWebDesignLibrary = () => {
  const [loading, setLoading] = useState(true);
  const [webdesign, setWebdesign] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/web-design");
      console.log(response);
      setWebdesign(response.data);
    } catch (error) {
      console.error("Error fetching webdesign data:", error);
    }
  };

 const handleChangeShared = async (item) => {
  const newWebdesign = {
    name: item.name,
    imageUrl: item.imageUrl,
    contributor: item.contributor,
    owner: item.owner,
    shared: !item.shared
  }

  try {
    const response = await axios.put('http://localhost:5005/webDesign/shared/' + item._id, newWebdesign);
    console.log(response);
    fetchData()
  } catch(error) {
    console.log(error)
  }
 }

  return (
    <div>
      <h1>Collective Webdesign Library</h1>
      {webdesign.map((webdesign) => {
        return (
          <div key={webdesign._id}>
            <img src={webdesign.src} height="200" />
            <p>{webdesign.name}</p>
            <button onClick={() => handleChangeShared(webdesign)}>{webdesign.shared ? 'Shared' : 'Not Shared'}</button>
          </div>
        );
      })}
    </div>
  );
};

export default CollectiveWebDesignLibrary;
