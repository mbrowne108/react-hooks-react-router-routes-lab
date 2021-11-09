import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.title}>
            <h3>{movie.title} - {movie.time} Minutes</h3>
            <ul>
              {movie.genres.map(genre => {
                return (
                  <div key={genre}>
                    <li>{genre}</li>
                  </div>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Movies;
