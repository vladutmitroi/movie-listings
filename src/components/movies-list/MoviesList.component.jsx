import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MovieCard } from "../movie-card/MovieCard.component";
import { getMovies } from "redux/actions/getMovies";
import { getGenres } from "redux/actions/getGenres";

const MoviesList = ({
  movies,
  genres,
  filters: { filteredGenres = [], minRating } = {},
  getMovies,
  getGenres,
}) => {
  useEffect(() => {
    getMovies();
    getGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setGenreName = (ids) => {
    if (genres.length) {
      let genreNames = ids.map(
        (id) => genres.find((genre) => genre.id === id).name
      );
      return genreNames.sort();
    }
    return [];
  };

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

  return (
    <>
      {!!moviesList.length &&
        moviesList.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            genreName={setGenreName(movie.genre_ids)}
          />
        ))}
      {!moviesList.length && (
        <h1 className="movie-container-title">
          No movies to show based on the selected criteria(s)
        </h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { movies: { data } = {}, genres: { list } = {}, filters } = state;
  return { movies: data, genres: list, filters };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies()),
    getGenres: () => dispatch(getGenres()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
