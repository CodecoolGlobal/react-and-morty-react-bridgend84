import React from "react";
import "./Header.css";
import rNmLogo from "../static/rick-and-morty-logo.png";
import "./Mobile.css"

export default function Header() {
  return (
    <div className="header">
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


