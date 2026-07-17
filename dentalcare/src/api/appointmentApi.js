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

/* ===========================
   Patient
=========================== */

export const createAppointment = (data) =>
  API.post("/appointments", data);

export const getMyAppointments = () =>
  API.get("/appointments/my");

/* ===========================
   Admin
=========================== */

export const getAppointments = () =>
  API.get("/appointments");

export const updateStatus = (id, status) =>
  API.put(`/appointments/${id}`, { status });

export const deleteAppointment = (id) =>
  API.delete(`/appointments/${id}`);

export default API;