import axios from "axios";

const API = axios.create({
  baseURL: "https://smilecraft-api-q1y5.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;