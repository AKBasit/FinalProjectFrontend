import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Layout/Header";
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
      const response = await axios.get(
        `http://localhost:5005/image/${imageId}`
      );
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
    <div>
      <div>
        <Header />
      </div>
      <div className="px-4 my-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          key={collectiveImageDetail._id}
        >
          <img
            src={collectiveImageDetail.imageUrl}
            className="bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          />
          <div className="">
            <div className="flex justify-between">
              <h3 className="py-8 font-bold tracking-wide text-3xl text-left text-gray-800 uppercase">
                {collectiveImageDetail.name}
              </h3>
            </div>
            <div className="mb-16 text-xl text-gray-700 sm:mx-auto text-left">
              <h6>{collectiveImageDetail.contributor}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
