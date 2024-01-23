import { useScroll, useTransform, motion } from "framer-motion";
import { AiFillApple, AiFillFileImage } from "react-icons/ai";
import { useRef } from "react";
import outward from "../../../public/Outward.png";
import mono from "../../../public/Mono.png";
import evoke from "../../../public/Evoke.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div>
      <Nav scrollYProgress={scrollYProgress} />
      <section ref={targetRef} className="bg-white h-[350vh]">
        <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />
          <Circles />
        </div>
      </section>
    </div>
  );
}

function Nav({ scrollYProgress }) {
  const background = useTransform(scrollYProgress, (i) =>
    i === 1 ? "rgb(13,10,9, 0.05)" : "transparent"
  );

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  //NAVBAR
  const { isLoggedIn } = useContext(UserContext);
  return (
    <motion.nav
      style={{ background }}
      className="px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-40 transition-colors"
    >
      <div className="flex items-center gap-2 text-lg text-white">
        <img src={evoke} />
      </div>
      {isLoggedIn ? (
        <button className="relative scale-100 text-xl overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 px-4 py-2 font-semibold text-gray-100 transition-transform hover:scale-105 active:scale-95">
          <a href="/profile">Profile</a>
        </button>
      ) : (
        <button className="relative scale-100 text-xl overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 px-4 py-2 font-semibold text-gray-100 transition-transform hover:scale-105 active:scale-95">
          <a href="/login">Log In</a>
        </button>
      )}
    </motion.nav>
  );

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
}

function Copy({ scrollYProgress }) {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-stone-950 text-5xl md:text-[150px] font-bold text-center max-w-7xl">
        A creative tool for your mind
      </h1>
      <p className="text-stone-600 text-md md:text-lg text-center max-w-xl my-6">
        Discover your unique identity with Creativehub—where we unleash your
        creativity through essential tools and unwavering support. Elevate your
        portfolio effortlessly!
      </p>
      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <button className="px-4 py-2 bg-violet-600 hover:bg-violet-600 transition-colors text-white font-medium">
            <Link to="/signup">Sign up for free</Link>
          </button>
        ) : null}
      </div>
    </motion.div>
  );
}

function Images({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  return (
    <>
      <motion.div
        className="col-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />
      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1568826197047-0fc0311f65fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/5ea7fd4e3d52ef73804bc877/64094344bd974288cd44816d_Screenshot-min-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/5ea7fd4e3d52ef73804bc877/63f1a05c700f68cb033a3f0c_Screenshot-min.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: `url(${outward})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: `url(${mono})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      />
    </>
  );
}

function Circles() {
  return (
    <>
      <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
      <div className="w-1/2 max-w-[200px] min-w-[100px] aspect-square border-[8px] border-slate-100 rounded-full absolute z-0 left-[620px] top-10 translate-x-[50%] translate-y-[50%]" />
      <div className="w-1/2 max-w-[300px] min-w-[200px] aspect-square border-[8px] border-slate-100 rounded-full absolute z-0 right-80 top-20 translate-x-[50%] translate-y-[50%]" />
      <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
    </>
  );
}

export default Hero;
