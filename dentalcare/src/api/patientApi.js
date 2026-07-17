import axios from "axios";

const API = axios.create({

  baseURL: "https://smilecraft-api-q1y5.onrender.com/api",

});

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {

    config.headers.Authorization = `Bearer ${token}`;

  }

  return config;

});

export const getPatients = () =>
  API.get("/patients");

export const deletePatient = (id) =>
  API.delete(`/patients/${id}`);