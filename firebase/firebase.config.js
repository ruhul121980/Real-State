import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAgQlWPMRjcRzbzjMgr7WTSCVuNbKUT1eg",
  authDomain: "real-state-project-af74e.firebaseapp.com",
  projectId: "real-state-project-af74e",
  storageBucket: "real-state-project-af74e.appspot.com",
  messagingSenderId: "1011875020215",
  appId: "1:1011875020215:web:6a82f77127234e9297fc32",
  measurementId: "G-WTFQ2FTE54"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;