import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Layout/Header";
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
      const response = await axios.get(
        `http://localhost:5005/web-design/${collectiveWebDesignDetail}`
      );
      setCollectiveWebDesignDetail(response.data);
    } catch (error) {
      console.eror(
        "Error fetching CollectivecollectiveWebDesignDetail data:",
        error
      );
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
    <div>
      <div>
        <Header />
      </div>
      <div className="px-4 my-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          key={collectiveWebDesignDetail._id}
        >
          <img
            src={collectiveWebDesignDetail.imageUrl}
            className="bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          />
          <div className="">
            <div className="flex justify-between">
              <h3 className="py-8 font-bold tracking-wide text-3xl text-left text-gray-800 uppercase">
                {collectiveWebDesignDetail.name}
              </h3>
            </div>
            <div className="mb-16 text-xl text-gray-700 sm:mx-auto text-left">
              <h6>{collectiveWebDesignDetail.description}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
