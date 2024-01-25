import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleGoingBack = () => {
    console.log("going back");
    navigate(-1);
  };
  return (
    <div>
      <h2>404 Not Found Page</h2>
      <button onClick={handleGoingBack}>Back</button>
    </div>
  );
}
export default NotFound;
