import React from "react";
import "./Header.css";
import "./Mobile.css";

export default function Header({ onSelect }) {
  return (
    <div className="Header">
      <div className="container-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" />
      </div>
      <div className="header-buttons">
        <button
          className="header-characters-button"
          onClick={() => onSelect(1)}
        >
          Characters
        </button>
        <button className="header-locations-button" onClick={() => onSelect(2)}>
          Locations
        </button>
      </div>
    </div>
  );
}
