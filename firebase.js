import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain:  import.meta.env.VITE_AUTH_DOMAIN,
  databaseUvvRL: import.meta.env.VITE_DB_URL,
  projectId: import.meta.env.VITER_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STROAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MSG_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const auth = getAuth(app);
