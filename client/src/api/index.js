import axios from "axios";

// const API = axios.create({baseURL: "http://localhost:5000"});

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    const token = JSON.parse(localStorage.getItem("user")).token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const loginApi = (formdata) => API.post(`/login`, formdata);
export const signupApi = (formdata) => API.post(`/register`, formdata);
export const updateUserApi = (userData) => API.put(`/profile-update`, userData);

export const getProfileApi = (username) => API.get(`/search-user/${username}`);
export const addNewRecipeApi = (newRecipe) => API.post(`/add-recipe`, newRecipe);
