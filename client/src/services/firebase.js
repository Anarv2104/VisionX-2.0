import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration (Replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyDcskHkK0vW5qk5S5ZNmOC4BQQTFt-U8fc",
    authDomain: "visionxapp-9347e.firebaseapp.com",
    projectId: "visionxapp-9347e",
    storageBucket: "visionxapp-9347e.firebasestorage.app",
    messagingSenderId: "333547970756",
    appId: "1:333547970756:web:0171347023c8e7bbaca991"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);