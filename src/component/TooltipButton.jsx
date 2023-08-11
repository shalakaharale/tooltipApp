import React, { useState } from "react";
import "./App.css";

export function TooltipButton({ position, text }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const tooltipStyle = {
    display: tooltipVisible ? "block" : "none",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "12px",
    zIndex: 1000,
  };

  switch (position) {
    case "top":
      tooltipStyle.bottom = "100%";
      tooltipStyle.left = "50%";
      tooltipStyle.transform = "translateX(-50%)";
      break;
    case "bottom":
      tooltipStyle.top = "100%";
      tooltipStyle.left = "50%";
      tooltipStyle.transform = "translateX(-50%)";
      break;
    case "left":
      tooltipStyle.top = "50%";
      tooltipStyle.right = "100%";
      tooltipStyle.transform = "translateY(-50%)";
      break;
    case "right":
      tooltipStyle.top = "50%";
      tooltipStyle.left = "100%";
      tooltipStyle.transform = "translateY(-50%)";
      break;
    default:
      break;
  }

  return (
    <div
      className="tooltip-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button>Show Tooltip</button>
      <div className="tooltip" style={tooltipStyle}>
        {text}
      </div>
    </div>
  );
}
