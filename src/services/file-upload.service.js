// src/services/file-upload.service.js

import axios from "axios";

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/api",
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getWebDesigns = () => {
  return api
    .get("/user")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadWebDesign = (file) => {
  return api
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const createWebdesign = (newWebDesign) => {
  return api
    .post("/", newWebDesign)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default {
  getWebDesigns,
  uploadWebDesign,
  createWebdesign,
};
