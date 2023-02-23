import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieListItems = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <p>Time: {movie.time.toString()}</p>
        <p>Genres: </p>
        {movie.genres.map(genre => 
          <li key={movie.title}>{genre}</li>)}
      </div>
      )
  })
  
  return (
    <div>
        <h1>Movies Page</h1>
        {movieListItems}
      </div>
  )

}

export default Movies;
