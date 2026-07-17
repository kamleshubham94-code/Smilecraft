import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {

    config.headers.Authorization = `Bearer ${token}`;

  }

  return config;

});

export const createAppointment = (data) =>
  API.post("/appointments", data);

export const getMyAppointments = () =>
  API.get("/appointments/my");

export const getAllAppointments = () =>
  API.get("/appointments");

export const updateAppointmentStatus = (id, status) =>
  API.put(`/appointments/${id}`, { status });

export const deleteAppointment = (id) =>
  API.delete(`/appointments/${id}`);