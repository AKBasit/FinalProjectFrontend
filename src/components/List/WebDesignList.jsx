import { useContext, useEffect, useState } from "react";
import service from "../../services/file-upload.service";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

// import WebDesignCardDetails from "./WebDesignCardDetails";

export default function WebDesignList() {
  // const { webDesigns, setWebDesigns, getWebDesigns } =
  //   useContext(WebDesignContext);
  const { user } = useContext(UserContext);
  const [webDesigns, setWebDesigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(user);
        const data = await service.getWebDesigns(user);
        const filteredData = data.filter((e) => {
          if (e.owner === user._id) {
            return e;
          }
        });
        console.log(filteredData);
        console.log(data);
        setWebDesigns(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {webDesigns &&
          webDesigns.map((webDesign) => {
            return (
              <div key={webDesign._id} className="w-full max-w-sm rounded-lg">
                <Link to={`/web-design/${webDesign._id}`}>
                  <img
                    src={webDesign.imageUrl}
                    alt={webDesign.name}
                    className="h-auto max-w-full rounded-lg p-2 rounded-t-lg hover:scale-105 active:scale-65 hover:brightness-75"
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
