import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { useCharacters, useLocations } from "./api/useData";
import LandingPage from "./components/LandingPage";
import Characters from "./components/Characters";
import Locations from "./components/Locations";

function App() {
  const [isCharLoaded, setIsCharLoaded] = useState(false);
  const [page, setPage] = useState(0);

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
      <Header whichClicked={(clicked) => setPage(clicked)}/>
      {page === 0 ? (
        <LandingPage />
      ) : page === 1 ? (
        <Characters characters={characters.results}/>
      ) : (
        <Locations locations={locations.results}/>
      )}
    </div>
  );
}

export default App;
