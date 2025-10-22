import { useState } from "react";
import "./App.css";
import SidePanel from "./SidePanel";

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>SidePanel Component Demo</h1>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setIsPanelOpen(true)}
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Open Side Panel
        </button>
      </div>

      <SidePanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title={<div>My Side Panel</div>}
      >
        <div>
          <h3>Panel Content</h3>
        </div>
      </SidePanel>
    </div>
  );
}

export default App;
