import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { PageLoader } from "../utilities/PageLoader"; when you select a specfic Font on the collective library
export default function CollectiveFontCardDetails() {
  const { fontId } = useParams();
  const [collectiveFontDetail, setCollectiveFontDetail] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/font");
      setCollectiveFontDetail(response.data);
    } catch (error) {
      console.error("Error fetching collectiveFontDetail data:", error);
    }
  };
  useEffect(() => {
    const fetchWebDesign = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5005/font/${fontId}`
        );
        setCollectiveFontDetail(response.data.data); // Update state with the fetched data as an array
        setLoading(false);
        console.log(collectiveFontDetail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWebDesign();
  }, [fontId]);
  return (
    <div key={collectiveFontDetail._id}>
      <h1>{collectiveFontDetail.name}</h1>
      <h2>{collectiveFontDetail.license}</h2>
      <img src={collectiveFontDetail.imageUrl} />
      <button>
        <a href="/profile">Profile</a>
      </button>
      <button>
        <a href="/collectiveFontLibrary">Font Library</a>
      </button>
    </div>
  );
}
