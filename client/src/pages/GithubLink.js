import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GithubLink = () => {
  const [isLinked, setIsLinked] = useState(false);
  const [githubUsername, setGithubUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user already linked GitHub
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("authToken", token); // Store token in local storage
      navigate("/dashboard"); // Redirect to Dashboard
    }
  }, [navigate]);

  const handleGithubAuth = () => {
    console.log("✅ GitHub OAuth Button Clicked!"); // Debug log

    const githubAuthUrl = "http://localhost:5100/api/github/login";

    // 🔹 Full-page redirect (No iframe issues)
    window.location.href = githubAuthUrl;
};

  return (
    <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
      <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <h1>{isLinked ? `GitHub Linked: @${githubUsername}` : "Link Your GitHub Account"}</h1>
        <p>To continue, please authorize GitHub access.</p>
        {!isLinked && (
          <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
            Link GitHub
          </button>
        )}
      </div>
    </div>
  );
};

export default GithubLink;