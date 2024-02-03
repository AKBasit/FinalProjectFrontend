import { useContext, useEffect, useState } from "react";
import service from "../../services/file-font-upload.service";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function FontList() {
  // const { fonts, setfonts, getfonts } =
  //   useContext(fontContext);
  const { user } = useContext(UserContext);
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await service.getFonts(user);
        const filteredData = data.filter((e) => {
          if (e.owner === user._id) {
            return e;
          }
        });
        console.log(filteredData);
        console.log(data);
        setFonts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {fonts &&
          fonts.map((font) => {
            return (
              <div key={font._id} className="w-full max-w-sm rounded-lg">
                <Link to={`/font/${font._id}`}>
                  <img
                    src={font.imageUrl}
                    alt={font.name}
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
