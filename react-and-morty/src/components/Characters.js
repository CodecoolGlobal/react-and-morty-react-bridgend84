import React, { useState, useEffect } from "react";
import "./Characters.css";
import { Flipper, Flipped } from "react-flip-toolkit";

export default function Characters({ characters, pageSelector }) {
  const [focused, setFocused] = useState(null);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    setImgsLoaded(false);

    const loadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => {
          resolve(imageUrl);
        };
        loadImg.onerror = (err) => {
          reject(err);
        };
      });
    };

    Promise.all(characters.results.map((char) => loadImage(char.image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, [characters]);

  const onClick = (index) => {
    focused === index ? setFocused(null) : setFocused(index);
  };

  return (
    <div className="Characters">
      <input
        type="number"
        defaultValue={1}
        min={1}
        max={characters.info.pages}
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
      >
        <div className="character-container">
          {characters.results.map((char) =>
            focused === char.id ? (
              <Flipped flipId={char.id} key={char.id}>
                <div
                  key={char.id}
                  className="character-card-back"
                  onClick={() => onClick(char.id)}
                >
                  <ul className="list-back"></ul>
                  <li>Name: {char.name}</li>
                  <li>Species: {char.species}</li>
                  <li>Gender: {char.gender}</li>
                  <li>Location: {char.location.name}</li>
                  <li>Status: {char.status}</li>
                  <li>Origin: {char.origin.name}</li>
                </div>
              </Flipped>
            ) : (
              <Flipped flipId={char.id} key={char.id}>
                {imgsLoaded ? (
                  <div
                    key={char.id}
                    className="character-card-front"
                    onClick={() => onClick(char.id)}
                  >
                    <img src={char.image}></img>
                    <div className="name-front">{char.name}</div>
                    <div className="species-front">{char.species}</div>
                  </div>
                ) : (
                  <div className="lds-ripple">
                    <div></div>
                    <div></div>
                  </div>
                )}
              </Flipped>
            )
          )}
        </div>
      </Flipper>
    </div>
  );
}
