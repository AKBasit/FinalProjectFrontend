import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import WebDesignList from "./WebDesignList";
import CreateGeneral from "./CreateGeneral";

export default function Profile() {
  const { user, handleLogout } = useContext(UserContext);
  return (
    <div>
      <ProfileHeader />
      <WebDesignList />
      <Link to="/createWebdesigns">Create Web Design</Link>
      <Link to="/createFonts">Create Font</Link>
      <Link to="/createImages">Create Image</Link>
      <CreateGeneral />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
