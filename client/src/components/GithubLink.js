import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GithubLink = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        if (token) {
            localStorage.setItem("authToken", token);
            console.log("✅ Token saved in localStorage:", token);

            setIsLoading(true); // Show loader while fetching user data

            fetch("http://localhost:5100/api/github/auth", {
                method: "GET",
                credentials: "include",
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.username) {
                        localStorage.setItem("githubUsername", data.username);
                        console.log("✅ GitHub Username saved:", data.username);
                        navigate("/dashboard");
                    } else {
                        console.warn("❌ Failed to fetch GitHub username!");
                    }
                })
                .catch((error) => console.error("❌ Error fetching username:", error))
                .finally(() => setIsLoading(false)); // Hide loader
        } else {
            console.warn("❌ No token found in URL! Staying on GithubLink page.");
        }
    }, [navigate]);

    const handleGithubAuth = () => {
        console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
        window.location.href = "http://localhost:5100/api/github/login";
    };

    const handleGitHubLogin = async () => {
        try {
            setIsLoading(true); // Show loading indicator
            const response = await fetch("http://localhost:5100/api/github/auth", {
                method: "GET",
                credentials: "include",
            });

            const data = await response.json();
            console.log("🔍 GitHub API Response:", data);

            if (response.ok) {
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("githubUsername", data.username);
                console.log("✅ GitHub username stored:", data.username);
                navigate("/dashboard");
            } else {
                console.error("❌ GitHub authentication failed:", data.message);
            }
        } catch (error) {
            console.error("❌ Error during GitHub login:", error);
        } finally {
            setIsLoading(false); // Hide loading indicator
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-black text-white">
            <div className="container text-center">
                <h1 className="mb-3">Link Your GitHub Account</h1>
                <p className="mb-4">To continue, please authorize GitHub access.</p>
                
                {isLoading ? (
                    <button className="btn btn-white btn-lg" disabled>
                        Loading...
                    </button>
                ) : (
                    <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
                        Link GitHub
                    </button>
                )}
            </div>
        </div>
    );
};

export default GithubLink;
