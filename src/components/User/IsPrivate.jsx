import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoading, isLoggedIn } = useContext(UserContext);

  if (isLoading) {
    return (
      <p className="flex justify-center py-96 h-screen bg-black/5">
        Imagine a cool loading spinner...
      </p>
    );
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default IsPrivate;
