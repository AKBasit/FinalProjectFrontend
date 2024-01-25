import { useEffect, useState } from "react";
import service from "../../services/file-upload.service";
import { Link } from "react-router-dom";

// import WebDesignCardDetails from "./WebDesignCardDetails";

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

  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-4 gap-5">
        {webDesigns &&
          webDesigns.map((webDesign) => {
            return (
              <div key={webDesign._id}>
                <Link to={`/web-design/${webDesign._id}`}>
                  <img
                    src={webDesign.imageUrl}
                    alt={webDesign.name}
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
