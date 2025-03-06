// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Chart from "chart.js/auto";

// const ContributorsDashboard = () => {
//   const navigate = useNavigate();
//   const [contributions, setContributions] = useState([]);
//   const [tokensEarned, setTokensEarned] = useState(0);
//   const [contributionStats, setContributionStats] = useState({
//     prsMerged: 0,
//     prsPending: 0,
//     codeCommits: 0,
//     documentationUpdates: 0,
//   });

//   // 🔥 Ensures page always loads at the top
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     fetch("/api/contributions") // Fetch from backend
//       .then((res) => res.json())
//       .then((data) => {
//         setContributions(data.projects);
//         setTokensEarned(data.tokens);
//         setContributionStats(data.stats);
//         drawChart(data.stats);
//       })
//       .catch((err) => console.error("Error fetching contributions:", err));
//   }, []);

//   const drawChart = (stats) => {
//     const ctx = document.getElementById("contributionChart");
//     new Chart(ctx, {
//       type: "pie",
//       data: {
//         labels: ["PRs Merged", "PRs Pending", "Code Commits", "Docs Updates"],
//         datasets: [
//           {
//             data: [
//               stats.prsMerged,
//               stats.prsPending,
//               stats.codeCommits,
//               stats.documentationUpdates,
//             ],
//             backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#E91E63"],
//           },
//         ],
//       },
//     });
//   };

//   return (
//     <div style={{ 
//         marginTop: "120px",  // 🔥 Fix for hidden content (adjust as needed)
//         padding: "30px", 
//         color: "white", 
//         backgroundColor: "black", 
//         minHeight: "100vh"
//       }}>
      
//         {/* Dashboard Title */}
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//           Contributor Dashboard
//         </h2>
//         <p style={{ color: "grey", textAlign: "center", marginBottom: "40px" }}>
//           View your contributions, track your progress, and analyze your stats.
//         </p>
  
//         {/* Contribution Stats Box */}
//         <div style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "20px",
//           flexWrap: "wrap",
//         }}>
//           {/* Contribution Count */}
//           <div style={{
//             backgroundColor: "darkgrey",
//             padding: "20px",
//             borderRadius: "8px",
//             textAlign: "center",
//             minWidth: "200px"
//           }}>
//             <h3>Total Contributions</h3>
//             <p style={{ fontSize: "24px", fontWeight: "bold" }}>15</p>
//           </div>
  
//           {/* Merged PRs */}
//           <div style={{
//             backgroundColor: "darkgrey",
//             padding: "20px",
//             borderRadius: "8px",
//             textAlign: "center",
//             minWidth: "200px"
//           }}>
//             <h3>Merged PRs</h3>
//             <p style={{ fontSize: "24px", fontWeight: "bold" }}>10</p>
//           </div>
  
//           {/* Tokens Earned */}
//           <div style={{
//             backgroundColor: "darkgrey",
//             padding: "20px",
//             borderRadius: "8px",
//             textAlign: "center",
//             minWidth: "200px"
//           }}>
//             <h3>Tokens Earned</h3>
//             <p style={{ fontSize: "24px", fontWeight: "bold", color: "lightgreen" }}>120</p>
//           </div>
//         </div>
  
//         {/* Contribution Chart (Placeholder for Pie Chart) */}
//         <div style={{
//           marginTop: "50px",
//           backgroundColor: "darkgrey",
//           padding: "30px",
//           borderRadius: "8px",
//           textAlign: "center",
//         }}>
//           <h3>Contribution Analysis</h3>
//           <p style={{ color: "black", fontSize: "14px" }}>Your contributions by category</p>
//           <canvas id="contributionChart" width="300" height="300"></canvas>
//         </div>
  
//         {/* Back to Home Button */}
//         <button 
//           onClick={() => {
//             navigate("/");
//             window.scrollTo(0, 0);
//           }}
//           style={{
//             backgroundColor: "darkgrey",
//             color: "black",
//             padding: "10px",
//             border: "none",
//             borderRadius: "5px",
//             marginTop: "30px",
//             display: "block",
//             marginLeft: "auto",
//             marginRight: "auto",
//             fontSize: "16px",
//             fontWeight: "bold",
//             cursor: "pointer"
//           }}>
//           Back to Home
//         </button>
//     </div>
//   );
// };

// export default ContributorsDashboard;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

const ContributorsDashboard = () => {
  const navigate = useNavigate();
  const [contributions, setContributions] = useState([]);
  const [tokensEarned, setTokensEarned] = useState(0);
  const [contributionStats, setContributionStats] = useState({
    prsMerged: 0,
    prsPending: 0,
    codeCommits: 0,
    documentationUpdates: 0,
  });

  // 🔥 Ensures page always loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/api/contributions") // Fetch from backend
      .then((res) => res.json())
      .then((data) => {
        setContributions(data.projects);
        setTokensEarned(data.tokens);
        setContributionStats(data.stats);
        drawChart(data.stats);
      })
      .catch((err) => console.error("Error fetching contributions:", err));
  }, []);

  const drawChart = (stats) => {
    const ctx = document.getElementById("contributionChart");

    // Check if ctx is available before proceeding
    if (!ctx) {
      console.error("Canvas element with id 'contributionChart' not found.");
      return; // Exit function if canvas is not available
    }

    // Safely extract stats, providing default values if necessary
    const prsMerged = stats?.prsMerged || 0;
    const prsPending = stats?.prsPending || 0;
    const codeCommits = stats?.codeCommits || 0;
    const documentationUpdates = stats?.documentationUpdates || 0;

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["PRs Merged", "PRs Pending", "Code Commits", "Docs Updates"],
        datasets: [
          {
            data: [
              prsMerged,
              prsPending,
              codeCommits,
              documentationUpdates,
            ],
            backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#E91E63"],
          },
        ],
      },
    });
  };

  return (
    <div style={{
        marginTop: "120px",  // 🔥 Fix for hidden content (adjust as needed)
        padding: "30px",
        color: "white",
        backgroundColor: "black",
        minHeight: "100vh"
      }}>

        {/* Dashboard Title */}
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Contributor Dashboard
        </h2>
        <p style={{ color: "grey", textAlign: "center", marginBottom: "40px" }}>
          View your contributions, track your progress, and analyze your stats.
        </p>

        {/* Contribution Stats Box */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}>
          {/* Contribution Count */}
          <div style={{
            backgroundColor: "darkgrey",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            minWidth: "200px"
          }}>
            <h3>Total Contributions</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>15</p>
          </div>

          {/* Merged PRs */}
          <div style={{
            backgroundColor: "darkgrey",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            minWidth: "200px"
          }}>
            <h3>Merged PRs</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>10</p>
          </div>

          {/* Tokens Earned */}
          <div style={{
            backgroundColor: "darkgrey",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            minWidth: "200px"
          }}>
            <h3>Tokens Earned</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "lightgreen" }}>120</p>
          </div>
        </div>

        {/* Contribution Chart (Placeholder for Pie Chart) */}
        <div style={{
          marginTop: "50px",
          backgroundColor: "darkgrey",
          padding: "30px",
          borderRadius: "8px",
          textAlign: "center",
        }}>
          <h3>Contribution Analysis</h3>
          <p style={{ color: "black", fontSize: "14px" }}>Your contributions by category</p>
          <canvas id="contributionChart" width="300" height="300"></canvas>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          style={{
            backgroundColor: "darkgrey",
            color: "black",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            marginTop: "30px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
          Back to Home
        </button>
    </div>
  );
};

export default ContributorsDashboard;