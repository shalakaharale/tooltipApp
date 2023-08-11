import { useState } from "react";
import { TooltipButton } from "./component/TooltipButton";

function App() {
  const [selectedPosition, setSelectedPosition] = useState("top");

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  return (
    <div className="App">
      <div className="position-selector">
        <label htmlFor="position">Select Tooltip Position: </label>
        <select
          id="position"
          value={selectedPosition}
          onChange={handlePositionChange}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <TooltipButton position={selectedPosition} text="Tooltip Text" />
    </div>
  );
}

export default App;
