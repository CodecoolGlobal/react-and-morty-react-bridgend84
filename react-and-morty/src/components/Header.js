import React from "react";
import "./Header.css";
import rNmLogo from "../static/rick-and-morty-logo.png";

export default function Header() {
  return (
    <div className="container-header">
      <img src={rNmLogo} />
    </div>
  );
}
