import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"});


  // API.interceptors.request.use((req) => {
  //   if(localStorage.getItem("auth")){
  //     req.headers.Autorization = `Bearer ${JSON.parse(localStorage.getItem("auth")).token}`;
  //   }
  //   return req;
  // })

export const loginApi = (formdata) => API.post(`/login`, formdata);
export const signupApi = (formdata) => API.post(`/register`, formdata);
export const getMeApi = (formdata) => API.post(`/me`);

export const addRecipeApi = (recipe) => API.post(`/add-recipe`, recipe);
