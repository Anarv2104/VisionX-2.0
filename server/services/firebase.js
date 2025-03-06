const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
require("dotenv").config(); // Load environment variables

const firebaseConfig = {
    apiKey: "AIzaSyDcskHkK0vW5qk5S5ZNmOC4BQQTFt-U8fc",
    authDomain: "visionxapp-9347e.firebaseapp.com",
    projectId: "visionxapp-9347e",
    storageBucket: "visionxapp-9347e.firebasestorage.app",
    messagingSenderId: "333547970756",
    appId: "1:333547970756:web:0171347023c8e7bbaca991"
};

// Initialize Firebase (backend)
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = { db };