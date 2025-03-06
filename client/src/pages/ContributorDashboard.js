// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ContributorDashboard = () => {
//   const [contributions, setContributions] = useState([]);
//   const [totalTokens, setTotalTokens] = useState(0);

//   // ✅ Fetch tokens from LocalStorage & API on component mount
//   useEffect(() => {
//     let storedTokens = parseFloat(localStorage.getItem("tokensEarned")) || 0;
//     setTotalTokens(storedTokens);
    
//     fetchContributions();
//   }, []);

//   const fetchContributions = async () => {
//     try {
//       const response = await axios.get("http://localhost:5100/api/contributions");
//       setContributions(response.data.contributions);
      
//       // ✅ Update tokens from API if available
//       if (response.data.totalTokens > 0) {
//         setTotalTokens(response.data.totalTokens);
//         localStorage.setItem("tokensEarned", response.data.totalTokens.toFixed(3));
//       }
//     } catch (error) {
//       console.error("Error fetching contributions:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-900 mb-6">🎖️ My Contributions</h1>

//         <div className="p-4 bg-blue-200 rounded-md mb-4">
//           <h2 className="text-xl font-semibold">
//             Total Tokens Earned: ${totalTokens.toFixed(3)} 🪙  {/* ✅ Now dynamically updates */}
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {contributions.map((contribution) => (
//             <div key={contribution.projectId} className="p-4 bg-white shadow-md rounded-md">
//               <h2 className="text-xl font-bold">{contribution.projectName}</h2>
//               <p className="text-gray-600">Tokens Earned: {contribution.tokens}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContributorDashboard;










import React, { useState, useEffect } from "react";
import { ethers } from 'ethers'; // Import ethers.js
import { BrowserProvider, Contract } from 'ethers';
import { parseUnits, formatUnits } from 'ethers';
import axios from "axios";

// Replace with your contract address and ABI
const contractAddress = "0x0cd032ab735fd629c1578e247eaabe537e7302b4"; // ****REPLACE WITH YOUR DEPLOYED CONTRACT ADDRESS****
const contractABI =  [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
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
]
// Paste the ABI from Remix after compiling your contract
// Replace with your private key (ENSURE SECURITY - use environment variables)

const ContributorDashboard = () => {
  const [contributions, setContributions] = useState([]);
  const [totalTokens, setTotalTokens] = useState(0);
  const [account, setAccount] = useState(null); // User's wallet address

  useEffect(() => {
      checkIfWalletIsConnected();
      fetchContributions();
  }, []);

  const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
          try {
              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              setAccount(accounts[0]);
              console.log("Account connected:", accounts[0]);
          } catch (error) {
              console.error("Error connecting wallet:", error);
          }
      } else {
          console.log("MetaMask not detected");
          alert("Please install MetaMask!");
      }
  };


  const fetchContributions = async () => {
      try {
          const response = await axios.get("http://localhost:5100/api/contributions");
          setContributions(response.data.contributions);

          // Update tokens from API if available
          if (response.data.totalTokens > 0) {
              setTotalTokens(response.data.totalTokens);
              localStorage.setItem("tokensEarned", response.data.totalTokens.toFixed(3));
          }
      } catch (error) {
          console.error("Error fetching contributions:", error);
      }
      await getBalance();
  };

  const transferTokens = async () => {
      if (!account) {
          alert("Please connect your wallet!");
          return;
      }

      try {
          const provider = new BrowserProvider(window.ethereum);  // Use BrowserProvider
          const signer = await provider.getSigner();
          const contract = new Contract(contractAddress, contractABI, signer);

          // Transfer 1 token (adjust amount as needed, taking decimals into account)
          const amount = parseUnits("1.0", 18); // Assuming 18 decimals

          const transaction = await contract.transfer(account, amount);  // Transfer to the connected wallet
          await transaction.wait(); // Wait for the transaction to be mined

          console.log("Tokens transferred successfully!");
          alert("Tokens transferred successfully!");

          // Refresh balance and contributions
          await fetchContributions();

      } catch (error) {
          console.error("Error transferring tokens:", error);
          alert("Error transferring tokens: " + error.message);
      }
  };

  const getBalance = async () => {
    if (!account) {
        console.log("Wallet not connected");
        return;
    }

    try {
        const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider
        const contract = new Contract(contractAddress, contractABI, provider);

        const balance = await contract.balanceOf(account);
        const formattedBalance = formatUnits(balance, 18);  // Assuming 18 decimals
        setTotalTokens(parseFloat(formattedBalance)); // Update state with the new balance
        console.log("Balance:", formattedBalance);
    } catch (error) {
        console.error("Error getting balance:", error);
    }
};


  return (
      <div className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">🎖️ My Contributions</h1>

              <div className="p-4 bg-blue-200 rounded-md mb-4">
                  <h2 className="text-xl font-semibold">
                      Total Tokens Earned: ${totalTokens.toFixed(3)} 🪙  {/* Now dynamically updates */}
                  </h2>
                  <button
  onClick={transferTokens}
  style={{
    marginTop: "0.5rem",
    padding: "0.5rem 1rem", /*8px 16px*/
    borderRadius: "0.375rem",
    fontWeight: "500",
    color: "white",
    backgroundColor: "#3b82f6",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    transition: "background-color 0.2s ease-in-out",
    cursor: "pointer",
    border: "none",
  }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
  onMouseLeave={(e) => (e.target.style.backgroundColor = "#3b82f6")}
>
  Claim Tokens ✨
</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contributions.map((contribution) => (
                      <div key={contribution.projectId} className="p-4 bg-white shadow-md rounded-md">
                          <h2 className="text-xl font-bold">{contribution.projectName}</h2>
                          <p className="text-gray-600">Tokens Earned: {contribution.tokens}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default ContributorDashboard;