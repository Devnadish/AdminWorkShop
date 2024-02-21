"use client"
import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function Pociman() {
  

  return (
    <div className="opacity-5 animate-pulse">
    <PacmanLoader
    color="rgba(54, 215, 183, 1)"
    size={70}
    speedMultiplier={0.8}
  />
  </div>
  );
}

export default Pociman;