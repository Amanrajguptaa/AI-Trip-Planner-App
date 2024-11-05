// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB_bCIWY8XEl7xKKkq9DpWMzlm7q1XpY6Q",
  authDomain: "ai-trip-planner-28036.firebaseapp.com",
  projectId: "ai-trip-planner-28036",
  storageBucket: "ai-trip-planner-28036.appspot.com",
  messagingSenderId: "562223398272",
  appId: "1:562223398272:web:1b1edd678398da65285565",
  measurementId: "G-47H7LBP5CL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);