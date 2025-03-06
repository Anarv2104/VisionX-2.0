const express = require("express");
const router = express.Router();
const { db } = require("../services/firebase");
const { doc, setDoc, getDoc } = require("firebase/firestore");

// 🔹 Fetch User Data
router.get("/:id", async (req, res) => {
  try {
    const userRef = doc(db, "users", req.params.id);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(userSnap.data());
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔹 Create or Update User
router.post("/", async (req, res) => {
  const { id, email, githubUsername } = req.body;

  if (!id || !email || !githubUsername) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const userRef = doc(db, "users", id);
    await setDoc(userRef, { email, githubUsername }, { merge: true });

    res.json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;