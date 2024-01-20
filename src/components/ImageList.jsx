import { useEffect, useState } from "react";
import service from "../services/file-upload.service";
import { Link } from "react-router-dom";
import axios from "axios";

export default function WebDesignList() {
  // const { webDesigns, setWebDesigns, getWebDesigns } =
  //   useContext(WebDesignContext);

  const [webDesigns, setWebDesigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await service.getWebDesigns();
        setWebDesigns(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // const handleDone = (webDesignId) => {
  //   const mappedWebDesigns = webDesigns.map((elem) => {
  //     if (elem.id === webDesignId) {
  //       elem.done = !elem.done;
  //     }
  //     return elem;
  //   });
  //   setWebDesigns(mappedWebDesigns);
  // };

  const handleDelete = async (id) => {
    try {
      //make an axios call to the back to delete the todo as well
      const { data } = await axios.delete(
        `http://localhost:5005/web-design/${id}`
      );
      console.log("design was deleted ", data);
    } catch (err) {
      console.log("there was an error deleting", err);
    }

    // perfect for the DOM
    const filteredWebDesigns = webDesigns.filter((curr) => {
      if (curr._id !== id) {
        return true;
      }
    });
    setWebDesigns(filteredWebDesigns);
  };

  return (
    <div className="">
      {webDesigns &&
        webDesigns.map((webDesign) => {
          return (
            <div key={webDesign._id}>
              <Link to={`/web-design?name=${webDesign.name}=${webDesign.id}`}>
                <h4>{webDesign.name}</h4>
              </Link>
              <button
                onClick={() => {
                  handleDelete(webDesign._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}
