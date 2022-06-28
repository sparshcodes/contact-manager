import { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  facebookProvider,
  googleProvider,
  githubProvider,
} from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const userAuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        signUp,
        user,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(userAuthContext);
};
