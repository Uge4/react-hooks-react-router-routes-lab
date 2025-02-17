import React from "react";
import { actors } from "../data";

function Actors() {
  
  const actorMovieList = actors.map(actor => {
    return (
      <div key={actor.name}>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
        {actor.movies.map(movie => 
          <li key={movie.title}>{movie}</li>)}
        
      </div>
      )
  })
  
  return (
    <div>
        <h1>Actors Page</h1>
        {actorMovieList}
      </div>
  )

}

export default Actors;
