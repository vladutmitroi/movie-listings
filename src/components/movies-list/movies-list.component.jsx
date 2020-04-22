import React from "react";
import { MovieCard } from "../movie-card/movie-card.component";

export const MoviesList = ({ movies, genres, filteredGenres, minRating }) => {
  const setGenreName = (ids) => {
    if (genres.length) {
      let genreNames = ids.map(
        (id) => genres.find((genre) => genre.id === id).name
      );
      return genreNames.sort();
    }
    return [];
  };

  /*
  * first checking the there are selected genres to filter the movies. 
  If there are, we filter the movies list and keep the movies that have the 1. vote_average property at least equal to the min. rating from the Rating filter and 2. the genre id(s) the same as the genres selected in the genre filter
  If there are no selected genres, we filter the movies only by the vote_average property
   */
  console.log(filteredGenres);
  // filteredGenres reset when BACK, but not the checked value
  let moviesList = [];
  if (filteredGenres.length) {
    moviesList = movies.filter((movie) =>
      movie.vote_average >= minRating
        ? filteredGenres.every((filter) => movie.genre_ids.includes(filter))
        : null
    );
  } else {
    moviesList = movies.filter((movie) => movie.vote_average >= minRating);
  }

  return moviesList.length ? (
    moviesList.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        genreName={setGenreName(movie.genre_ids)}
      />
    ))
  ) : (
    <h1 className="movie-container-title">
      No movies to show based on the selected criteria(s)
    </h1>
  );
};
