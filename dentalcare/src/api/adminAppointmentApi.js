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

export const getAppointments = () =>
    API.get("/appointments");

export const updateStatus = (id, status) =>
    API.put(`/appointments/${id}`, { status });

export const deleteAppointment = (id) =>
    API.delete(`/appointments/${id}`);