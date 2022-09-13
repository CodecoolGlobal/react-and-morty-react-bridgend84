import React from "react"
import "./Locations.css"

export default function Locations({ locations }) {
  return (
    <div className="Locations">
      {locations.map((loc) => (
        <p key={loc.name}>{loc.name}</p>
      ))}
    </div>
  );
}