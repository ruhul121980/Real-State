// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgQlWPMRjcRzbzjMgr7WTSCVuNbKUT1eg",
  authDomain: "real-state-project-af74e.firebaseapp.com",
  projectId: "real-state-project-af74e",
  storageBucket: "real-state-project-af74e.appspot.com",
  messagingSenderId: "1011875020215",
  appId: "1:1011875020215:web:6a82f77127234e9297fc32",
  measurementId: "G-WTFQ2FTE54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;