const express = require("express");
const router = express.Router();
const { db } = require("../services/firebase");
const { collection, doc, getDoc, setDoc, getDocs } = require("firebase/firestore");

// 🔹 Fetch All Projects
router.get("/", async (req, res) => {
  try {
    const projectsRef = collection(db, "projects");
    const projectsSnap = await getDocs(projectsRef);

    if (projectsSnap.empty) {
      return res.status(404).json({ message: "No projects found" });
    }

    let projects = [];
    projectsSnap.forEach(doc => {
      projects.push({ id: doc.id, ...doc.data() });
    });

    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔹 Fetch a Single Project by ID
router.get("/:id", async (req, res) => {
  try {
    const projectRef = doc(db, "projects", req.params.id);
    const projectSnap = await getDoc(projectRef);

    if (!projectSnap.exists()) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(projectSnap.data());
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔹 Create or Update a Project
router.post("/", async (req, res) => {
  const { id, title, description, githubRepo, creator } = req.body;

  if (!id || !title || !description || !githubRepo || !creator) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const projectRef = doc(db, "projects", id);
    await setDoc(projectRef, { title, description, githubRepo, creator }, { merge: true });

    res.json({ success: true, message: "Project saved successfully" });
  } catch (error) {
    console.error("Error saving project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;