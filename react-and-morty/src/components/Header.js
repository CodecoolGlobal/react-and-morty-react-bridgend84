import React from "react";
import "./Header.css";
import rNmLogo from "../static/rick-and-morty-logo.png";
import "./Mobile.css"

export default function Header() {
  return (
    <div className="header">
      <div className="container-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" />
      </div>
      <div className="header-buttons">
        <button className="header-characters-button">Characters</button>
        <button className="header-locations-button">Locations</button>
      </div>
    </div>
  );
}


