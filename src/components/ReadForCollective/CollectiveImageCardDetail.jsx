import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { PageLoader } from "../utilities/PageLoader"; when you select a specfic Image on the collective library
export default function CollectiveImageCardDetails() {
  const { imageId } = useParams();
  const [collectiveImageDetail, setCollectiveImageDetail] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/image");
      setCollectiveImageDetail(response.data);
    } catch (error) {
      console.error("Error fetching collectiveImageDetail data:", error);
    }
  };
  useEffect(() => {
    const fetchWebDesign = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5005/image/${imageId}`
        );
        setCollectiveImageDetail(response.data.data); // Update state with the fetched data as an array
        setLoading(false);
        console.log(collectiveImageDetail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWebDesign();
  }, [imageId]);
  return (
    <div key={collectiveImageDetail._id}>
      <h1>{collectiveImageDetail.name}</h1>
      <h2>{collectiveImageDetail.contributor}</h2>
      <img src={collectiveImageDetail.imageUrl} />
      <button>
        <a href="/profile">Profile</a>
      </button>
      <button>
        <a href="/CollectiveImageLibrary">Image Library</a>
      </button>
    </div>
  );
}
