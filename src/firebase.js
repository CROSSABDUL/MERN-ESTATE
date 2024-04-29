// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ac8e6.firebaseapp.com",
  projectId: "mern-estate-ac8e6",
  storageBucket: "mern-estate-ac8e6.appspot.com",
  messagingSenderId: "775798863832",
  appId: "1:775798863832:web:6f251e055881e57a8424ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default app;