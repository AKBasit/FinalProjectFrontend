import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import ProfileHeader from "../ProfileComponents/ProfileHeader";
import WebDesignList from "../List/WebDesignList";

export default function Profile() {
  const { user, handleLogout } = useContext(UserContext);
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
      <WebDesignList />
    </div>
  );
}
