import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfileHeader from "../ProfileComponents/ProfileHeader";
import WebDesignList from "../List/WebDesignList";
import FontList from "../List/FontList";
import ImageList from "../List/ImageList";
import { dotWave } from "ldrs";

dotWave.register();
const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Profile() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const delayLoading = setTimeout(() => {
      setLoading(false);
    }, 1200);

    // Clear the timeout to prevent it from affecting after the component is unmounted
    return () => clearTimeout(delayLoading);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center py-40">
          <l-dot-wave
            className=""
            size="47"
            speed="1"
            color="black"
          ></l-dot-wave>
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          <ProfileHeader />
          <>
            <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute -z-9 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
            <div className="w-1/2 max-w-[200px] min-w-[100px] aspect-square border-[8px] border-slate-50 rounded-full absolute -z-10 left-[620px] top-10 translate-x-[50%] translate-y-[50%]" />
            <div className="w-1/2 max-w-[300px] min-w-[200px] aspect-square border-[8px] border-slate-100 rounded-full absolute z-0 right-80 top-20 translate-x-[50%] translate-y-[50%]" />
            <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
          </>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 3 }}
            className="my-14"
          >
            <WebDesignList />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 4 }}
            className="my-14"
          >
            <ImageList />
          </motion.div>
          <>
            <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-100 rounded-se-full absolute -z-10 left-20 top-100 -translate-x-[50%] -translate-y-[50%]" />
            <div className="w-1/2 max-w-[300px] min-w-[200px] aspect-square border-[8px] border-slate-100 rounded-full absolute z-0 right-80 top-100 translate-x-[50%] translate-y-[50%]" />
          </>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 5 }}
            className="my-14"
          >
            <FontList />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
