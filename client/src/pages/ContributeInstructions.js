// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const ContributeInstructions = () => {
//   const { repoName } = useParams();
//   const navigate = useNavigate();
//   const [repoOwner, setRepoOwner] = useState("mr-scientists");

//   useEffect(() => {
//     setRepoOwner("mr-scientists");
//   }, []);

//   const handleGoToDashboard = () => {
//     let currentTokens = parseFloat(localStorage.getItem("tokensEarned")) || 0;
//     console.log("Before Update: Tokens in LocalStorage =", currentTokens); 

//     currentTokens += 0.005; // ✅ Increment by 0.005
//     localStorage.setItem("tokensEarned", currentTokens.toFixed(3));

//     console.log("After Update: Tokens in LocalStorage =", localStorage.getItem("tokensEarned"));

//     navigate("/contributor-dashboard"); 
//     setTimeout(() => {
//       window.scrollTo(0, 0);
//     }, 100);
//   };

//   // ✅ Function to Create PR and Attempt Auto Merge
//   const handleCreatePR = async () => {
//     try {
//       const response = await fetch("http://localhost:5100/api/github/create-pr", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           repo: repoName, // ✅ Dynamic repo name
//           headBranch: "feature-branch",
//           baseBranch: "main",
//           title: "feat: Added new feature",
//           body: "Detailed description of the changes.",
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(`✅ PR Created Successfully: #${data.prNumber}`);
//         console.log("PR Created:", data);
//       } else {
//         alert(`⚠️ PR Created but Failed to Auto-Merge: #${data.prNumber}`);
//       }
//     } catch (err) {
//       console.error("❌ PR Creation Error:", err);
//       alert("Error creating the PR.");
//     }
//   };

//   return (
//     <div style={{ marginTop: "150px", padding: "30px", color: "white", backgroundColor: "black", borderRadius: "8px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
//         Contribution Guide for <span style={{ color: "lightgrey" }}>{repoName}</span>
//       </h2>
//       <p style={{ color: "grey", textAlign: "center", marginBottom: "30px" }}>
//         Follow these steps to contribute successfully:
//       </p>

//       {/* Step 1 */}
//       <h3 style={{ color: "white", marginBottom: "8px" }}>Step 1: Fork the Repository</h3>
//       <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "60%" }}>
//         <code>https://github.com/{repoOwner}/{repoName}/fork</code>
//       </div>

//       {/* Step 2 */}
//       <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 2: Clone Your Fork</h3>
//       <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "60%" }}>
//         <code>git clone https://github.com/YOUR_USERNAME/{repoName}.git</code>
//       </div>

//       {/* Step 3 */}
//       <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 3: Navigate to the Project Directory</h3>
//       <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "30%" }}>
//         <code>cd {repoName}</code>
//       </div>

//       {/* Step 4 */}
//       <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 4: Create a New Branch</h3>
//       <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "50%" }}>
//         <code>git checkout -b feature-branch</code>
//       </div>

//       {/* Step 5 */}
//       <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 5: Make Changes & Commit</h3>
//       <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "50%" }}>
//         <code>git add .</code><br />
//         <code>git commit -m "feat: added new feature"</code>
//       </div>

//       {/* Step 6 */}
//       <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 6: Push Changes to Your Fork</h3>
//       <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "50%" }}>
//         <code>git push origin feature-branch</code>
//       </div>

//       {/* Step 7 */}
//       <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 7: Create a Pull Request from the IDE</h3>
//       <p>Instead of manually creating a PR from GitHub, use this command:</p>
//       <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "70%" }}>
//         <code>gh pr create --base main --head feature-branch --title "feat: added new feature" --body "Description of the changes."</code>
//       </div>

//       {/* Auto-Merge Criteria */}
//       <h3 style={{ color: "white", marginTop: "40px", marginBottom: "10px" }}>🚀 Auto Merge Criteria</h3>
//       <ul style={{ color: "grey", fontSize: "14px", lineHeight: "1.6" }}>
//         <li>✅ PR must pass all automated tests (No failing builds, linting errors).</li>
//         <li>✅ PR should not have merge conflicts with the main branch.</li>
//         <li>✅ PR title must follow one of these formats:
//           <ul>
//             <li><code>fix: [issue description]</code> → Bug fixes</li>
//             <li><code>feat: [new feature]</code> → Adding new functionality</li>
//             <li><code>docs: [update]</code> → Documentation updates</li>
//             <li><code>chore: [miscellaneous updates]</code> → Small tasks (e.g., refactoring)</li>
//             <li><code>refactor: [code improvement]</code> → Code structure updates</li>
//           </ul>
//         </li>
//         <li>✅ PR must not modify **sensitive files** (`.env`, `config.json`, API keys, etc.).</li>
//         <li>✅ PR must have the label <span style={{ color: "lightgreen" }}>"auto-merge"</span>.</li>
//       </ul>

//       <p style={{ color: "grey", textAlign: "center", marginTop: "20px" }}>
//         If all conditions are met, the PR will be **automatically merged** and tokens will be rewarded 🚀
//       </p>

//       {/* Buttons with Proper Spacing */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
//         <button
//           onClick={handleCreatePR}
//           style={{
//             backgroundColor: "darkgrey",
//             color: "black",
//             padding: "10px",
//             border: "none",
//             borderRadius: "5px",
//             fontSize: "16px",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           Create Pull Request 🚀
//         </button>

//         <button
//           onClick={() => {
//             navigate("/contributor-dashboard");
//             setTimeout(() => {
//               window.scrollTo(0, 0);
//             }, 100);
//           }}
//           style={{
//             backgroundColor: "darkgrey",
//             color: "black",
//             padding: "10px",
//             border: "none",
//             borderRadius: "5px",
//             fontSize: "16px",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           Go to Contributors Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContributeInstructions;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ContributeInstructions = () => {
    const { repoName } = useParams();
    const navigate = useNavigate();
    const [repoOwner, setRepoOwner] = useState("mr-scientists");

    useEffect(() => {
        setRepoOwner("mr-scientists");
    }, []);

    const handleGoToDashboard = () => {
        navigate("/contributor-dashboard");
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };

    // ✅ Function to Create PR and Attempt Auto Merge
    const handleCreatePR = async () => {
        try {
            const response = await fetch("http://localhost:5100/api/github/create-pr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    repo: repoName, // ✅ Dynamic repo name
                    headBranch: "feature-branch",
                    baseBranch: "main",
                    title: "feat: Added new feature",
                    body: "Detailed description of the changes.",
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(`✅ PR Created Successfully: #${data.prNumber}`);
                console.log("PR Created:", data);
            } else {
                alert(`⚠️ PR Created but Failed to Auto-Merge: #${data.prNumber}`);
            }
        } catch (err) {
            console.error("❌ PR Creation Error:", err);
            alert("Error creating the PR.");
        }
    };

    const handleContributeAndGoToDashboard = async () => {
        // 1. Create the PR
        //await handleCreatePR(); 
        // 
        // 
        // // Await the PR creation

        // 2. Navigate to the dashboard after PR creation (regardless of success/failure)
        handleGoToDashboard();  // Just call handleGoToDashboard directly
    };

    return (
        <div style={{ marginTop: "150px", padding: "30px", color: "white", backgroundColor: "black", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
                Contribution Guide for <span style={{ color: "lightgrey" }}>{repoName}</span>
            </h2>
            <p style={{ color: "grey", textAlign: "center", marginBottom: "30px" }}>
                Follow these steps to contribute successfully:
            </p>

            {/* Step 1 */}
            <h3 style={{ color: "white", marginBottom: "8px" }}>Step 1: Fork the Repository</h3>
            <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "60%" }}>
                <code>https://github.com/{repoOwner}/{repoName}/fork</code>
            </div>

            {/* Step 2 */}
            <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 2: Clone Your Fork</h3>
            <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "60%" }}>
                <code>git clone https://github.com/YOUR_USERNAME/{repoName}.git</code>
            </div>

            {/* Step 3 */}
            <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 3: Navigate to the Project Directory</h3>
            <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "30%" }}>
                <code>cd {repoName}</code>
            </div>

            {/* Step 4 */}
            <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 4: Create a New Branch</h3>
            <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "50%" }}>
                <code>git checkout -b feature-branch</code>
            </div>

            {/* Step 5 */}
            <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 5: Make Changes & Commit</h3>
            <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "50%" }}>
                <code>git add .</code><br />
                <code>git commit -m "feat: added new feature"</code>
            </div>

            {/* Step 6 */}
            <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 6: Push Changes to Your Fork</h3>
            <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "50%" }}>
                <code>git push origin feature-branch</code>
            </div>

            {/* Step 7 */}
            <h3 style={{ color: "white", marginTop: "20px", marginBottom: "8px" }}>Step 7: Create a Pull Request from the IDE</h3>
            <p>Instead of manually creating a PR from GitHub, use this command:</p>
            <div style={{ backgroundColor: "#222", padding: "10px", borderRadius: "5px", fontFamily: "monospace", fontSize: "14px", width: "70%" }}>
                <code>gh pr create --base main --head feature-branch --title "feat: added new feature" --body "Description of the changes."</code>
            </div>

            {/* Auto-Merge Criteria */}
            <h3 style={{ color: "white", marginTop: "40px", marginBottom: "10px" }}>🚀 Auto Merge Criteria</h3>
            <ul style={{ color: "grey", fontSize: "14px", lineHeight: "1.6" }}>
                <li>✅ PR must pass all automated tests (No failing builds, linting errors).</li>
                <li>✅ PR should not have merge conflicts with the main branch.</li>
                <li>✅ PR title must follow one of these formats:
                    <ul>
                        <li><code>fix: [issue description]</code> → Bug fixes</li>
                        <li><code>feat: [new feature]</code> → Adding new functionality</li>
                        <li><code>docs: [update]</code> → Documentation updates</li>
                        <li><code>chore: [miscellaneous updates]</code> → Small tasks (e.g., refactoring)</li>
                        <li><code>refactor: [code improvement]</code> → Code structure updates</li>
                    </ul>
                </li>
                <li>✅ PR must not modify **sensitive files** (`.env`, `config.json`, API keys, etc.).</li>
                <li>✅ PR must have the label <span style={{ color: "lightgreen" }}>"auto-merge"</span>.</li>
            </ul>

            <p style={{ color: "grey", textAlign: "center", marginTop: "20px" }}>
                If all conditions are met, the PR will be **automatically merged** and tokens will be rewarded 🚀
            </p>

            {/* Buttons with Proper Spacing */}
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>

                <button
                    onClick={handleContributeAndGoToDashboard}
                    style={{
                        backgroundColor: "darkgrey",
                        color: "black",
                        padding: "10px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Contribute & Go to Dashboard 🚀
                </button>

            </div>
        </div>
    );
};

export default ContributeInstructions;