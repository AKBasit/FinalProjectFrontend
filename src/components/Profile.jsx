import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileComponents/ProfileHeader";

export default function Profile() {
  const { user, handleLogout } = useContext(UserContext);
  return (
    <div>
      <ProfileHeader />
      <Link to="/createTodo">Create To-Do</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
