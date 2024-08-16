import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC99CcssPrTPfx_NFTptm9cxZltXfdz0pU",
  authDomain: "asses-23b8b.firebaseapp.com",
  projectId: "asses-23b8b",
  storageBucket: "asses-23b8b.appspot.com",
  messagingSenderId: "96526904431",
  appId: "1:96526904431:web:ff6c60e060a4dccf36f19a",
  measurementId: "G-373JJDDR41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
