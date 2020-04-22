import React from "react";
import "./movie-details.styles.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  const movie = props.movie[0];
  const genres = props.genres.list;

  const setGenreName = (ids) => {
    if (genres.length) {
      let genreNames = ids.map(
        (id) => genres.find((genre) => genre.id === id).name
      );
      return genreNames.sort();
    }
    return [];
  };

  if (movie) {
    // setting the genre name for each movie, based on its id(s)
    movie.genreName = setGenreName(movie.genre_ids);
    return (
      <div className="movie-details">
        <img
          className="movie-details-poster"
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          alt="poster"
        />
        <div className="movie-details-content">
          <h2>{movie.original_title}</h2>
          <h4>
            Average rating : {movie.vote_average}
            <span>/10</span>
          </h4>
          <p>Genre: {movie.genreName + " "} </p>
          <p>Release date: {movie.release_date}</p>
          <p>{movie.overview}</p>
          <Link to="/movie-listings">
            <i className="fas fa-arrow-left"></i>Back to movie listings
          </Link>
        </div>
      </div>
    );
  } else {
    return <p>No details to show</p>;
  }
};

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id);
  const { genres } = state;
  // passing to the movie prop only the selected movie, to show only its details
  const movie = state.movies.data.filter((movie) => {
    return movie.id === id;
  });

  return { movie, genres };
};

export default connect(mapStateToProps)(MovieDetails);
