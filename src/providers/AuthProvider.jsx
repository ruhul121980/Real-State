import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut
  } from "firebase/auth";
  import PropTypes from 'prop-types';
  import { createContext, useEffect, useState } from 'react';
  import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"; // Import FacebookAuthProvider
  import auth from '/firebase/firebase.config.js';
  
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider(); // Create a new instance of FacebookAuthProvider
  
  export const AuthContext = createContext(null);
  
  export default function AuthProvider({ children }) {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      
      const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
      };
  
      const signInUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
      };
  
      const signInWithGoogle = () => {
          return signInWithPopup(auth, googleProvider);
      };
  
      const signInWithFacebook = () => { // Implement signInWithFacebook function
          return signInWithPopup(auth, facebookProvider);
      };
  
      const logOut = () => {
          return signOut(auth);
      };
  
      useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
              console.log('observing current user', currentUser);
              setLoading(false);
          });
          return () => {
              unSubscribe();
          };
      }, []);
  
      const authInfo = {
          user,
          createUser,
          signInUser,
          logOut,
          loading,
          signInWithGoogle,
          signInWithFacebook // Include signInWithFacebook in the authInfo object
      };
  
      return (
          <AuthContext.Provider value={authInfo}>
              {children}
          </AuthContext.Provider>
      );
  }
  
  AuthProvider.propTypes = {
      children: PropTypes.node
  };
  