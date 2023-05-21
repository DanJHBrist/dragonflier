import React from "react";

// Import images
import dragonfly from "../Images/dragonfly.jpg";
import pc from "../Images/pc.jpg";

// Import custom stylesheet
import "../App.css";

// Function to display rightpanel with decorative images
function RightPanel(props) {
  return (
    <div className="rightPanel">
      <img src={dragonfly} alt="Dragonfly at rest" className="dragImg" />
      <img src={pc} alt="Hands at computer" className="pcImg" />
    </div>
  );
}

// Export component to be used in other files
export default RightPanel;
