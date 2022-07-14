import React from "react";

export default function Progressbar({ done }) {
  return (
    <div className="rounded-lg" style={{
        width: "32%",
        height: "7px",
        backgroundColor: "#FFFFFF",
        marginBottom: '10px',
        zIndex: 99999,
    }}>
      <div
        className="rounded-lg"
        style={{ width: `${done}%`,
        height: '7px',
        backgroundColor: "#00A878"}}
      ></div>
    </div>
  );
}

const styles = {
  progressbar: {
    bottom: "10px",
    width: "100%",
    height: "5px",
    backgroundColor: "blue"
  },
  progressbarDone: {
    width: '100px',
    height: '5px',
    backgroundColor: "red"
  }
};
