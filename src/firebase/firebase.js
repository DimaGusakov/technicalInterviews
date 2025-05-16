import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBrPcyqoXfnOdl_HLwdJQfdoI0VfycSg-U",
  authDomain: "technicalinterview-3d205.firebaseapp.com",
  databaseURL: "https://technicalinterview-3d205-default-rtdb.firebaseio.com",
  projectId: "technicalinterview-3d205",
  storageBucket: "technicalinterview-3d205.firebasestorage.app",
  messagingSenderId: "193484859176",
  appId: "1:193484859176:web:0f660b583754e03aa8121d",
  measurementId: "G-23D64HD4V4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
