import { useEffect, useState } from "react";
import service from "../../services/file-font-upload.service";
import { Link } from "react-router-dom";

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

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
