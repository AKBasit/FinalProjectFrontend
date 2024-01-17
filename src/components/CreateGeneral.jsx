import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BASE_TRANSITION = {
  duration: 0.75,
};

export default function CreateGeneral() {
  const [selected, setSelected] = useState("webDesign");
  const [image, setImage] = useState("");

  function convertToBase64(e) {
    console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }
  function Form({ selected, setSelected }) {
    return (
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`p-8 w-full text-white transition-colors duration-[750ms] ${
          selected === "font"
            ? "bg-indigo-600"
            : selected === "image"
            ? "bg-pink-600" // Add this line for the pink background
            : selected === "webDesign"
            ? "bg-violet-600"
            : ""
        }`}
      >
        <h3 className="text-4xl font-bold mb-6">
          Add your own creative footprint
        </h3>

        {/* ---------------------------------------------------------------------------------------------------------------- */}

        {/* font/individual toggle */}
        <div className="mb-6">
          <p className="text-2xl mb-2">and your components is a....</p>
          <FormSelect selected={selected} setSelected={setSelected} />
        </div>

        {/* Web Design Section */}
        <AnimatePresence>
          {selected === "webDesign" && (
            <motion.div
              initial={{
                marginTop: -104,
                opacity: 0,
              }}
              animate={{
                marginTop: 0,
                opacity: 1,
              }}
              exit={{
                marginTop: -104,
                opacity: 0,
              }}
              transition={BASE_TRANSITION}
              className="mb-6"
            >
              <p className="text-2xl mb-2">Web Design name:</p>
              <input
                type="text"
                placeholder="Your Web Design name..."
                className={`${
                  selected === "WebDesign" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
              <p className="text-2xl mb-2">Image:</p>
              <input
                type="text"
                placeholder="Upload your image..."
                className={`${
                  selected === "WebDesign" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
              <p className="text-2xl mb-2">Description:</p>
              <input
                type="text"
                placeholder="Your description here..."
                className={`${
                  selected === "WebDesign" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Font Section */}
        <AnimatePresence>
          {selected === "font" && (
            <motion.div
              initial={{
                marginTop: -104,
                opacity: 0,
              }}
              animate={{
                marginTop: 0,
                opacity: 1,
              }}
              exit={{
                marginTop: -104,
                opacity: 0,
              }}
              transition={BASE_TRANSITION}
              className="mb-6"
            >
              <p className="text-2xl mb-2">Font name:</p>
              <input
                type="text"
                placeholder="Your font name..."
                className={`${
                  selected === "font" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
              <p className="text-2xl mb-2">Image:</p>
              <input
                type="text"
                placeholder="Upload your image here..."
                className={`${
                  selected === "font" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
              <p className="text-2xl mb-2">License type:</p>
              <input
                type="text"
                placeholder="Font license type here e.g. 'free'"
                className={`${
                  selected === "font" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image section */}
        <AnimatePresence>
          {selected === "image" && (
            <motion.div
              initial={{
                marginTop: -104,
                opacity: 0,
              }}
              animate={{
                marginTop: 0,
                opacity: 1,
              }}
              exit={{
                marginTop: -104,
                opacity: 0,
              }}
              transition={BASE_TRANSITION}
              className="mb-6"
            >
              <p className="text-2xl mb-2">Image name:</p>
              <input
                type="text"
                placeholder="Your image name..."
                className={`${
                  selected === "font" ? "bg-indigo-700" : "bg-pink-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
              <p className="text-2xl mb-2">Image:</p>
              <div>
                <input
                  accept="image/*"
                  type="file"
                  placeholder="Upload your image here..."
                  className={`${
                    selected === "font" ? "bg-indigo-700" : "bg-pink-700"
                  } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
                  onChange={convertToBase64}
                />
                {image == "" || image == null ? (
                  ""
                ) : (
                  <img width={100} height={100} src={image} />
                )}
              </div>
              <p className="text-2xl mb-2">Contributor:</p>
              <input
                type="text"
                placeholder="Your image contributor here..."
                className={`${
                  selected === "font" ? "bg-indigo-700" : "bg-pink-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* More info shared component*/}
        <div className="mb-6">
          <p className="text-2xl mb-2">More info on...</p>
          <textarea
            placeholder="Whatever your heart desires :)"
            className={`${
              selected === "font"
                ? "bg-white text-indigo-600"
                : selected === "image"
                ? "bg-white text-pink-600" // Updated for the "image" case
                : "bg-white text-violet-600"
            } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.99,
          }}
          type="submit"
          className={`${
            selected === "font"
              ? "bg-white text-indigo-600"
              : selected === "image"
              ? "bg-white text-pink-600"
              : "bg-white text-violet-600"
          } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
        >
          Submit
        </motion.button>
      </form>
    );
  }

  // Motion command handlers
  function FormSelect({ selected, setSelected }) {
    return (
      <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
        <button
          className={`${
            selected === "webDesign" ? "text-violet-600" : "text-white"
          } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
          onClick={() => setSelected("webDesign")}
        >
          <span className="relative z-10">Web Design</span>
          {selected === "webDesign" && (
            <motion.div
              transition={BASE_TRANSITION}
              layoutId="form-tab"
              className="absolute inset-0 bg-white z-0"
            />
          )}
        </button>
        <button
          className={`${
            selected === "font" ? "text-indigo-600" : "text-white"
          } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
          onClick={() => setSelected("font")}
        >
          <span className="relative z-10">Font</span>
          {selected === "font" && (
            <motion.div
              transition={BASE_TRANSITION}
              layoutId="form-tab"
              className="absolute inset-0 bg-white z-0"
            />
          )}
        </button>
        <button
          className={`${
            selected === "image" ? "text-pink-600" : "text-white"
          } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
          onClick={() => setSelected("image")}
        >
          <span className="relative z-10">Image</span>
          {selected === "image" && (
            <motion.div
              transition={BASE_TRANSITION}
              layoutId="form-tab"
              className="absolute inset-0 bg-white z-0"
            />
          )}
        </button>
      </div>
    );
  }

  return (
    <section className="p-4 bg-slate-100">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />
      </div>
    </section>
  );
}
