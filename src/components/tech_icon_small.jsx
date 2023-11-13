import React from "react";

function techiconsm({ image, name }) {
  return (
    <img
      src={image}
      className="h-10 m-2 border border-cyan-400 p-2 rounded-lg bg-opacity-50 backdrop-filter pointer-cursor backdrop-blur-lg icon_glow cursor-pointer"
      alt={name}
    />
  );
}

export default techiconsm;
