import React from "react";
import "./Characters.css";
import InfiniteScroll from 'react-infinite-scroller';

export default function Characters({ characters, pageSelector }) {
  return (
    <div className="Characters">
      <input
        type="number"
        defaultValue={1}
        min={1}
        max={characters.info.pages}
        onChange={(e) => pageSelector(e.target.value)}
      />
      <div className="character-container">
        {characters.results.map((char) => (
          <div key={char.id} className="character-card">
            <img src={char.image}></img>
            <div>{char.name}</div>
            <div>{char.species}</div>
          </div>
        ))}
      </div>
    </div>
  );
}