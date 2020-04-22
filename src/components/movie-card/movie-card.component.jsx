import React from "react";
import "./movies.styles.scss";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, genreName }) => {
  return (
    <div className="movie-card">
      <Link to={"/movie-listings/" + movie.id}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="poster"
        />
        <h3 className="movie-card-title">
          {movie.title}
          <span className="movie-card-genre">{genreName + " "}</span>
          <span className="movie-card-rating">
            <sub className="far fa-star"></sub>
            {" " + movie.vote_average}
            <sub>/10</sub>
          </span>
        </h3>
      </Link>
    </div>
  );
};
