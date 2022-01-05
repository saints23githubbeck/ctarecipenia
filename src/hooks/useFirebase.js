import authentication from "../firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

authentication();
const useFirebase = () => {
  const history = useHistory("")
  const [user, setUser] = useState({});
  const [authErrorMessage, setAuthEErrorMessage] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = { email, displayName: name };
        setUser(newUser);
        //  update user name in firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
          history.replace('/dashboard');
      })
      .catch((error) => {
        setAuthEErrorMessage(error.message);
      });
  };
  const loginUser =( email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    setAuthEErrorMessage(error.message);
    // const errorMessage = error.message;
    console.log(authErrorMessage);
  });
  history.replace('/dashboard');
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        setUser(result.user);
      })
      .catch((error) => {
        setAuthEErrorMessage(error.message);
        console.log(authErrorMessage);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user Is here");
      } else {
        setUser("");
        console.log("user Is not here");
      }
    });
    return ()=> unsubscribe ;
  }, []);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser("");
        console.log("User Sign Out succissfully");
      })
      .catch((error) => {
        setAuthEErrorMessage(error.message);
        console.log(authErrorMessage);
      });
  };
  return {
    user,
    signInWithGoogle,
    authErrorMessage,
    setAuthEErrorMessage,
    logOut,
    registerUser,
    loginUser
  };
};

export default useFirebase;
