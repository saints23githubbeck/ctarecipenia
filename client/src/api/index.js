import axios from "axios";

// const API = axios.create({baseURL: "http://localhost:5000"});

const API = axios.create({ baseURL: "http://localhost:8080" });

const getToken = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null;
};
const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};

// export const fetchPostapi = () => API.get("/posts");
// export const createPostapi = (formData) => API.post("/posts", formData);
// export const updatePostapi = (Id, updatedPost)=> API.patch(`/posts/${Id}`, updatedPost);
// export const deletePostapi = (Id) => API.delete(`/posts/${Id}`);
// export const likePostapi = (Id) => API.patch(`/posts/${Id}/like`);

export const loginApi = (formdata) => API.post(`/login`, formdata);
export const signupApi = (formdata) => API.post(`/register`, formdata);
export const updateUserApi = (userData) => {
   console.log(config, " log");
  return API.put(`/profile-update`, userData, config);
 
};
