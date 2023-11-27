// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3R8lLSa-NKgI-bt5Xg-4UEVC3Xiez42I",
  authDomain: "exel-world.firebaseapp.com",
  projectId: "exel-world",
  storageBucket: "exel-world.appspot.com",
  messagingSenderId: "295598557151",
  appId: "1:295598557151:web:7ccb4ee5b619d7762ea66a",
  measurementId: "G-331CT12BRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
