import React from "react";
import { directors } from "../data";

function Directors() {
  
  const directorMovieList = directors.map(director => {
    return (
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
        {director.movies.map(movie => 
          <li key={director.name}>{movie}</li>)}
      </div>
      )
  })
  
  return (
    <div>
        <h1>Directors Page</h1>
        {directorMovieList}
      </div>
  )

}

export default Directors;
