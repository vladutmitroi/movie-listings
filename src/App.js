import React from "react";
import "./App.css";
import { connect } from "react-redux";
import MoviesList from "./components/movies-list/MoviesList.component";
import MovieDetails from "./components/movie-details/MovieDetails.component";
import { Loader } from "./components/loader/Loader.component";
import { Filters } from "./components/filters/Filters.component";

import {
  changeGenres,
  changeRating,
  toggleClass,
} from "redux/actions/filterActions";

import { Route } from "react-router-dom";

const App = ({
  toggleShowClass,
  movies: { isLoading } = {},
  filters: { toggleClass } = {},
}) => {
  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <Route exact path="/movie-listings">
        <button
          onClick={() => toggleShowClass(!toggleClass)}
          className="filter-btn"
        >
          Filter movies<i className="fas fa-filter"></i>
        </button>
        <Filters toggleClass={toggleClass} />
        <div className="movie-container">
          <h1 className="page-title">Movie listings</h1>
          <div className="movie">
            <MoviesList />
          </div>
        </div>
      </Route>
      <Route exact path="/movie-listings/:id" component={MovieDetails} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { movies, filters } = state;
  return { movies, filters };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeGenres: (filteredGenres) => dispatch(changeGenres(filteredGenres)),
    changeRating: (minRating) => dispatch(changeRating(minRating)),
    toggleShowClass: (showClass) => dispatch(toggleClass(showClass)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
