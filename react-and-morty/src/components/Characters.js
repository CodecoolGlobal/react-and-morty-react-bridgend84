import React from "react";
import "./Characters.css";

export default function Characters({ characters }) {
  return (
    <div className="Characters">
      {characters.map((char) => (
        <p key={char.name}>{char.name}</p>
      ))}
    </div>
  );
}
