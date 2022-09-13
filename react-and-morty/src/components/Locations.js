import React from "react"
import "./Locations.css"

export default function Locations({ locations, pageSelector }) {
    return (
      <div className="Locations">
        <input
          type="number"
          defaultValue={1}
          min={1}
          max={locations.info.pages}
          onChange={(e) => pageSelector(e.target.value)}
        />
        <div className="location-container">
          {locations.results.map((loc) => (
            <div key={loc.id} className="location-card">
              <img src={loc.image}></img>
              <div>{loc.name}</div>
              <div>{loc.type}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }