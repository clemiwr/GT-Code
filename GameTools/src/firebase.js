import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB75NdEeiurJ0ZkGsBDVJyCJf8rXOKL5zU",
  authDomain: "gametools-3b434.firebaseapp.com",
  databaseURL: "https://gametools-3b434-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gametools-3b434",
  storageBucket: "gametools-3b434.appspot.com",
  messagingSenderId: "167943365611",
  appId: "1:167943365611:web:6337a55c2924a5e4cc2fae",
  measurementId: "G-N63BGC3E55"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };