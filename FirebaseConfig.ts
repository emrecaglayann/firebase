// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWbyQ_0GJV61BiPVRd11fz5D6B5SYFd5E",
  authDomain: "fir-cf719.firebaseapp.com",
  projectId: "fir-cf719",
  storageBucket: "fir-cf719.firebasestorage.app",
  messagingSenderId: "914324557290",
  appId: "1:914324557290:web:93b80b04123acf8f8cf693"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});