import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBN6vEegTGmg6z4NeUN5G5sOOSNovikSyQ",
    authDomain: "saylanifood1.firebaseapp.com",
    projectId: "saylanifood1",
    storageBucket: "saylanifood1.appspot.com",
    messagingSenderId: "1058949717313",
    appId: "1:1058949717313:web:6d502c1ad6d764498495c0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(app);


export { auth, db, app, storage};