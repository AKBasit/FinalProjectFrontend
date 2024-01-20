import { useEffect, useState } from "react";
import service from "../services/file-font-upload.service";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FontList() {
  // const { fonts, setfonts, getfonts } =
  //   useContext(fontContext);

  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await service.getFonts();
        setFonts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // const handleDone = (fontId) => {
  //   const mappedfonts = fonts.map((elem) => {
  //     if (elem.id === fontId) {
  //       elem.done = !elem.done;
  //     }
  //     return elem;
  //   });
  //   setfonts(mappedfonts);
  // };

  const handleDelete = async (id) => {
    try {
      //make an axios call to the back to delete the todo as well
      const { data } = await axios.delete(`http://localhost:5005/font/${id}`);
      console.log("font was deleted ", data);
    } catch (err) {
      console.log("there was an error deleting", err);
    }

    // perfect for the DOM
    const filteredFonts = fonts.filter((curr) => {
      if (curr._id !== id) {
        return true;
      }
    });
    setFonts(filteredFonts);
  };

  return (
    <div className="">
      {fonts &&
        fonts.map((font) => {
          return (
            <div key={font._id}>
              <Link to={`/web-design?name=${font.name}=${font.id}`}>
                <h4>{font.name}</h4>
              </Link>
              <button
                onClick={() => {
                  handleDelete(font._id);
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
