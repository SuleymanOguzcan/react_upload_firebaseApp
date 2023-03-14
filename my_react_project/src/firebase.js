
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDboNH9VicHBZrO1CfZE4wrulakvJV6nmo",
  authDomain: "profile-pic-54251.firebaseapp.com",
  projectId: "profile-pic-54251",
  storageBucket: "profile-pic-54251.appspot.com",
  messagingSenderId: "5136173270",
  appId: "1:5136173270:web:7ba22d1cb7c838aa552177",
  measurementId: "G-RHTJN7FMJR"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
