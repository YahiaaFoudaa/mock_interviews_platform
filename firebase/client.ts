import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDAXZQSCk-rbNMjKkv5ZiN53QYSIIv76v0",
  authDomain: "prepwise-72a92.firebaseapp.com",
  projectId: "prepwise-72a92",
  storageBucket: "prepwise-72a92.firebasestorage.app",
  messagingSenderId: "1089700489346",
  appId: "1:1089700489346:web:36e9abbf480e274cb7ac9b",
  measurementId: "G-B82Q99V8WQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)