import { useContext, useEffect } from "react";
import { WebDesignContext } from "../contexts/WebDesignContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function WebDesignList() {
  const { webDesigns, setWebDesigns, getWebDesigns } =
    useContext(WebDesignContext);

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
        `http://localhost:5005/webdesigns/deleteWebdesign/${id}`
      );
      console.log("task was deleted ", data);
    } catch (err) {
      console.log("there was an error deleting", err);
    }

    //perfect for the DOM
    const filteredWebDesigns = webDesigns.filter((curr) => {
      if (curr._id !== id) {
        return true;
      }
    });
    setWebDesigns(filteredWebDesigns);
  };
  useEffect(() => {
    getWebDesigns();
  }, []);
  return (
    <div className="">
      {webDesigns &&
        webDesigns.map((oneWebDesign) => {
          return (
            <div key={oneWebDesign._id}>
              <Link
                to={`/webDesigns?name=${oneWebDesign.name}=${oneWebDesign.id}`}
              >
                <h4>{oneWebDesign.name}</h4>
              </Link>
              <button
                onClick={() => {
                  handleDelete(oneWebDesign._id);
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
