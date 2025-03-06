// // import React from "react";
// // import "../assets/css/theme.min.css"; // Ensure correct import

// // const GithubLink = () => {
// //   const handleGithubAuth = () => {
// //     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");

// //     const githubAuthUrl = "http://localhost:5100/api/github/login";

// //     // ✅ Force Full-Page Redirect (No iframe issues)
// //     window.open(githubAuthUrl, "_self");
// // };
// //   return (
// //     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
// //       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
// //         <h1>Link Your GitHub Account</h1>
// //         <p>To continue, please authorize GitHub access.</p>
// //         <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
// //           Link GitHub
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GithubLink;


// import React, { useEffect } from "react";
// import "../assets/css/theme.min.css"; // Ensure correct import
// import { useNavigate } from 'react-router-dom';  // Import useNavigate

// const GithubLink = () => {
//   const navigate = useNavigate();  // Initialize useNavigate

//   const handleGithubAuth = () => {
//     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");

//     const githubAuthUrl = "http://localhost:5100/api/github/login";

//     // ✅ Open the Auth URL directly (No iframe issues)
//     window.location.href = githubAuthUrl;
//   };

//   useEffect(() => {
//     // Check for token in URL on component mount
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');

//     if (token) {
//       // Store the token (e.g., in local storage, cookie)
//       localStorage.setItem('authToken', token);  // Example: Local Storage

//       // Redirect to dashboard
//       navigate('/dashboard');  // Use navigate to redirect
//     }
//   }, [navigate]); // Add navigate as dependency for useEffect

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>Link Your GitHub Account</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//           Link GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GithubLink;







// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//   const [isLinked, setIsLinked] = useState(false);
//   const [githubUsername, setGithubUsername] = useState("");
//   const navigate = useNavigate();

//   // ✅ Force the app to break out of iframe
//   useEffect(() => {
//     if (window.top !== window.self) {
//       console.warn("⚠️ App is running inside an iframe! Fixing...");
//       window.top.location = window.self.location; // 🔥 Forces app to load outside iframe
//     }

//     const token = new URLSearchParams(window.location.search).get("token");
//     if (token) {
//       localStorage.setItem("authToken", token);
//       navigate("/dashboard");
//     }
//   }, [navigate]);

//   const handleGithubAuth = () => {
//     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");

//     const githubAuthUrl = "http://localhost:5100/api/github/login";

//     // ✅ Force Full-Page Redirect
//     window.open(githubAuthUrl, "_self");
//   };

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>{isLinked ? `GitHub Linked: @${githubUsername}` : "Link Your GitHub Account"}</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         {!isLinked && (
//           <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//             Link GitHub
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GithubLink;






// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         // ✅ Prevent iframe issues
//         if (window.top !== window.self) {
//             console.warn("⚠️ App is running inside an iframe! Fixing...");
//             window.top.location = window.self.location;
//         }

//         // ✅ Extract token from URL after OAuth
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get("token");

//         if (token) {
//             console.log("✅ Token received:", token);  // Debugging output
//             localStorage.setItem("authToken", token);  // ✅ Store token in localStorage
//             navigate("/dashboard", { replace: true }); // ✅ Redirect to dashboard
//         } else {
//             console.log("❌ No token found in URL");
//         }
//     }, [navigate]);

//     const handleGithubAuth = () => {
//         console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
//         window.location.href = "http://localhost:5100/api/github/login"; // ✅ Full-page redirect to GitHub login
//     };

//     return (
//         <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//             <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//                 <h1>Link Your GitHub Account</h1>
//                 <p>To continue, please authorize GitHub access.</p>
//                 <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//                     Link GitHub
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default GithubLink;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         // ✅ Prevent iframe issues
//         if (window.top !== window.self) {
//             console.warn("⚠️ App is running inside an iframe! Fixing...");
//             window.top.location = window.self.location;
//         }

//         // ✅ Extract token from URL after OAuth
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get("token");

//         if (token) {
//             console.log("✅ Token received:", token);  // Debugging output
//             localStorage.setItem("authToken", token);  // ✅ Store token in localStorage
//             setTimeout(() => {
//                 navigate("/dashboard", { replace: true }); // ✅ Redirect to dashboard after small delay
//             }, 500);
//         } else {
//             console.log("❌ No token found in URL");
//         }
//     }, [navigate]);

//     const handleGithubAuth = () => {
//         console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
//         window.location.href = "http://localhost:5100/api/github/login"; // ✅ Full-page redirect to GitHub login
//     };

//     return (
//         <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//             <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//                 <h1>Link Your GitHub Account</h1>
//                 <p>To continue, please authorize GitHub access.</p>
//                 <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//                     Link GitHub
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default GithubLink;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         // ✅ Extract token from URL after OAuth
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get("token");

//         if (token) {
//             console.log("✅ Token received:", token);  // Debugging output
//             localStorage.setItem("authToken", token);  // ✅ Store token in localStorage
//             setTimeout(() => {
//                 window.location.href = "/dashboard"; // ✅ Full page reload to force dashboard load
//             }, 500);
//         } else {
//             console.log("❌ No token found in URL");
//         }
//     }, []);

//     const handleGithubAuth = () => {
//         console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
//         window.location.href = "http://localhost:5100/api/github/login"; // ✅ Full-page redirect to GitHub login
//     };

//     return (
//         <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//             <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//                 <h1>Link Your GitHub Account</h1>
//                 <p>To continue, please authorize GitHub access.</p>
//                 <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//                     Link GitHub
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default GithubLink;



// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = new URLSearchParams(window.location.search).get("token");

//     if (token) {
//       localStorage.setItem("authToken", token); // ✅ Store token
//       navigate("/dashboard"); // ✅ Redirect to Dashboard
//     }
//   }, [navigate]);

//   const handleGithubAuth = () => {
//     window.location.href = "http://localhost:5100/api/github/login"; // ✅ Simple full-page redirect
//   };

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>Link Your GitHub Account</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//           Link GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GithubLink;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = new URLSearchParams(window.location.search).get("token");

//     if (token) {
//       localStorage.setItem("authToken", token); // ✅ Store token
//       navigate("/dashboard"); // ✅ Redirect to Dashboard
//     }
//   }, [navigate]);

//   const handleGithubAuth = () => {
//     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
    
//     window.location.href = "http://localhost:5100/api/github/login"; // ✅ Full-page redirect
//   };

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>Link Your GitHub Account</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//           Link GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GithubLink;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = new URLSearchParams(window.location.search).get("token");
    
//     if (token) {
//       localStorage.setItem("authToken", token);  // ✅ Store token
//       navigate("/dashboard"); // ✅ Redirect to Dashboard
//     }
//   }, [navigate]);

//   const handleGithubAuth = () => {
//     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
    
//     window.location.href = "http://localhost:5100/api/github/login"; // ✅ Full-page redirect
//   };

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>Link Your GitHub Account</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//           Link GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GithubLink;






// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//   const navigate = useNavigate();
//   const [isLinked, setIsLinked] = useState(false);

//   useEffect(() => {
//     if (window.top !== window.self) {
//       console.warn("⚠️ App is running inside an iframe! Fixing...");
//       window.top.location = window.self.location; // 🔥 Forces app to load outside iframe
//     }

//     const token = new URLSearchParams(window.location.search).get("token");
//     console.log("🔍 Extracted Token from URL:", token); // ✅ Debugging

//     if (token) {
//       localStorage.setItem("authToken", token);
//       console.log("✅ Token saved in localStorage:", localStorage.getItem("authToken"));
//       navigate("/dashboard"); // ✅ Redirect to dashboard
//     } else {
//       console.warn("❌ No token found in URL, staying on GithubLink page.");
//     }
//   }, [navigate]);

//   const handleGithubAuth = () => {
//     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
//     const githubAuthUrl = "http://localhost:5100/api/github/login";
//     window.open(githubAuthUrl, "_self");
//   };

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>{isLinked ? "GitHub Linked Successfully!" : "Link Your GitHub Account"}</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         {!isLinked && (
//           <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//             Link GitHub
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GithubLink;





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (window.top !== window.self) {
//       console.warn("⚠️ App is running inside an iframe! Fixing...");
//       window.top.location = window.self.location;
//     }

//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get("token");
//     console.log("🔍 Extracted Token from URL:", token);

//     if (token) {
//       localStorage.setItem("authToken", token);
//       console.log("✅ Token saved in localStorage:", localStorage.getItem("authToken"));

//       // ✅ Ensure storage before redirect
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 1000);
//     } else {
//       console.warn("❌ No token found in URL! Staying on GithubLink page.");
//     }
//   }, [navigate]);

//   const handleGithubAuth = () => {
//     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
//     const githubAuthUrl = "http://localhost:5100/api/github/login";
//     window.open(githubAuthUrl, "_self");
//   };

//   const handleGitHubLogin = async () => {
//     try {
//         const response = await fetch("http://localhost:5000/api/github/auth", {
//             method: "GET",
//             credentials: "include",
//         });

//         const data = await response.json();

//         if (response.ok) {
//             localStorage.setItem("authToken", data.token);  // Store auth token
//             localStorage.setItem("githubUsername", data.username);  // Store username ✅
//             console.log("✅ GitHub username stored:", data.username);
//             navigate("/dashboard");
//         } else {
//             console.error("❌ GitHub authentication failed:", data.message);
//         }
//     } catch (error) {
//         console.error("❌ Error during GitHub login:", error);
//     }
// };

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>Link Your GitHub Account</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//           Link GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GithubLink;







// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (window.top !== window.self) {
//         console.warn("⚠️ App is running inside an iframe! Fixing...");
//         window.top.location = window.self.location;
//     }

//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get("token");

//     if (token) {
//         localStorage.setItem("authToken", token);
//         console.log("✅ Token saved in localStorage:", token);

//         // Fetch username using the token
//         fetch("http://localhost:5000/api/github/auth", {
//             method: "GET",
//             headers: { Authorization: `Bearer ${token}` },
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.username) {
//                 localStorage.setItem("githubUsername", data.username);
//                 console.log("✅ GitHub Username saved:", data.username);
//             } else {
//                 console.warn("❌ Failed to fetch GitHub username!");
//             }
//         })
//         .catch(error => console.error("❌ Error fetching username:", error))
//         .finally(() => {
//             navigate("/dashboard");
//         });
//     } else {
//         console.warn("❌ No token found in URL! Staying on GithubLink page.");
//     }
// }, [navigate]);

//   const handleGithubAuth = () => {
//     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
//     const githubAuthUrl = "http://localhost:5100/api/github/login";
//     window.open(githubAuthUrl, "_self");
//   };

//   const handleGitHubLogin = async () => {
//     try {
//         const response = await fetch("http://localhost:5000/api/github/auth", {
//             method: "GET",
//             credentials: "include",
//         });

//         const data = await response.json();
//         console.log("🔍 GitHub API Response:", data); // Debugging

//         if (response.ok) {
//             localStorage.setItem("authToken", data.token); // ✅ Store token
//             localStorage.setItem("githubUsername", data.username); // ✅ Store username
//             console.log("✅ GitHub username stored:", data.username);
//             navigate("/dashboard");
//         } else {
//             console.error("❌ GitHub authentication failed:", data.message);
//         }
//     } catch (error) {
//         console.error("❌ Error during GitHub login:", error);
//     }
// };

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>Link Your GitHub Account</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//           Link GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GithubLink;








// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const GithubLink = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get("token");

//     if (token) {
//         localStorage.setItem("authToken", token);
//         console.log("✅ Token saved in localStorage:", token);

//         fetch("http://localhost:5100/api/github/auth", {
//             method: "GET",
//             credentials: "include",
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.username) {
//                 localStorage.setItem("githubUsername", data.username);
//                 console.log("✅ GitHub Username saved:", data.username);
//             } else {
//                 console.warn("❌ Failed to fetch GitHub username!");
//             }
//         })
//         .catch(error => console.error("❌ Error fetching username:", error))
//         .finally(() => {
//             navigate("/dashboard");
//         });
//     } else {
//         console.warn("❌ No token found in URL! Staying on GithubLink page.");
//     }
// }, [navigate]);

//   const handleGithubAuth = () => {
//     console.log("✅ GitHub OAuth Button Clicked! Redirecting...");
//     const githubAuthUrl = "http://localhost:5100/api/github/login";
//     window.open(githubAuthUrl, "_self");
//   };

//   const handleGitHubLogin = async () => {
//     try {
//         const response = await fetch("http://localhost:5100/api/github/auth", {
//             method: "GET",
//             credentials: "include",
//         });

//         const data = await response.json();
//         console.log("🔍 GitHub API Response:", data); // Debugging

//         if (response.ok) {
//             localStorage.setItem("authToken", data.token); // ✅ Store token
//             localStorage.setItem("githubUsername", data.username); // ✅ Store username
//             console.log("✅ GitHub username stored:", data.username);
//             navigate("/dashboard");
//         } else {
//             console.error("❌ GitHub authentication failed:", data.message);
//         }
//     } catch (error) {
//         console.error("❌ Error during GitHub login:", error);
//     }
// };

//   return (
//     <div className="d-flex h-100 w-100 bg-black text-white" style={{ paddingTop: "350px" }}>
//       <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
//         <h1>Link Your GitHub Account</h1>
//         <p>To continue, please authorize GitHub access.</p>
//         <button className="btn btn-white btn-lg" onClick={handleGithubAuth}>
//           Link GitHub
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GithubLink;







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