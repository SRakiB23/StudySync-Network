import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

//social providers
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  console.log(user);

  //create user
  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update profile with display name and photo URL
        return updateProfile(userCredential.user, {
          displayName: displayName,
          photoURL: photoURL,
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //github login
  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed");
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    logOut,
    signIn,
    googleLogin,
    gitHubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
