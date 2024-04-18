import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut
  } from "firebase/auth";
  import PropTypes from 'prop-types';
  import { createContext, useEffect, useState } from 'react';
  import { GoogleAuthProvider } from "firebase/auth";
  
  import auth from '/firebase/firebase.config.js';
  
  // Use the GoogleAuthProvider directly from "firebase/auth"
  const googleProvider = new GoogleAuthProvider();
  
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
          signInWithGoogle
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
  