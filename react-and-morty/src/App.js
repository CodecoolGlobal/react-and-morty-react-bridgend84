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

  const characters = useCharacters(charPage);
  const locations = useLocations(locPage);

  useEffect(() => {
    if (characters === "Loading...") {
      setIsCharLoaded(false);
    } else {
      setIsCharLoaded(true);
      window.addEventListener("scroll", handleScroll);
    }
  }, [characters]);

  const selected = (p) => {
    setPage(p);
  };

  const charPageSelector = (p) => {
    setCharPage(p);
  };

  const locPageSelector = (p) => {
    setLocPage(p);
  };

  let timer;

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop >=
        e.target.documentElement.scrollHeight &&
      isCharLoaded
    ) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        characters.info.pages > charPage
          ? charPageSelector(charPage + 1)
          : charPageSelector(1);
        console.log(charPage);
      }, 300);
    }
  };

  return (
    <div className="container-app">
      <Header onSelect={selected} />
      {page === 0 ? (
        <LandingPage />
      ) : page === 1 ? (
        <Characters
          characters={characters}
          pageSelector={charPageSelector}
          actualPage={charPage}
        />
      ) : (
        <Locations locations={locations} pageSelector={locPageSelector} />
      )}
    </div>
  );
}

export default App;
