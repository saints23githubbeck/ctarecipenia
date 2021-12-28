import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const authentication = () => {
  initializeApp(firebaseConfig);
};
export default authentication;
