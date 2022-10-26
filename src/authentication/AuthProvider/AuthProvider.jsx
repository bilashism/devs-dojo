import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  updateProfile,
  signInWithPopup,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const [authLoading, setAuthLoading] = useState(true);

  /**
   * The providerLogin function takes a provider as an argument and returns a promise that resolves to
   * the result of calling signInWithPopup with the auth and provider arguments.
   * @returns The return value of the signInWithPopup function.
   */
  const providerLogin = provider => {
    setAuthLoading(true);
    return signInWithPopup(auth, provider);
  };

  /**
   * The logOut function is a function that sets the authLoading state to true and then returns the
   * signOut function with the auth state as an argument.
   * @returns The return value of the signOut function.
   */
  const logOut = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  /**
   * CreateUser is a function that takes two arguments, email and password, and returns a promise that
   * creates a user with the email and password provided.
   * @returns The function createUserWithEmailAndPassword is being returned.
   */
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /**
   * UpdateUserProfile is a function that takes a profile as an argument and returns a promise that
   * updates the user's profile.
   * @returns The return value of the updateProfile function.
   */
  const updateUserProfile = profile => {
    setAuthLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  /**
   * UserLogIn is a function that takes two arguments, email and password, and returns a promise that
   * resolves to the result of calling signInWithEmailAndPassword with the arguments auth, email, and
   * password.
   * @returns The return value of the function is the return value of the function
   * signInWithEmailAndPassword.
   */
  const userLogIn = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /**
   * The function verifyEmail() returns the result of the function sendEmailVerification() which takes
   * the current user as an argument.
   * @returns The function sendEmailVerification() is being returned.
   */
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  /* This is a useEffect hook that is being used to listen for changes in the authentication state. */
  useEffect(() => {
    const cleanup = onAuthStateChanged(auth, currentUser => {
      if (currentUser === null || currentUser?.emailVerified) {
        setUser(prev => (prev = { ...user, ...currentUser }));
      }
      setAuthLoading(false);
    });

    return () => cleanup();
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    verifyEmail,
    authLoading,
    setAuthLoading,
    providerLogin,
    userLogIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
