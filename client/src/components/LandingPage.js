import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();

  // Hide Landing Page if user navigates away
  useEffect(() => {
    const landingPage = document.getElementById("landing-page-container");
    if (landingPage) {
      landingPage.style.display = location.pathname === "/" ? "block" : "none";
    }
  }, [location]);

  return (
    <div id="landing-page-container">
      {/* <iframe
        src="/index.html"
        title="Landing Page"
        style={{
          border: "none",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      /> */}
    </div>
  );
};

export default LandingPage;