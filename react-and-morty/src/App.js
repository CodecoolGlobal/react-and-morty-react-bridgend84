import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { useCharacters, useLocations } from "./api/useData";

function App() {
  const [isCharLoaded, setIsCharLoaded] = useState(false);

  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  useEffect(() => {
    characters === "Loading..."
      ? setIsCharLoaded(false)
      : setIsCharLoaded(true);
  });

  return (
    <div className="container-app">
      <Header />
      {isCharLoaded ? characters.results.map(char => (<p>{char.name}</p>)) : (<p>Loading...</p>)}
    </div>
  );
}

export default App;
