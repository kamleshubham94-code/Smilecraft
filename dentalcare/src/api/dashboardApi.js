import axios from "axios";

const API_BASE_URL = import.meta.env.PROD
  ? "https://smilecraft-api-q1y5.onrender.com/api"
  : "http://localhost:5000/api";

const API = axios.create({
  baseURL: API_BASE_URL,
});

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {

    config.headers.Authorization = `Bearer ${token}`;

  }

  return config;

});

export const getDashboardStats = () =>
  API.get("/dashboard");