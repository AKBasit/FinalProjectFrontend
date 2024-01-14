import { Link } from "react-router-dom";
import Hero from "./HomeComponents/Hero";
import WebDesignGallery from "./HomeComponents/WebDesignGallery";
import ImageGallery from "./HomeComponents/ImageGallery";
import FontGallery from "./HomeComponents/FontGallery";

function Homepage() {
  return (
    <div>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Hero />
      <WebDesignGallery />
      <ImageGallery />
      <FontGallery />
    </div>
  );
}
export default Homepage;
