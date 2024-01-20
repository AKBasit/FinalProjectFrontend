import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import service from "../services/file-upload.service";
import { useNavigate } from "react-router-dom";

const BASE_TRANSITION = {
  duration: 0.75,
};

export default function CreateGeneral() {
  const [selected, setSelected] = useState("webDesign");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    try {
      const uploadData = new FormData();

      // imageUrl => this name has to be the same as in the model since we pass
      // req.body to .create() method when creating a new movie in '/api/movies' POST route
      uploadData.append("imageUrl", e.target.files[0]);

      const response = await service.uploadWebDesign(uploadData);

      // response carries "fileUrl" which we can use to update the state
      setImageUrl(response.fileUrl);
    } catch (error) {
      console.error("Error while uploading the file: ", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await service.createWebDesign({
        name,
        description,
        imageUrl,
      });

      // Reset the form
      setName("");
      setDescription("");
      setImageUrl("");

      // navigate to another page
      navigate("/");
    } catch (error) {
      console.error("Error while adding the new web design: ", error);
    }
  };

  function Form({ selected, setSelected }) {
    return (
      <form
        onSubmit={handleSubmit}
        className={`p-8 w-full text-white transition-colors duration-[750ms] ${
          selected === "font"
            ? "bg-indigo-600"
            : selected === "image"
            ? "bg-pink-600"
            : selected === "webDesign"
            ? "bg-violet-600"
            : ""
        }`}
      >
        <h3 className="text-4xl font-bold mb-6">
          Add your own creative footprint
        </h3>

        {/* ---------------------------------------------------------------------------------------------------------------- */}

        {/* toggle controller */}
        <div className="mb-6">
          <p className="text-2xl mb-2">and your components is a....</p>
          <FormSelect selected={selected} setSelected={setSelected} />
        </div>

        {/* Web Design Section */}
        <div>
          {selected === "webDesign" && (
            <div>
              <p className="text-2xl mb-2">Web Design name:</p>
              <input
                name="name"
                value={name}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Your Web Design name..."
                className={`${
                  selected === "WebDesign" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />

              <p className="text-2xl mb-2">Image:</p>
              <input
                type="file"
                name="imageUrl"
                accept="image/png, image/jpg"
                placeholder="Upload your image..."
                className={`${
                  selected === "WebDesign" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />

              <p className="text-2xl mb-2">Description:</p>
              <input
                name="description"
                value={description}
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className={`${
                  selected === "WebDesign" ? "bg-indigo-700" : "bg-violet-700"
                } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              />
            </div>
          )}
        </div>

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
          type="button"
          // onChange={(e) => {
          //   setName(e.target.value);
          //   setDescription;
          // }}
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
