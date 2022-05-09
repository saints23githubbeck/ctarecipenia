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
export const addNewRecipeApi = (newRecipe) =>
  API.post(`/add-recipe`, newRecipe);

export const BASE_URL = "http://localhost:8080";

export const httpRequest = async (params) => {
  try {
    const { url, body, headers, method } = params;
    if (!url) throw new Error("url not set");
    if (typeof url === " string ");

    const options = {
      method: method || "GET",
      redirect: "follow",
      headers: { "content-type": "application/json", ...headers },
    };
    if (body) options.body = body;
    const response = await fetch(`${BASE_URL}${url}`, options);
    const res = await response.text();
    const result = JSON.parse(res);

    return result;
  } catch (error) {
    throw error;
  }
};
