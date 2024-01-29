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
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images &&
          images.map((image) => {
            return (
              <div key={image._id} className="w-full max-w-sm rounded-lg">
                <Link to={`/image/${image._id}`}>
                  <img
                    src={image.imageUrl}
                    alt={image.name}
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
