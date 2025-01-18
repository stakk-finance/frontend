"use client";

import Starfield from "@/components/common/StarField";
import { useState } from "react";

const App: React.FC = () => {
  const [hyperSpace, setHyperSpace] = useState(false);

  return (
    <div>
      <Starfield minHeight={400} starCount={2000} hyperSpace={hyperSpace} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "20px",
        }}
      >
        <h1>Space Travel Simulator</h1>
        <button onClick={() => setHyperSpace(!hyperSpace)}>
          {hyperSpace ? "Exit Hyperspace" : "Enter Hyperspace"}
        </button>
      </div>
    </div>
  );
};

export default App;
