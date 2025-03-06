import React, { useState, useEffect } from "react";
import axios from "axios";

const ContributorDashboard = () => {
  const [contributions, setContributions] = useState([]);
  const [totalTokens, setTotalTokens] = useState(0);

  // ✅ Fetch tokens from LocalStorage & API on component mount
  useEffect(() => {
    let storedTokens = parseFloat(localStorage.getItem("tokensEarned")) || 0;
    setTotalTokens(storedTokens);
    
    fetchContributions();
  }, []);

  const fetchContributions = async () => {
    try {
      const response = await axios.get("http://localhost:5100/api/contributions");
      setContributions(response.data.contributions);
      
      // ✅ Update tokens from API if available
      if (response.data.totalTokens > 0) {
        setTotalTokens(response.data.totalTokens);
        localStorage.setItem("tokensEarned", response.data.totalTokens.toFixed(3));
      }
    } catch (error) {
      console.error("Error fetching contributions:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">🎖️ My Contributions</h1>

        <div className="p-4 bg-blue-200 rounded-md mb-4">
          <h2 className="text-xl font-semibold">
            Total Tokens Earned: ${totalTokens.toFixed(3)} 🪙  {/* ✅ Now dynamically updates */}
          </h2>
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