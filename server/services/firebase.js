const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
require("dotenv").config(); // Load environment variables

const firebaseConfig = {
    apiKey: "Your_firebase_Api_key",
    authDomain: "firebase_app_domain",
    projectId: "firebase_project_id",
    storageBucket: "firebase_storageBucket",
    messagingSenderId: "messageSenderId",
    appId: "firebase_appid"
};

// Initialize Firebase (backend)
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = { db };
