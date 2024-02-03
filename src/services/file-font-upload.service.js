// src/services/file-upload.service.js

import axios from "axios";

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/font",
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getFonts = async (user) => {
  try {
    const res = await api.get("/user", { headers: { currentUser: user.id } });
    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

const uploadFonts = async (file) => {
  try {
    const res = await api.post("/upload", file);
    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

const createFont = async (newFont) => {
  try {
    const res = await api.post("/", newFont);
    console.log(res);

    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export default {
  getFonts,
  uploadFonts,
  createFont,
};
