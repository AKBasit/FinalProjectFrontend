import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Layout/Header";

export default function ImageCardDetails() {
  const { imageId } = useParams();
  const [imageDetail, setImageDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/image/${imageId}`
      );
      setImageDetail(response.data);
    } catch (error) {
      console.error("Error fetching imageDetail data:", error);
    }
  };

  const handleChangeShared = async (item) => {
    const newImage = {
      name: item.name,
      imageUrl: item.imageUrl,
      contributor: item.contributor,
      owner: item.owner,
      shared: !item.shared,
    };

    try {
      const response = await axios.put(
        "http://localhost:5005/image/shared/" + item._id,
        newImage
      );
      console.log(response);
      fetchData();
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5005/image/${imageId}`
        );
        setImageDetail(response.data.data); // Update state with the fetched data as an array
        setLoading(false);
        console.log(imageDetail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImage();
  }, [imageId]);

  //   useEffect(() => {
  //     if (webDesigns) {
  //       const webDesignData = webDesign.find((element) => {
  //         if (element.id == imageId) {
  //           return true;
  //         }
  //       });
  //       console.log(webDesignData);
  //       setImageDetail(webDesignData);
  //     }
  //   }, [imageId]);

  const handleDelete = async (id) => {
    try {
      //make an axios call to the back to delete the todo as well
      const { data } = await axios.delete(`http://localhost:5005/image/${id}`);
      console.log("image was deleted ", data);
      navigate(-1);
    } catch (err) {
      console.log("there was an error deleting", err);
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <h2 className="flex justify-center mt-44 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Your image.
      </h2>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          key={imageDetail._id}
        >
          <img
            src={imageDetail.imageUrl}
            className="bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          />
          <div className="">
            <div className="flex justify-between">
              <h3 className="py-8 font-bold tracking-wide text-3xl text-left text-gray-800 uppercase">
                {imageDetail.name}
              </h3>
              <div className="py-8">
                <button
                  onClick={() => handleChangeShared(imageDetail)}
                  className="px-4 mx-3 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur"
                >
                  {imageDetail.shared ? "Unshare" : "Share"}
                </button>
                <Link to={`/image/update/${imageDetail._id}`}>
                  <button className="px-4 mx-3 my-1 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => {
                    handleDelete(imageDetail._id);
                  }}
                  className="px-4 mx-3 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="text-xl text-gray-700 sm:mx-auto text-left">
              <h6>{imageDetail.contributor}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
