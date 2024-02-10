// src/services/file-upload.service.js

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: `${API_URL}/image`,
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getImages = async (user) => {
  try {
    const res = await api.get("/user", {
      headers: { currentUser: user.id },
    });
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
