import React from "react";
import "./Characters.scss";
import cn from "classnames";
import { useState } from "react";

export default function Characters({ characters, pageSelector }) {
    const [showBack, setShowBack] = useState(false); 
    function handleClick() { 
          setShowBack(!showBack); 
        } 
      

  return (
    <div className="Characters">
      <input
        type="number"
        defaultValue={1}
        min={1}
        max={characters.info.pages}
        onChange={(e) => pageSelector(e.target.value)}
      />
      <div className="character-container" onClick={handleClick}>
        <div className={cn("flip-card-inner", {showBack})}>
      <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">
        {characters.results.map((char) => (
          <div key={char.id} className="character-card" >
            <img   src={char.image}></img>
            <div>Name:{char.name}</div>
            <div>Species:{char.species}</div>
            </div>
        ))}
            </p>
            
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">
            {characters.results.map((char) => (
          <div key={char.id} className="character-card">
            <img src={char.image} className="image-back"></img>
            <div>Name:{char.name}</div>
            <div>Gender:{char.gender}</div>
            <div>Status:{char.status}</div>
            </div>
        ))}
            </p>
          </div>
        </div>
        </div>
          </div>
      </div>
      )
}




// import { useState } from "react"; 
// import cn from "classnames";

// function FlipCard({ card }) {
//   const [showBack, setShowBack] = useState(false); 

//   function handleClick() { 
//     if (card.variant === "click") { 
//       setShowBack(!showBack); 
//     } 
//   } 

//   return (
//     <div
//       className="flip-card-outer"
//       onClick={handleClick} 
//     >
//       <div
//         className={cn("flip-card-inner", {
//           showBack, 
//           "hover-trigger": card.variant === "hover"
//         })}
//       >
//         <div className="card front">
//           <div className="card-body d-flex justify-content-center align-items-center">
//             <p className="card-text fs-1 fw-bold">{card.front}</p>
//           </div>
//         </div>
//         <div className="card back">
//           <div className="card-body d-flex justify-content-center align-items-center">
//             <p className="card-text fs-1 fw-bold">{card.back}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FlipCard;