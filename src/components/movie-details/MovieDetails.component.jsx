import React from "react";
import "./movie-details.styles.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MovieDetails = ({
  movie,
  movie: {
    overview,
    release_date,
    genreName,
    backdrop_path,
    genre_ids,
    original_title,
    vote_average,
  } = {},
  genres = [],
}) => {
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
    genreName = setGenreName(genre_ids);
    return (
      <div className="movie-details">
        <img
          className="movie-details-poster"
          src={"https://image.tmdb.org/t/p/w500/" + backdrop_path}
          alt="poster"
        />
        <div className="movie-details-content">
          <h2>{original_title}</h2>
          <h4>
            Average rating : {vote_average}
            <span>/10</span>
          </h4>
          <p>Genre: {genreName + " "} </p>
          <p>Release date: {release_date}</p>
          <p>{overview}</p>
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
  const { genres: { list } = {}, movies = {} } = state;
  const movie = movies.data.find((movie) => movie.id === id);

  return { movie, genres: list };
};

export default connect(mapStateToProps)(MovieDetails);
