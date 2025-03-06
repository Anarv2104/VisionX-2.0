// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding accessToken)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${GITHUB_ORG}/repos`, {
//             headers: {
//                 Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding Access Token)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     console.log("🔹 Redirecting user to GitHub OAuth...");
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         console.log("✅ OAuth Code Received:", code);

//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         console.log("🔹 GitHub User Authenticated:", username);

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("❌ GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     console.log("🔹 Redirecting user to GitHub OAuth...");
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         console.log("✅ OAuth Code Received:", code);

//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         console.log("🔹 GitHub User Authenticated:", username);

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("❌ GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// module.exports = router;








// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding accessToken)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     const token = req.headers.authorization?.split(" ")[1];  // ✅ Read token from header

//     if (!token) {
//         return res.status(401).json({ success: false, message: "Missing access token" });
//     }

//     try {
//         const response = await axios.get(`https://api.github.com/user/repos`, {
//             headers: {
//                 Authorization: `token ${token}`,
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });

// module.exports = router;











// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding accessToken)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     const token = process.env.GITHUB_ACCESS_TOKEN;  // ✅ Use the token from .env
//     if (!token) {
//     return res.status(401).json({ success: false, message: "GitHub access token is missing" });
// }

//     try {
//         const response = await axios.get(`https://api.github.com/user/repos`, {
//             headers: {
//                 Authorization: `token ${token}`,
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding accessToken)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     try {
//         const response = await axios.get(`https://api.github.com/user/repos`, {
//             headers: {
//                 Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`, // ✅ Ensuring token is correct
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("❌ Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });

// module.exports = router;












// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     console.log("🔍 Received OAuth Code:", code);

//     if (!code) {
//         console.warn("❌ No authorization code received!");
//         return res.status(400).json({ error: "Authorization code missing" });
//     }

//     try {
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             {
//                 client_id: CLIENT_ID,
//                 client_secret: CLIENT_SECRET,
//                 code,
//             },
//             {
//                 headers: { Accept: "application/json" },
//             }
//         );

//         console.log("🔍 GitHub Token Response:", tokenResponse.data);

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) {
//             console.warn("❌ Failed to obtain access token!");
//             return res.status(400).json({ error: "Failed to obtain access token" });
//         }

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         console.log("🔍 GitHub User Response:", userResponse.data);

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Generate JWT Token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         console.log("✅ Generated JWT Token:", jwtToken);

//         // Redirect user to frontend with JWT
//         res.redirect(`http://localhost:3000/github-link?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     try {
//         const response = await axios.get(`https://api.github.com/user/repos`, {
//             headers: {
//                 Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`, // ✅ Ensuring token is correct
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("❌ Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });


// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     console.log("🔍 Received OAuth Code:", code);

//     if (!code) {
//         console.warn("❌ No authorization code received!");
//         return res.status(400).json({ error: "Authorization code missing" });
//     }

//     try {
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             {
//                 client_id: CLIENT_ID,
//                 client_secret: CLIENT_SECRET,
//                 code,
//             },
//             {
//                 headers: { Accept: "application/json" },
//             }
//         );

//         console.log("🔍 GitHub Token Response:", tokenResponse.data);

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) {
//             console.warn("❌ Failed to obtain access token!");
//             return res.status(400).json({ error: "Failed to obtain access token" });
//         }

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         console.log("🔍 GitHub User Response:", userResponse.data);

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Generate JWT Token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         console.log("✅ Generated JWT Token:", jwtToken);

//         // Redirect user to frontend with JWT
//         res.redirect(`http://localhost:3000/github-link?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// router.post("/grant-access", async (req, res) => {
//     const { repoName, username } = req.body;
    
//     if (!repoName || !username) {
//         return res.status(400).json({ message: "Missing required fields" });
//     }

//     try {
//         const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
//         const OWNER = process.env.GITHUB_OWNER; // Your GitHub username

//         const response = await axios.put(
//             `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
//             {},
//             {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                     Accept: "application/vnd.github.v3+json",
//                 },
//             }
//         );

//         if (response.status === 201) {
//             return res.status(200).json({ message: `Access granted to ${username} for ${repoName}` });
//         } else {
//             return res.status(response.status).json({ message: "Failed to grant access" });
//         }
//     } catch (error) {
//         console.error("GitHub API Error:", error.response?.data || error.message);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// router.get("/check-access/:repoName/:username", async (req, res) => {
//     const { repoName, username } = req.params;

//     try {
//         const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
//         const OWNER = process.env.GITHUB_OWNER;

//         const response = await axios.get(
//             `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
//             {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                     Accept: "application/vnd.github.v3+json",
//                 },
//             }
//         );

//         if (response.status === 204) {
//             return res.status(200).json({ message: `${username} has access to ${repoName}` });
//         } else {
//             return res.status(response.status).json({ message: "User does not have access" });
//         }
//     } catch (error) {
//         return res.status(404).json({ message: "User does not have access or repository not found" });
//     }
// });

// router.get("/auth", async (req, res) => {
//     try {
//         const githubToken = req.cookies.githubToken;
//         if (!githubToken) {
//             return res.status(401).json({ message: "GitHub authentication required" });
//         }

//         const userResponse = await fetch("https://api.github.com/user", {
//             headers: { Authorization: `token ${githubToken}` },
//         });
//         const userData = await userResponse.json();

//         if (!userData || !userData.login) {
//             return res.status(400).json({ message: "Failed to fetch GitHub user data" });
//         }

//         const username = userData.login;  // ✅ GitHub Username

//         res.json({
//             token: githubToken,
//             username: username,  // ✅ Send username in response
//         });
//     } catch (error) {
//         console.error("GitHub OAuth error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// module.exports = router;











// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     try {
//         const response = await axios.get(`https://api.github.com/user/repos`, {
//             headers: {
//                 Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`, // ✅ Ensuring token is correct
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("❌ Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });


// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     console.log("🔍 Received OAuth Code:", code);

//     if (!code) {
//         console.warn("❌ No authorization code received!");
//         return res.status(400).json({ error: "Authorization code missing" });
//     }

//     try {
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             {
//                 client_id: CLIENT_ID,
//                 client_secret: CLIENT_SECRET,
//                 code,
//             },
//             {
//                 headers: { Accept: "application/json" },
//             }
//         );

//         console.log("🔍 GitHub Token Response:", tokenResponse.data);

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) {
//             console.warn("❌ Failed to obtain access token!");
//             return res.status(400).json({ error: "Failed to obtain access token" });
//         }

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         console.log("🔍 GitHub User Response:", userResponse.data);

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Generate JWT Token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         console.log("✅ Generated JWT Token:", jwtToken);

//         // ✅ Store token in HTTP-Only cookies for security
//         res.cookie("githubToken", accessToken, {
//             httpOnly: true,  // ✅ Prevent JavaScript access
//             secure: false,   // ❌ Set to true in production with HTTPS
//             sameSite: "Lax", // ✅ Helps prevent CSRF
//         });

//         // Redirect user to frontend
//         res.redirect(`http://localhost:3000/github-link?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// router.post("/grant-access", async (req, res) => {
//     const { repoName, username } = req.body;
    
//     if (!repoName || !username) {
//         return res.status(400).json({ message: "Missing required fields" });
//     }

//     try {
//         const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
//         const OWNER = process.env.GITHUB_OWNER; // Your GitHub username

//         const response = await axios.put(
//             `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
//             {},
//             {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                     Accept: "application/vnd.github.v3+json",
//                 },
//             }
//         );

//         if (response.status === 201) {
//             return res.status(200).json({ message: `Access granted to ${username} for ${repoName}` });
//         } else {
//             return res.status(response.status).json({ message: "Failed to grant access" });
//         }
//     } catch (error) {
//         console.error("GitHub API Error:", error.response?.data || error.message);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// router.get("/check-access/:repoName/:username", async (req, res) => {
//     const { repoName, username } = req.params;

//     try {
//         const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
//         const OWNER = process.env.GITHUB_OWNER;

//         const response = await axios.get(
//             `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
//             {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                     Accept: "application/vnd.github.v3+json",
//                 },
//             }
//         );

//         if (response.status === 204) {
//             return res.status(200).json({ message: `${username} has access to ${repoName}` });
//         } else {
//             return res.status(response.status).json({ message: "User does not have access" });
//         }
//     } catch (error) {
//         return res.status(404).json({ message: "User does not have access or repository not found" });
//     }
// });

// router.get("/auth", async (req, res) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Credentials", "true");

//     try {
//         const githubToken = req.cookies.githubToken; // ✅ Read from cookies
//         if (!githubToken) {
//             return res.status(401).json({ message: "GitHub authentication required" });
//         }

//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${githubToken}` },
//         });

//         const userData = userResponse.data;

//         if (!userData || !userData.login) {
//             return res.status(400).json({ message: "Failed to fetch GitHub user data" });
//         }

//         res.json({
//             token: githubToken, // ✅ Return token
//             username: userData.login,
//         });
//     } catch (error) {
//         console.error("GitHub OAuth error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// router.post("/merge-pr", async (req, res) => {
//     const { repoName, prNumber } = req.body;

//     if (!repoName || !prNumber) {
//         return res.status(400).json({ message: "Missing required fields" });
//     }

//     try {
//         const response = await axios.put(
//             `https://api.github.com/repos/mr-scientists/${repoName}/pulls/${prNumber}/merge`,
//             {},
//             {
//                 headers: {
//                     Authorization: `token ${ACCESS_TOKEN}`,
//                     Accept: "application/vnd.github.v3+json",
//                 },
//             }
//         );

//         if (response.status === 200) {
//             return res.status(200).json({ message: `PR #${prNumber} merged successfully` });
//         } else {
//             return res.status(response.status).json({ message: "Failed to merge PR" });
//         }
//     } catch (error) {
//         console.error("GitHub API Error:", error.response?.data || error.message);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// module.exports = router;








const express = require("express");
const router = express.Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { db } = require("../services/firebase");
const { doc, setDoc, getDoc } = require("firebase/firestore");
const { Octokit } = require("@octokit/rest");


require("dotenv").config();
const GITHUB_ORG = "mr-scientists"; // ✅
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// 🔹 Step 1: Redirect to GitHub OAuth
router.get("/login", (req, res) => {
    const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
    console.log("🔗 Redirecting to GitHub OAuth:", githubAuthURL);
    res.redirect(githubAuthURL);
});


// 🔹 Step 3: Get User GitHub Data
router.get("/user", async (req, res) => {
    const { username } = req.query;
    if (!username) return res.status(400).json({ error: "Username required" });

    try {
        const userRef = doc(db, "users", username);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

        res.json(userSnap.data());
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});

router.get("/repos", async (req, res) => {
    try {
        const response = await axios.get(`https://api.github.com/user/repos`, {
            headers: {
                Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`, // ✅ Ensuring token is correct
                Accept: "application/vnd.github.v3+json",
            },
        });

        const repositories = response.data.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count
        }));

        res.json({ success: true, repositories });
    } catch (error) {
        console.error("❌ Error fetching GitHub repositories:", error.message);
        res.status(500).json({ success: false, message: "Failed to fetch repositories" });
    }
});


router.get("/callback", async (req, res) => {
    const { code } = req.query;

    if (!code) {
        console.warn("❌ No authorization code received!");
        return res.status(400).json({ error: "Authorization code missing" });
    }

    try {
        const tokenResponse = await axios.post(
            "https://github.com/login/oauth/access_token",
            {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
            },
            {
                headers: { Accept: "application/json" },
            }
        );

        const accessToken = tokenResponse.data.access_token;
        if (!accessToken) {
            console.warn("❌ Failed to obtain access token!");
            return res.status(400).json({ error: "Failed to obtain access token" });
        }

        // Fetch GitHub user details
        const userResponse = await axios.get("https://api.github.com/user", {
            headers: { Authorization: `token ${accessToken}` },
        });

        const githubUser = userResponse.data;
        const username = githubUser.login;

        // Generate JWT Token
        const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

        // ✅ Store token in HTTP-Only cookies for security
        res.cookie("githubToken", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
        });

        // ✅ Redirect user to frontend
        res.redirect(`http://localhost:3000/github-link?token=${jwtToken}`);
    } catch (error) {
        console.error("GitHub OAuth Error:", error.message);
        res.status(500).json({ error: "GitHub Authentication Failed" });
    }
});

router.post("/grant-access", async (req, res) => {
    const { repoName, username } = req.body;

    if (!repoName || !username) {
        return res.status(400).json({ message: "Missing required fields: repoName or username" });
    }

    try {
        const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
        const OWNER = process.env.GITHUB_OWNER;

            if (!OWNER) {
                console.error("❌ ERROR: GITHUB_OWNER is not defined. Check .env file.");
                return res.status(500).json({ message: "Internal Server Error: OWNER is not defined" });
            }
        console.log("🔍 ENV OWNER:", OWNER);
        console.log(`🔍 Checking if ${username} already has access to ${repoName}`);

        const checkResponse = await axios.get(
            `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );

        if (checkResponse.status === 204) {
            console.log(`✅ ${username} already has access to ${repoName}`);
            return res.status(200).json({ message: `User ${username} already has access` });
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log(`🔍 User ${username} does NOT have access. Granting now...`);
        } else {
            console.error("❌ Error checking access:", error.response?.data || error.message);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    try {
        console.log(`🚀 Granting access to ${username} for ${repoName}`);
        
        const response = await axios.put(
            `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
            {},
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );

        if (response.status === 201) {
            console.log(`✅ Access granted to ${username} for ${repoName}`);
            return res.status(200).json({ message: `Access granted to ${username} for ${repoName}` });
        } else {
            return res.status(response.status).json({ message: "Failed to grant access" });
        }
    } catch (error) {
        console.error("❌ GitHub API Error:", error.response?.data || error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/check-access/:repoName/:username", async (req, res) => {
    const { repoName, username } = req.params;

    try {
        const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
        const OWNER = process.env.GITHUB_OWNER;

        if (!OWNER) {
            console.error("❌ ERROR: GITHUB_OWNER is not defined. Check .env file.");
            return res.status(500).json({ message: "Internal Server Error: OWNER is not defined" });
        }

        console.log(`🔍 Checking access for user: ${username} on repo: ${repoName}`);

        const response = await axios.get(
            `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );

        if (response.status === 204) {
            console.log(`✅ User ${username} already has access to ${repoName}`);
            return res.status(200).json({ hasAccess: true });
        }
    } catch (error) {
        if (error.response) {
            console.log("❌ GitHub API Error:", error.response.data);

            if (error.response.status === 404) {
                return res.status(404).json({ message: "Repository or username incorrect" });
            }
        } else {
            console.error("❌ Unknown error checking GitHub access:", error.message);
        }

        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/auth", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");

    try {
        const githubToken = req.cookies.githubToken; // ✅ Read from cookies
        if (!githubToken) {
            return res.status(401).json({ message: "GitHub authentication required" });
        }

        const userResponse = await axios.get("https://api.github.com/user", {
            headers: { Authorization: `token ${githubToken}` },
        });

        const userData = userResponse.data;

        if (!userData || !userData.login) {
            return res.status(400).json({ message: "Failed to fetch GitHub user data" });
        }

        res.json({
            token: githubToken, // ✅ Return token
            username: userData.login,
        });
    } catch (error) {
        console.error("GitHub OAuth error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/merge-pr", async (req, res) => {
    const { repoName, prNumber } = req.body;

    if (!repoName || !prNumber) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const response = await axios.put(
            `https://api.github.com/repos/mr-scientists/${repoName}/pulls/${prNumber}/merge`,
            {},
            {
                headers: {
                    Authorization: `token ${ACCESS_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );

        if (response.status === 200) {
            return res.status(200).json({ message: `PR #${prNumber} merged successfully` });
        } else {
            return res.status(response.status).json({ message: "Failed to merge PR" });
        }
    } catch (error) {
        console.error("GitHub API Error:", error.response?.data || error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
});

const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
});

  router.post("/create-pr", async (req, res) => {
    try {
        const { repo, headBranch, baseBranch, title, body } = req.body;

        const response = await octokit.pulls.create({
            owner: "mr-scientists",
            repo,
            title,
            head: headBranch,
            base: baseBranch,
            body,
        });

        // Add "auto-merge" label
        await octokit.issues.addLabels({
            owner: "mr-scientists",
            repo,
            issue_number: response.data.number,
            labels: ["auto-merge"],
        });

        res.status(200).json({ message: "PR Created Successfully!", pr: response.data });
    } catch (error) {
        console.error("GitHub API Error:", error);
        res.status(500).json({ message: "Error creating PR", error: error.message });
    }
});  

router.get("/check-pr-merge/:repoName/:username", async (req, res) => {
    const { repoName, username } = req.params;
    const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
    const OWNER = process.env.GITHUB_OWNER;

    if (!OWNER) {
        console.error("❌ ERROR: GITHUB_OWNER is not defined. Check .env file.");
        return res.status(500).json({ message: "Internal Server Error: OWNER is not defined" });
    }
    try {
        console.log(`🔍 Checking PR merge status for ${username} in repo: ${repoName}`);

        const response = await axios.get(
            `https://api.github.com/repos/${OWNER}/${repoName}/pulls?state=closed`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );

        const closedPRs = response.data;
        const mergedPR = closedPRs.find(pr => pr.user.login === username && pr.merged_at);

        if (mergedPR) {
            console.log(`✅ PR merged for ${username} in ${repoName}`);
            return res.status(200).json({ merged: true });
        } else {
            console.log(`❌ No merged PR found for ${username} in ${repoName}`);
            return res.status(200).json({ merged: false });
        }
    } catch (error) {
        console.error("❌ GitHub API Error:", error.response?.data || error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/webhook", async (req, res) => {
    const event = req.headers["x-github-event"];
    const payload = req.body;

    if (event === "pull_request" && payload.action === "closed" && payload.pull_request.merged) {
        const repoName = payload.repository.name;
        const username = payload.pull_request.user.login;
        const prId = payload.pull_request.id;
        const contributorAddress = await getUserWalletAddress(username);

        console.log(`🔍 PR Merged: Repo=${repoName}, User=${username}, PR_ID=${prId}`);

        if (!contributorAddress) {
            console.error(`❌ No wallet address found for ${username}`);
            return res.status(400).json({ error: "Contributor has no wallet linked" });
        }

        try {
            // Reward the contributor with 10 VXT tokens
            const rewardAmount = ethers.parseUnits("10", 18);
            const tx = await contract.rewardContributor(contributorAddress, rewardAmount, prId);
            await tx.wait();

            console.log(`✅ Tokens rewarded to ${username} (${contributorAddress}) for PR ${prId}`);

            // Update Firebase token balance
            await updateContributorTokens(username, rewardAmount);

            return res.status(200).json({ message: "Tokens rewarded successfully" });
        } catch (error) {
            console.error("❌ Error rewarding tokens:", error);
            return res.status(500).json({ message: "Failed to reward tokens" });
        }
    }

    res.status(200).json({ message: "Webhook received" });
});

// Function to get contributor wallet address from Firebase
async function getUserWalletAddress(username) {
    try {
        const userRef = db.collection("users").doc(username);
        const userDoc = await userRef.get();
        return userDoc.exists ? userDoc.data().walletAddress : null;
    } catch (error) {
        console.error("❌ Error fetching wallet address:", error);
        return null;
    }
}

// Function to update contributor token balance in Firebase
async function updateContributorTokens(username, amount) {
    try {
        const userRef = db.collection("users").doc(username);
        const userDoc = await userRef.get();

        if (userDoc.exists) {
            const newBalance = userDoc.data().tokensEarned + Number(ethers.formatUnits(amount, 18));
            await userRef.update({ tokensEarned: newBalance });
        } else {
            await userRef.set({ tokensEarned: Number(ethers.formatUnits(amount, 18)) });
        }

        console.log(`🔄 Updated token balance for ${username}`);
    } catch (error) {
        console.error("❌ Error updating token balance:", error);
    }
}

module.exports = router;



// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");
// const { Octokit } = require("@octokit/rest");

// require("dotenv").config();

// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
// const OWNER = process.env.GITHUB_OWNER;  // Make sure this is correctly set in .env

// if (!OWNER) {
//     console.error("❌ ERROR: GITHUB_OWNER is not defined. Check .env file.");
//     process.exit(1);  // Stop the server if critical env variable is missing
// }

// // Initialize Octokit with authentication
// const octokit = new Octokit({
//     auth: ACCESS_TOKEN,
// });

// // 🔹 **Redirect to GitHub OAuth**
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     console.log("🔗 Redirecting to GitHub OAuth:", githubAuthURL);
//     res.redirect(githubAuthURL);
// });

// // 🔹 **Check if User has Access**
// router.get("/check-access/:repoName/:username", async (req, res) => {
//     const { repoName, username } = req.params;

//     try {
//         console.log(`🔍 Checking access for user: ${username} on repo: ${repoName}`);

//         const response = await axios.get(
//             `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
//             {
//                 headers: {
//                     Authorization: `token ${ACCESS_TOKEN}`,
//                     Accept: "application/vnd.github.v3+json",
//                 },
//             }
//         );

//         if (response.status === 204) {
//             console.log(`✅ User ${username} already has access to ${repoName}`);
//             return res.status(200).json({ hasAccess: true });
//         }
//     } catch (error) {
//         console.log("❌ GitHub API Error:", error.response?.data || error.message);

//         if (error.response?.status === 404) {
//             return res.status(404).json({ message: "User does not have access" });
//         }

//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// // 🔹 **Grant Repository Access**
// // ✅ Grant Access Function
// router.post("/grant-access", async (req, res) => {
//     const { repoName, username } = req.body;

//     if (!repoName || !username) {
//         return res.status(400).json({ message: "Missing required fields: repoName or username" });
//     }

//     console.log(`🚀 Granting access to ${username} for ${repoName}`);

//     try {
//         const response = await axios.put(
//             `https://api.github.com/repos/${OWNER}/${repoName}/collaborators/${username}`,
//             {},
//             {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                     Accept: "application/vnd.github.v3+json",
//                 },
//             }
//         );

//         if (response.status === 201) {
//             console.log(`✅ Access granted to ${username} for ${repoName}`);
//             return res.status(200).json({ message: `Access granted to ${username} for ${repoName}` });
//         } else {
//             return res.status(response.status).json({ message: "Failed to grant access" });
//         }
//     } catch (error) {
//         console.error("❌ GitHub API Error:", error.response?.data || error.message);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// // 🔹 **Check if PR is Merged**
// router.get("/check-pr-merge/:repoName/:username", async (req, res) => {
//     const { repoName, username } = req.params;

//     try {
//         console.log(`🔍 Checking PR merge status for ${username} in repo: ${repoName}`);

//         const response = await axios.get(
//             `https://api.github.com/repos/${OWNER}/${repoName}/pulls?state=closed`,
//             {
//                 headers: {
//                     Authorization: `token ${ACCESS_TOKEN}`,
//                     Accept: "application/vnd.github.v3+json",
//                 },
//             }
//         );

//         const closedPRs = response.data;
//         const mergedPR = closedPRs.find(pr => pr.user.login === username && pr.merged_at);

//         if (mergedPR) {
//             console.log(`✅ PR merged for ${username} in ${repoName}`);
//             return res.status(200).json({ merged: true });
//         } else {
//             console.log(`❌ No merged PR found for ${username} in ${repoName}`);
//             return res.status(200).json({ merged: false });
//         }
//     } catch (error) {
//         console.error("❌ GitHub API Error:", error.response?.data || error.message);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// // 🔹 **Handle PR Creation**
// router.post("/create-pr", async (req, res) => {
//     try {
//         const { repo, headBranch, baseBranch, title, body } = req.body;

//         const response = await octokit.pulls.create({
//             owner: OWNER,
//             repo,
//             title,
//             head: headBranch,
//             base: baseBranch,
//             body,
//         });

//         await octokit.issues.addLabels({
//             owner: OWNER,
//             repo,
//             issue_number: response.data.number,
//             labels: ["auto-merge"],
//         });

//         res.status(200).json({ message: "PR Created Successfully!", pr: response.data });
//     } catch (error) {
//         console.error("GitHub API Error:", error);
//         res.status(500).json({ message: "Error creating PR", error: error.message });
//     }
// });

// // 🔹 **Fix for GitHub OAuth Authentication**
// router.get("/auth", async (req, res) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Credentials", "true");

//     try {
//         const githubToken = req.cookies.githubToken;
//         if (!githubToken) {
//             return res.status(401).json({ message: "GitHub authentication required" });
//         }

//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${githubToken}` },
//         });

//         const userData = userResponse.data;

//         if (!userData || !userData.login) {
//             return res.status(400).json({ message: "Failed to fetch GitHub user data" });
//         }

//         res.json({
//             token: githubToken,
//             username: userData.login,
//         });
//     } catch (error) {
//         console.error("GitHub OAuth error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// module.exports = router;