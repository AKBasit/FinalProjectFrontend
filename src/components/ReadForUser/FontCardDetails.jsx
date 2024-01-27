import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
      const { data } = await axios.delete(`http://localhost:5005/font/${id}`);
      console.log("font was deleted ", data);
      navigate(-1);
    } catch (err) {
      console.log("there was an error deleting", err);
    }
  };

  return (
    <div className="card" key={fontDetail._id}>
      <h3>{fontDetail.name}</h3>
      <h6>{fontDetail.license}</h6>
      <img src={fontDetail.imageUrl} />
      {/* If the function onDelete was sent, then show the button else (:) show nothing */}
      <button onClick={() => handleChangeShared(fontDetail)}>
        {fontDetail.shared ? "It is Shared" : "Share"}
      </button>
      <br />
      <button
        onClick={() => {
          handleDelete(fontDetail._id);
        }}
        className="py-4"
      >
        Delete
      </button>
      {/* <Link to={`/character/edit/${webDesign._id}`}>
          <button>Edit Character</button>
        </Link> */}
      <br />
      <button>
        <a href="/profile">Back to profile</a>
      </button>
    </div>
  );
}
