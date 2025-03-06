// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
// import Signup from "./components/Signup";
// import GithubLink from "./components/GithubLink";
// import Dashboard from "./pages/Dashboard";

// const App = () => {
//     const authToken = localStorage.getItem("authToken");

//     return (
//         <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/github-link" element={<GithubLink />} />
//             <Route
//                 path="/dashboard"
//                 element={authToken ? <Dashboard /> : <Navigate to="/github-link" />}
//             />
//         </Routes>
//     );
// };

// export default App;


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import GithubLink from "./components/GithubLink";
import Dashboard from "./pages/Dashboard";
import ContributeInstructions from "./pages/ContributeInstructions";
import ContributorDashboard from "./pages/ContributorDashboard";
import ContributorsDashboard from "./pages/ContributorsDashboard";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/github-link" element={<GithubLink />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contribute-instructions" element={<ContributeInstructions />} />
            <Route path="/contribute/:repoName" element={<ContributeInstructions />} />
            <Route path="/contributor-dashboard" element={<ContributorDashboard />} />
        </Routes>
    );
};

export default App;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
// import Signup from "./components/Signup";
// import GithubLink from "./components/GithubLink";
// import Dashboard from "./pages/Dashboard"; // ✅ Import the Dashboard

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/github-link" element={<GithubLink />} />
//       <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Add this */}
//     </Routes>
//   );
// };

// export default App;