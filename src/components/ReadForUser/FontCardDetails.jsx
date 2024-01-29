import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Layout/Header";

export default function FontCardDetails() {
  const { fontId } = useParams();
  const [fontDetail, setFontDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/font");
      setFontDetail(response.data);
    } catch (error) {
      console.error("Error fetching font detail data:", error);
    }
  };

  const handleChangeShared = async (item) => {
    const newFont = {
      name: item.name,
      imageUrl: item.imageUrl,
      description: item.description,
      owner: item.owner,
      shared: !item.shared,
    };

    try {
      const response = await axios.put(
        "http://localhost:5005/font/shared/" + item._id,
        newFont
      );
      console.log(response);
      fetchData();
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchFont = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5005/font/${fontId}`
        );
        setFontDetail(response.data.data); // Update state with the fetched data as an array
        setLoading(false);
        console.log(fontDetail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFont();
  }, [fontId]);

  //   useEffect(() => {
  //     if (fonts) {
  //       const fontData = font.find((element) => {
  //         if (element.id == fontId) {
  //           return true;
  //         }
  //       });
  //       console.log(fontData);
  //       setfontDetail(fontData);
  //     }
  //   }, [fontId]);

  const handleDelete = async (id) => {
    try {
      //make an axios call to the back to delete the todo as well
      const { data } = await axios.delete(`http://localhost:5005/font/${id}`);
      console.log("font was deleted ", data);
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
      <div className="px-4 my-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          key={fontDetail._id}
        >
          <img
            src={fontDetail.imageUrl}
            className="bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          />
          <div className="">
            <div className="flex justify-between">
              <h3 className="py-8 font-bold tracking-wide text-3xl text-left text-gray-800 uppercase">
                {fontDetail.name}
              </h3>
              <div className="py-8">
                <button
                  onClick={() => handleChangeShared(fontDetail)}
                  className="px-4 mx-3 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur"
                >
                  {fontDetail.shared ? "Unshare" : "Share"}
                </button>
                <Link to={`/font/update/${fontDetail._id}`}>
                  <button className="px-4 mx-3 my-1 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => {
                    handleDelete(fontDetail._id);
                  }}
                  className="px-4 mx-3 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-gray-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mb-16 text-xl text-gray-700 sm:mx-auto text-left">
              <h6>{fontDetail.license}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
