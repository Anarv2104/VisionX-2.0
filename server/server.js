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




// require("dotenv").config();

// console.log("🔍 GITHUB_OWNER:", process.env.GITHUB_OWNER);
// console.log("🔍 GITHUB_ACCESS_TOKEN:", process.env.GITHUB_ACCESS_TOKEN ? "Loaded" : "Not Found");
// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const cookieParser = require("cookie-parser");
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

// // ✅ 1️⃣ Load API Routes First (BEFORE React frontend)
// const githubRoutes = require('./routes/github');
// const userRoutes = require('./routes/user');
// const projectRoutes = require('./routes/projects');

// app.use('/api/github', githubRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/projects', projectRoutes);

// // ✅ 2️⃣ Prevent React from Handling API Routes
// app.get('/api/*', (req, res) => {
//     res.status(404).json({ error: "API route not found" });
// });

// // ✅ 3️⃣ Serve React App for Non-API Routes
// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// // ✅ Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });



// // ✅ Load Environment Variables
// require("dotenv").config();

// console.log("🔍 GITHUB_OWNER:", process.env.GITHUB_OWNER);
// console.log("🔍 GITHUB_ACCESS_TOKEN:", process.env.GITHUB_ACCESS_TOKEN ? "Loaded" : "Not Found");

// // ✅ Imports
// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const cookieParser = require("cookie-parser");
// const { db } = require("./services/firebase");  // Make sure this path is correct
// const { ethers } = require("ethers");          // Import ethers for backend usage

// // ✅ Initialize Express
// const app = express();
// const PORT = process.env.PORT || 5100;

// // ✅ CORS Configuration
// const corsOptions = {
//     origin: "http://localhost:3000",  // Replace with your client's origin if different
//     credentials: true,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type, Authorization",
// };
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

// // ✅ Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // ✅ Route Definitions

// const githubRoutes = require('./routes/github');
// const userRoutes = require('./routes/user');
// const projectRoutes = require('./routes/projects');

// app.use('/api/github', githubRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/projects', projectRoutes);

// // ✅ Blockchain-Related Route
// //  Replace with your contract address and ABI from .env
// const contractAddress = process.env.CONTRACT_ADDRESS; // Get from environment variable
// const ownerPrivateKey = process.env.PRIVATE_KEY; //  Get private key

// const contractABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "approve",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "burn",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "allowance",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "needed",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ERC20InsufficientAllowance",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "balance",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "needed",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ERC20InsufficientBalance",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "approver",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC20InvalidApprover",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "receiver",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC20InvalidReceiver",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC20InvalidSender",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC20InvalidSpender",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnableInvalidOwner",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnableUnauthorizedAccount",
// 		"type": "error"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Approval",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "mint",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "previousOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnershipTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "renounceOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transfer",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Transfer",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transferFrom",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "transferOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "allowance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "decimals",
// 		"outputs": [
// 			{
// 				"internalType": "uint8",
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "name",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "symbol",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalSupply",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]; //  Get from environment variable

// // ✅ Transfer Tokens API
// app.post("/api/transfer-tokens", async (req, res) => {  // Changed route to /api/transfer-tokens
//     const { recipientAddress } = req.body;

//     if (!recipientAddress) {
//         return res.status(400).json({ error: "Recipient address is required" });
//     }

//     try {
//          const alchemyApiUrl = process.env.ALCHEMY_API_URL; // Get Alchemy API URL from .env
//          const provider = new ethers.providers.JsonRpcProvider(alchemyApiUrl);
//         const wallet = new ethers.Wallet(ownerPrivateKey, provider);
//         const contract = new ethers.Contract(contractAddress, contractABI, wallet);

//         const amount = ethers.utils.parseUnits("1.0", 18); // 1 token with 18 decimals

//         const tx = await contract.transfer(recipientAddress, amount);
//         await tx.wait();

//         console.log("Transaction hash:", tx.hash);
//         res.json({ success: true, transactionHash: tx.hash });
//     } catch (error) {
//         console.error("Error transferring tokens:", error);
//         res.status(500).json({ error: "Failed to transfer tokens", details: error.message });
//     }
// });

// // ✅  React App Serving (Make sure this stays at the end)
// app.get('/api/*', (req, res) => {
//     res.status(404).json({ error: "API route not found" });
// });

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


// // ✅ Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });


// ✅ Load Environment Variables
require("dotenv").config();

console.log("🔍 GITHUB_OWNER:", process.env.GITHUB_OWNER);
console.log("🔍 GITHUB_ACCESS_TOKEN:", process.env.GITHUB_ACCESS_TOKEN ? "Loaded" : "Not Found");

// ✅ Imports
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const { db } = require("./services/firebase");  // Make sure this path is correct
const { ethers } = require("ethers");          // Import ethers for backend usage
const { Octokit } = require("@octokit/rest");

// ✅ Initialize Express
const app = express();
const PORT = process.env.PORT || 5100;

// ✅ CORS Configuration
const corsOptions = {
    origin: "http://localhost:3000",  // Replace with your client's origin if different
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Route Definitions
const githubRoutes = require('./routes/github');
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/projects');

app.use('/api/github', githubRoutes);
app.use('/api/user', userRoutes);
app.use('/api/projects', projectRoutes);

// ✅ Blockchain-Related Route
//  Replace with your contract address and ABI from .env
const contractAddress = process.env.CONTRACT_ADDRESS; // Get from environment variable
const ownerPrivateKey = process.env.PRIVATE_KEY; //  Get private key
const alchemyApiUrl = process.env.ALCHEMY_API_URL;

const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]; //  Get from environment variable

// ✅ Transfer Tokens API
app.post("/api/transfer-tokens", async (req, res) => {  // Changed route to /api/transfer-tokens
    const { recipientAddress } = req.body;

    if (!recipientAddress) {
        return res.status(400).json({ error: "Recipient address is required" });
    }

    try {
         const provider = new ethers.providers.JsonRpcProvider(alchemyApiUrl); // Get Alchemy API URL from .env
         const wallet = new ethers.Wallet(ownerPrivateKey, provider);
         const contract = new ethers.Contract(contractAddress, contractABI, wallet);

        const amount = ethers.utils.parseUnits("1.0", 18); // 1 token with 18 decimals

        const tx = await contract.transfer(recipientAddress, amount);
        await tx.wait();

        console.log("Transaction hash:", tx.hash);
        res.json({ success: true, transactionHash: tx.hash });
    } catch (error) {
        console.error("Error transferring tokens:", error);
        res.status(500).json({ error: "Failed to transfer tokens", details: error.message });
    }
});

// ✅ Github API
//const githubRoutes = require('./routes/github');
//app.use('/api/github', githubRoutes);

app.post('/api/github/create-pr', async (req, res) => {
  try {
    const { repo, headBranch, baseBranch, title, body } = req.body;
    const owner = process.env.GITHUB_OWNER; // Ensure you have GITHUB_OWNER in .env

    if (!repo || !headBranch || !baseBranch || !title || !body) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

    // Construct the API URL correctly
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pulls`; // Fixed URL

     console.log("GitHub API URL:", apiUrl); // Added Debug console logs
     console.log("GitHub Owner:", owner);
     console.log("Repo Name:", repo);

    const response = await octokit.request('POST ' + apiUrl, {  // Or just apiUrl
      owner: owner,
      repo: repo,
      title: title,
      head: headBranch,
      base: baseBranch,
      body: body
    });

    console.log("PR Created:", response.data);
    res.json({ prNumber: response.data.number, success: true });

  } catch (error) {
    console.error("GitHub API Error:", error);
    res.status(500).json({ error: "Failed to create pull request", details: error.message });
  }
});

// ✅  React App Serving (Make sure this stays at the end)
app.get('/api/*', (req, res) => {
    res.status(404).json({ error: "API route not found" });
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});