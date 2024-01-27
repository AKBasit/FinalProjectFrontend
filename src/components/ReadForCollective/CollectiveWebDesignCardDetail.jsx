import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { PageLoader } from "../utilities/PageLoader"; when you select a specfic webdesign on the collective library
export default function CollectiveWebDesignCardDetails() {
  const { webDesignId } = useParams();
  const [collectiveWebDesignDetail, setCollectiveWebDesignDetail] = useState(
    {}
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/web-design");
      setCollectiveWebDesignDetail(response.data);
    } catch (error) {
      console.error("Error fetching CollectivewebDesignDetail data:", error);
    }
  };
  useEffect(() => {
    const fetchWebDesign = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5005/web-design/${webDesignId}`
        );
        setCollectiveWebDesignDetail(response.data.data); // Update state with the fetched data as an array
        setLoading(false);
        console.log(collectiveWebDesignDetail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWebDesign();
  }, [webDesignId]);
  return (
    <div key={collectiveWebDesignDetail._id}>
      <h1>{collectiveWebDesignDetail.name}</h1>
      <h2>{collectiveWebDesignDetail.description}</h2>
      <img src={collectiveWebDesignDetail.imageUrl} />
      <button>
        <a href="/profile">Profile</a>
      </button>
      <button>
        <a href="/CollectiveWebDesignLibrary">Web-Design Library</a>
      </button>
    </div>
  );
}
