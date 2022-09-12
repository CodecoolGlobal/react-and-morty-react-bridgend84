import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useCharacters, useLocations } from "./api/useData";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
    <div className="App">
      <Header />
      <h3>Take a look at the console! (F12)</h3>
    </div>
  );
}

export default App;
