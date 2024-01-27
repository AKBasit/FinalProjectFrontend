// src/services/file-upload.service.js

import axios from "axios";

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/image",
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getImages = async () => {
  try {
    const res = await api.get("/user");
    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

const uploadImage = async (file) => {
  try {
    const res = await api.post("/upload", file);
    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

const createImage = async (newImage) => {
  try {
    const res = await api.post("/", newImage);
    console.log(res);

    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export default {
  getImages,
  uploadImage,
  createImage,
};
