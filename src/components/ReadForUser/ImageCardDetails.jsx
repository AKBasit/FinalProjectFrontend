import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
      const response = await axios.get("http://localhost:5005/image");
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
      const { data } = await axios.delete(`http://localhost:5005/font/${id}`);
      console.log("image was deleted ", data);
      navigate(-1);
    } catch (err) {
      console.log("there was an error deleting", err);
    }
  };

  return (
    <div className="card" key={imageDetail._id}>
      <h3>{imageDetail.name}</h3>
      <h6>{imageDetail.description}</h6>
      <img src={imageDetail.imageUrl} />
      {/* If the function onDelete was sent, then show the button else (:) show nothing */}
      <button onClick={() => handleChangeShared(imageDetail)}>
        {imageDetail.shared ? "It is Shared" : "Share"}
      </button>
      <br />
      <button
        onClick={() => {
          handleDelete(imageDetail._id);
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
