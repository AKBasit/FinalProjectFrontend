import { useEffect, useState } from "react";
import service from "../../services/file-image-upload.service";
import { Link } from "react-router-dom";

export default function ImageList() {
  // const { images, setimages, getimages } =
  //   useContext(imageContext);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await service.getImages();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // const handleDone = (imageId) => {
  //   const mappedimages = images.map((elem) => {
  //     if (elem.id === imageId) {
  //       elem.done = !elem.done;
  //     }
  //     return elem;
  //   });
  //   setimages(mappedimages);
  // };
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-4 gap-5">
        {images &&
          images.map((image) => {
            return (
              <div key={image._id}>
                <Link to={`/image/${image._id}`}>
                  <img
                    src={image.imageUrl}
                    alt={image.name}
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
