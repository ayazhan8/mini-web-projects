import React from "react";

function Child(props) {
  return (
    <div className="child" style={{ backgroundColor: "red" }}>
      <h1>Child</h1>
      <button onClick={() => props.changeWord("aya")}>
        Click to change title
      </button>
    </div>
  );
}

export default Child;
