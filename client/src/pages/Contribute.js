import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Contribute = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [repoName, setRepoName] = useState("");
    const [username, setUsername] = useState("");
    const [prStatus, setPrStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const repo = queryParams.get("repo");
        const user = localStorage.getItem("githubUsername");
        setRepoName(repo);
        setUsername(user);

        if (!repo) {
            alert("⚠️ No repository selected!");
            navigate("/dashboard");
        }
    }, [location, navigate]);

    const handleCheckPRStatus = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5100/api/github/check-pr-status/${repoName}/${username}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });

            const data = await response.json();
            if (response.ok) {
                setPrStatus(data);
            } else {
                setPrStatus({ error: data.message });
            }
        } catch (error) {
            console.error("❌ Error checking PR status:", error);
            setPrStatus({ error: "Failed to fetch PR status" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5 pt-5 bg-black text-white">
            <div className="text-center">
                <h1 className="mt-4">Contribute to <span className="text-warning">{repoName}</span></h1>
                <p className="text-muted">Follow these steps to contribute:</p>
            </div>

            <div className="container mt-4">
                <h3>🔹 Steps to Contribute:</h3>
                <ol className="mt-3">
                    <li>**Fork the Repository:** Click <a href={`https://github.com/mr-scientists/${repoName}/fork`} target="_blank" rel="noopener noreferrer" className="text-warning">here</a> to fork the repository.</li>
                    <li>**Clone the Repository:** Run this command in your terminal:
                        <pre className="bg-dark text-light p-2">git clone https://github.com/your-username/{repoName}.git</pre>
                    </li>
                    <li>**Make Your Changes:** Modify the code and add your contribution.</li>
                    <li>**Commit and Push:**
                        <pre className="bg-dark text-light p-2">
                            git add .{"\n"}
                            git commit -m "Your contribution message"{"\n"}
                            git push origin main
                        </pre>
                    </li>
                    <li>**Create a Pull Request (PR):** Go to the repository on GitHub and create a Pull Request.</li>
                    <li>**Wait for Auto-Merge (or Get Feedback):** Your PR will be automatically merged if it follows the contribution criteria.</li>
                </ol>
            </div>

            <div className="container mt-4 text-center">
                <button
                    className="btn btn-warning"
                    onClick={handleCheckPRStatus}
                    disabled={loading}
                >
                    {loading ? "Checking PR Status..." : "Check PR Status"}
                </button>

                {prStatus && (
                    <div className="mt-3">
                        {prStatus.error ? (
                            <p className="text-danger">❌ {prStatus.error}</p>
                        ) : (
                            <p className="text-success">✅ PR Merged Successfully! Tokens Earned: {prStatus.tokens}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contribute;