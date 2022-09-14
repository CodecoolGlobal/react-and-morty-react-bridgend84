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
  const [charPage, setCharPage] = useState(1);
  const [locPage, setLocPage] = useState(1);
  const [scrolledDown, setScrolledDown] = useState(false);

  let characters = useCharacters(charPage);
  let locations = useLocations(locPage);

  // console.log("Characters data: ");
  // console.log(characters);
  // console.log("Locations data: ");
  // console.log(locations);

  useEffect(() => {
    characters === "Loading..."
      ? setIsCharLoaded(false)
      : setIsCharLoaded(true);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const selected = (p) => {
    setPage(p);
  };

  const charPageSelector = (p) => {
    setCharPage(p);
  };

  const locPageSelector = (p) => {
    setLocPage(p);
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop >=
      e.target.documentElement.scrollHeight
    ) {
      setScrolledDown(true)
    }
  };

  return (
    <div className="container-app">
      <Header onSelect={selected} />
      {page === 0 ? (
        <LandingPage />
      ) : page === 1 ? (
        <Characters characters={characters} pageSelector={charPageSelector} />
      ) : (
        <Locations locations={locations} pageSelector={locPageSelector} />
      )}
    </div>
  );
}

export default App;
