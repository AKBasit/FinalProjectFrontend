import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Layout/Header";
import { dotWave } from "ldrs";

dotWave.register();

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
      const response = await axios.get(`http://localhost:5005/font/${fontId}`);
      setFontDetail(response.data);
    } catch (error) {
      console.error("Error fetching font detail data:", error);
    }
  };

  const handleChangeShared = async (item) => {
    const newFont = {
      name: item.name,
      imageUrl: item.imageUrl,
      license: item.license,
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
        setTimeout(() => {
          setFontDetail(response.data.data);
          setLoading(false);
          console.log(response.data.data);
        }, 1500);
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
      <h2 className="flex justify-center mt-44 font-sans text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl sm:leading-none">
        Your Font.
      </h2>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {loading ? (
          <div className="flex justify-center py-40">
            <l-dot-wave
              className=""
              size="47"
              speed="1"
              color="black"
            ></l-dot-wave>
          </div>
        ) : (
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
                <h3 className="py-8 font-bold tracking-wide text-3xl text-left text-stone-800 uppercase">
                  {fontDetail.name}
                </h3>
                <div className="py-8">
                  <button
                    onClick={() => handleChangeShared(fontDetail)}
                    className="px-4 mx-3 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-stone-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur"
                  >
                    {fontDetail.shared ? "Unshare" : "Share"}
                  </button>
                  <Link to={`/font/update/${fontDetail._id}`}>
                    <button className="px-4 mx-3 my-1 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-stone-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(fontDetail._id);
                    }}
                    className="px-4 mx-3 border-[1px] font-semibold text-xs border-indigo-600 rounded-lg bg-gradient-to-br from-gray/30 to-gray/5 py-2 text-stone-800 transition-transform hover:scale-105 active:scale-75 backdrop-blur"
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
        )}
      </div>
    </div>
  );
}
