import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
// import { GetContext } from "../contexts/ContextProvider";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  // const { setLoggedInUser } = GetContext();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo && userInfo.emailVerified) {
        setUser(userInfo);
      }
      setIsLoading(false);
    });
  }, [auth]);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setLoggedInUser(user);
  //     setIsLoading(false);
  //   });
  //   return unsubscribe;
  // }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});

        setError("");
      })
      //   .catch((err) => {
      //     setError(err.code);
      //   });
      .finally(() => setIsLoading(false));
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  return {
    user,
    setUser,
    error,
    setError,
    password,
    setPassword,
    // email,
    signInWithGoogle,
    setUserName,
    logOut,
    setIsLoading,
    isLoading,
  };
};

export default useFirebase;
