import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import ProfileHeader from "../ProfileComponents/ProfileHeader";
import WebDesignList from "../List/WebDesignList";
import FontList from "../List/FontList";
import ImageList from "../List/ImageList";

export default function Profile() {
  const { handleLogout } = useContext(UserContext);
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <ProfileHeader />
      <button onClick={handleLogout} className="m-4">
        Logout
      </button>
      <div className="p-20">
        <Link className="px-4" to="/createWebdesigns">
          Create Web Design
        </Link>
        <Link className="px-4" to="/createFonts">
          Create Font
        </Link>
        <Link className="px-4" to="/createImages">
          Create Image
        </Link>
      </div>

      <div className="my-14">
        <WebDesignList />
      </div>

      <div className="my-14">
        <FontList />
      </div>

      <div className="my-14">
        <ImageList />
      </div>
    </div>
  );
}
