import React, { useState, useEffect } from "react";
import "./Header.css";
import "./Mobile.css";

export default function Header({ whichClicked }) {
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    whichClicked(clicked);
  }, [clicked]);

  return (
    <div className="Header">
      <div className="container-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" />
      </div>
      <div className="header-buttons">
        <button
          className="header-characters-button"
          onClick={() => setClicked(1)}
        >
          Characters
        </button>
        <button
          className="header-locations-button"
          onClick={() => setClicked(2)}
        >
          Locations
        </button>
      </div>
    </div>
  );
}
