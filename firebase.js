import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCNfvwisynrKz_6hy0bLjF0kCjaKOWQjco",
  authDomain: "carrot-market-b9839.firebaseapp.com",
  databaseURL: "https://carrot-market-b9839-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-b9839",
  storageBucket: "carrot-market-b9839.appspot.com",
  messagingSenderId: "918533453591",
  appId: "1:918533453591:web:1a9550d9ffb2364d912952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const auth = getAuth(app);
