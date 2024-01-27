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
    <div className="flex justify-between">
      <div className="grid grid-cols-4 gap-5">
        {fonts &&
          fonts.map((font) => {
            return (
              <div key={font._id}>
                <Link to={`/font/${font._id}`}>
                  <img
                    src={font.imageUrl}
                    alt={font.name}
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
