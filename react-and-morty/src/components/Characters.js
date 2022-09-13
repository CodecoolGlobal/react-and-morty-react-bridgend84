import React from "react"
import "./Characters.css"

{isCharLoaded ? characters.results.map(char => (<p>{char.name}</p>)) : (<p>Loading...</p>)}