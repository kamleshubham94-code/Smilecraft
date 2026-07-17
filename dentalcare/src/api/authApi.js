import API from "./api";

export const registerUser = (userData) => {
  return API.post("/auth/register", userData);
};

export const loginUser = (userData) => {
  return API.post("/auth/login", userData);
};

export const getProfile = (token) => {
  return API.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};