import React from "react";
import "./Header.css";
import rNmLogo from "../static/rick-and-morty-logo.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="container-header">
        <img src={rNmLogo} />
      </div>
      <div className="header-buttons">
        <button className="header-characters-button">Characters</button>
        <button className="header-locations-button">Locations</button>
      </div>
    </div>
  );
}
