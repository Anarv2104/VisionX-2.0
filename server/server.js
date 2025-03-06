// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const cookieParser = require("cookie-parser"); // ✅ Add cookie parser
// require('dotenv').config();
// const { db } = require("./services/firebase");

// const app = express();
// const PORT = process.env.PORT || 5100;



// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true, // Allow cookies & authentication headers
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type, Authorization",
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Enable CORS preflight requests

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser()); // ✅ Allow reading cookies

// // Routes
// const githubRoutes = require('./routes/github');
// const userRoutes = require('./routes/user');
// const projectRoutes = require('./routes/projects');

// app.use('/api/github', githubRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/projects', projectRoutes);

// // Serve React App
// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });






// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 5100;

// // ✅ Fix CORS Configuration
// const corsOptions = {
//     origin: "http://localhost:3000", // ✅ Allow frontend origin
//     credentials: true,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type, Authorization",
// };

// // ✅ Ensure Preflight Requests Get Proper Response
// app.options("*", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.status(200).send();
// });

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); 

// app.use(cookieParser()); // ✅ Add cookie-parser

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// // ✅ Import Routes
// const githubRoutes = require("./routes/github");
// app.use("/api/github", githubRoutes);

// // ✅ Start the Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });



// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 5100;

// // ✅ Restore CORS Configuration
// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type, Authorization",
// };

// app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Restore GitHub Routes
// const githubRoutes = require("./routes/github");
// app.use("/api/github", githubRoutes);

// // ✅ Restore React Frontend Serving
// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// // ✅ Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });







// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 5200;

// // ✅ Fix CORS Configuration
// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type, Authorization",
// };

// app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Ensure API routes load **before** frontend static files
// // ✅ Import API routes FIRST
// const githubRoutes = require("./routes/github");
// app.use("/api/github", githubRoutes);

// // ✅ Serve React only for non-API routes
// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//     if (!req.path.startsWith("/api")) {
//         res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     } else {
//         res.status(404).json({ error: "API route not found" });
//     }
// });

// // ✅ Start the Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });







// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const cookieParser = require("cookie-parser");
// require('dotenv').config();
// const { db } = require("./services/firebase");

// const app = express();
// const PORT = process.env.PORT || 5100;

// // ✅ Fix CORS Configuration
// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true, 
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type, Authorization",
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Enable CORS preflight requests

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser()); 

// // ✅ Ensure API Routes are Loaded First
// const githubRoutes = require('./routes/github');
// const userRoutes = require('./routes/user');
// const projectRoutes = require('./routes/projects');

// app.use('/api/github', githubRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/projects', projectRoutes);

// // ✅ Ensure API Requests Don't Redirect to React App
// app.get('/api/*', (req, res) => {
//     res.status(404).json({ error: "API route not found" });
// });

// // ✅ Serve React App for Non-API Routes
// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// // ✅ Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

require("dotenv").config();

console.log("🔍 GITHUB_OWNER:", process.env.GITHUB_OWNER);
console.log("🔍 GITHUB_ACCESS_TOKEN:", process.env.GITHUB_ACCESS_TOKEN ? "Loaded" : "Not Found");
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const { db } = require("./services/firebase");

const app = express();
const PORT = process.env.PORT || 5100;

// ✅ Fix CORS Configuration
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Enable CORS preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 

// ✅ 1️⃣ Load API Routes First (BEFORE React frontend)
const githubRoutes = require('./routes/github');
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/projects');

app.use('/api/github', githubRoutes);
app.use('/api/user', userRoutes);
app.use('/api/projects', projectRoutes);

// ✅ 2️⃣ Prevent React from Handling API Routes
app.get('/api/*', (req, res) => {
    res.status(404).json({ error: "API route not found" });
});

// ✅ 3️⃣ Serve React App for Non-API Routes
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});