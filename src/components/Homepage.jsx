import { motion } from "framer-motion";
import Hero from "./HomeComponents/Hero";
import WebDesignGallery from "./HomeComponents/WebDesignGallery";
import ImageGallery from "./HomeComponents/ImageGallery";
import FontGallery from "./HomeComponents/FontGallery";
import { useEffect, useState } from "react";
import intro from "../../public/intro.mp4";

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Homepage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a 2-second loading delay
    const delayLoading = setTimeout(() => {
      setLoading(false);
    }, 3500);

    // Clear the timeout to prevent it from affecting after the component is unmounted
    return () => clearTimeout(delayLoading);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <video
            src={intro}
            width="250"
            height="250"
            autoPlay
            muted
            disableRemotePlayback
            className="rounded-lg"
          />
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
          transition={{ duration: 2 }}
        >
          <Hero />
          <WebDesignGallery />
          <ImageGallery />
          <FontGallery />
        </motion.div>
      )}
    </div>
  );
}
export default Homepage;
