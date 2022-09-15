import React from "react";
import "./Locations.css";
import { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

export default function Locations({ locations, pageSelector }) {
  const [focused, setFocused] = useState(null);

  const onClick = (index) =>{
    focused === index ? setFocused(null) : setFocused(index);
  };

  return (
    <div className="Locations">
      <input
        type="number"
        defaultValue={1}
        min={1}
        max={locations.info.pages}
        onChange={(e) => pageSelector(e.target.value)}
      />
       <Flipper
        flipKey={focused}
        spring="super gentle"
        staggerConfig={{
          card: {
            reverse: focused !== null,
          },
        }}
        decisionData={focused}
        transformOrigin="300 300"
      >
          <div className="character-container">
            {locations.results.map((loc) =>
              focused === loc.id ? (
                <Flipped flipId={loc.id} key={loc.id}>
                  <div
                    key={loc.id}
                    className="character-card-back"
                    onClick={() => onClick(loc.id)}
                  >
                    <ul className="list-back"></ul>
                    <li>Name: {loc.name}</li>
                    <li>Type: {loc.type}</li>
                    <li>Dimension: {loc.dimension}</li>
                  </div>
                </Flipped>
              ) : (
                <Flipped flipId={loc.id} key={loc.id}>
                  <div
                  key={loc.id}
                    className="character-card-front"
                    onClick={() => onClick(loc.id)}
                  >
                    <ul className="list-front">
                    <li className="name-front">{loc.name}</li>
                    </ul>
                  </div>
                </Flipped>
              )
            )}
          </div>
      </Flipper>
    </div>
  );
}
