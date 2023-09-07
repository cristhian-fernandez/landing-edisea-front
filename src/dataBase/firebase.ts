import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBH4xkql248HgeYsb5m98_E0vUdoT5Z4w",
  authDomain: "landingedisea.firebaseapp.com",
  projectId: "landingedisea",
  storageBucket: "landingedisea.appspot.com",
  messagingSenderId: "810693826431",
  appId: "1:810693826431:web:ab12e6124f233e52c7ac4a",
  measurementId: "G-R0R73X2J4N"
};

const dbConnected = initializeApp(firebaseConfig);

export default dbConnected