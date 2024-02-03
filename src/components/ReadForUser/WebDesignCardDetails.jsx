import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Layout/Header";
// import { PageLoader } from "../utilities/PageLoader";

export default function WebDesignCardDetails() {
  const { webDesignId } = useParams();
  const [webDesignDetail, setWebDesignDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/web-design/${webDesignId}`
      );
      setWebDesignDetail(response.data);
    } catch (error) {
      console.error("Error fetching webDesignDetail data:", error);
    }
  };

  const handleChangeShared = async (item) => {
    const newWebdesign = {
      name: item.name,
      imageUrl: item.imageUrl,
      description: item.description,
      owner: item.owner,
      shared: !item.shared,
    };

    try {
      const response = await axios.put(
        "http://localhost:5005/web-design/shared/" + item._id,
        newWebdesign
      );
      console.log(response);
      fetchData();
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchWebDesign = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5005/web-design/${webDesignId}`
        );
        setWebDesignDetail(response.data.data); // Update state with the fetched data as an array
        setLoading(false);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWebDesign();
  }, [webDesignId]);

  //   useEffect(() => {
  //     if (webDesigns) {
  //       const webDesignData = webDesign.find((element) => {
  //         if (element.id == webDesignId) {
  //           return true;
  //         }
  //       });
  //       console.log(webDesignData);
  //       setWebDesignDetail(webDesignData);
  //     }
  //   }, [webDesignId]);

  const handleDelete = async (id) => {
    try {
      //make an axios call to the back to delete the todo as well
      const { data } = await axios.delete(
        `http://localhost:5005/web-design/${id}`
      );
      console.log("design was deleted ", data);
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
        Your Web Design.
      </h2>
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
            key={webDesignDetail._id}
          >
            <img
              src={webDesignDetail.imageUrl}
              className="bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            />
            <div className="">
              <div className="flex justify-between">
                <h3 className="py-8 font-bold tracking-wide text-3xl text-left text-gray-800 uppercase">
                  {webDesignDetail.name}
                </h3>
                <div className="py-8">
                  <button
                    onClick={() => handleChangeShared(webDesignDetail)}
                    className="px-4 mx-3 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur"
                  >
                    {webDesignDetail.shared ? "Unshare" : "Share"}
                  </button>
                  <Link to={`/web-design/update/${webDesignDetail._id}`}>
                    <button className="px-4 mx-3 my-1 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(webDesignDetail._id);
                    }}
                    className="px-4 mx-3 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="mb-16 text-xl text-gray-700 sm:mx-auto text-left">
                <h6>{webDesignDetail.description}</h6>
              </div>
            </div>
          </div>
        )}
        ;
      </div>
    </div>
  );
}
