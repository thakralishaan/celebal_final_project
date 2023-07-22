import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcB66XWaGlRlMmJH1xU1Okw0DpcwMTlV4",
  authDomain: "hotelbooking-cb77c.firebaseapp.com",
  projectId: "hotelbooking-cb77c",
  storageBucket: "hotelbooking-cb77c.appspot.com",
  messagingSenderId: "5755591404",
  appId: "1:5755591404:web:a5b5bcbbdba2b65461e3c9",
  measurementId: "G-JTKBQ5PXE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();

export { auth, provider, db, storage };
