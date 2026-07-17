import axios from "axios";

const API_BASE_URL = import.meta.env.PROD
  ? "https://smilecraft-api-q1y5.onrender.com/api"
  : "http://localhost:5000/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;