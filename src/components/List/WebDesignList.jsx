import { useContext, useEffect, useState } from "react";
import service from "../../services/file-upload.service";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { dotWave } from "ldrs";

dotWave.register();

export default function WebDesignList() {
  const { user } = useContext(UserContext);
  const [webDesigns, setWebDesigns] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl transform -rotate-90 pt-28 mr-16 mt-8">
          Web Design
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {webDesigns &&
          webDesigns.map((webDesign) => {
            return (
              <div
                key={webDesign._id}
                className="w-full max-w-sm rounded-lg overflow-hidden"
              >
                <Link to={`/web-design/${webDesign._id}`}>
                  <img
                    src={webDesign.imageUrl}
                    alt={webDesign.name}
                    className="w-full h-72 object-cover rounded-lg  hover:scale-105 active:scale-65 hover:brightness-75"
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
