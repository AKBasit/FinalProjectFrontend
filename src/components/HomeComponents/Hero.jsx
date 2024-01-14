import { useScroll, useTransform, motion } from "framer-motion";
import { AiFillApple, AiFillFileImage } from "react-icons/ai";
import { useRef } from "react";

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

      <div className="h-screen bg-violet-600 text-white flex items-center justify-center">
        <span>Other content here {":)"}</span>
      </div>
    </div>
  );
}

function Nav({ scrollYProgress }) {
  const background = useTransform(scrollYProgress, (i) =>
    i === 1 ? "rgb(13,10,9)" : "transparent"
  );

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  //NAVBAR
  //   return (
  //     <motion.nav
  //       style={{ background }}
  //       className="px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-40 transition-colors"
  //     >
  //       <div className="flex items-center gap-2 text-lg text-white">
  //         <AiFillFileImage className="text-xl" />
  //         <span className="font-bold">PIXII</span>
  //       </div>
  //       <button className="text-sm bg-white text-black hover:opacity-90 transition-opacity font-semibold flex items-center gap-1.5 px-3 py-1.5">
  //         <AiFillApple className="text-lg" />
  //         <span>Download</span>
  //       </button>
  //     </motion.nav>
  //   );

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
}

function Copy({ scrollYProgress }) {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-stone-950 text-5xl md:text-7xl font-bold text-center max-w-xl">
        A creative tool for your mind
      </h1>
      <p className="text-stone-600 text-sm md:text-base text-center max-w-xl my-6">
        Discover your unique identity with Creativehub—where we unleash your
        creativity through essential tools and unwavering support. Elevate your
        portfolio effortlessly!
      </p>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-violet-600 hover:bg-violet-600 transition-colors text-white font-medium">
          Try for free
        </button>
        <button className="px-4 py-2 bg-transparent hover:bg-stone-200 transition-colors text-stone-950 font-medium">
          Learn about us
        </button>
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
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/63ad78b533698b4084d66910/63fa196eb898996a92bb4929_tn-type-vercetti.svg)",
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
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1668790459004-780996a6404c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
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
      <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
    </>
  );
}

export default Hero;
