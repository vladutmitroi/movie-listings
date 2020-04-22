import React from "react";
import "./App.css";

import { MoviesList } from "./components/movies-list/movies-list.component";
import { GenresList } from "./components/genres-list/genres-list.component";
import MovieDetails from "./components/movie-details/movie-details.component";
import { Rating } from "./components/rating/rating.component";
import { Loader } from "./components/loader/loader.component";

import { connect } from "react-redux";
import { getMovies } from "./redux/actions/getMovies";
import { getGenres } from "./redux/actions/getGenres";
import {
  changeGenres,
  changeRating,
  toggleClass,
} from "./redux/actions/filterActions";

import { Route } from "react-router-dom";

const key = "701f846dbfc08d1bb1e9875a4c25096c";
const moviesURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`;

class App extends React.Component {
  componentDidMount() {
    this.props.getMovies(moviesURL);
    this.props.getGenres(genreURL);
  }

  genreSelected = (e) => {
    /* updating the store with the selection of genre(s) to filter the movies with */
    let { filteredGenres } = this.props.filters;
    let genreId = parseInt(e.target.id);
    let index = filteredGenres.indexOf(genreId);
    e.target.checked
      ? filteredGenres.push(genreId)
      : filteredGenres.splice(index, 1);
    return this.props.changeGenres(filteredGenres);
  };

  ratingSelected = (e) => {
    /* Updating the store with the min. rating filter,based on the selection from <select> element */
    this.props.changeRating(e.target.value);
  };

  toggleFilterClass = () => {
    /* adding/removing the 'show' class added to the 'filter' component, used to hide the component on mobile devices */
    const currentState = this.props.filters.toggleClass;
    this.props.toggleClass(!currentState);
  };

  render() {
    const { data, isLoading } = this.props.movies;
    const { list } = this.props.genres;
    const { filteredGenres, minRating, toggleClass } = this.props.filters;

    return (
      <React.Fragment>
        {isLoading && <Loader />}
        <Route exact path="/movie-listings">
          <button onClick={this.toggleFilterClass} className="filter-btn">
            Filter movies<i className="fas fa-filter"></i>
          </button>
          <div
            className={
              toggleClass ? "filter-container show " : "filter-container"
            }
          >
            <h2>Filter by:</h2>
            <div className="genres">
              <h2>Genre</h2>
              {list.sort().map((genre) => (
                <GenresList
                  key={genre.id}
                  id={genre.id}
                  name={genre.name}
                  handleChange={this.genreSelected}
                  checked={filteredGenres.includes(genre.id) ? true : false}
                />
              ))}
            </div>
            <h2>Minimum rating</h2>
            <select
              value={minRating}
              onChange={this.ratingSelected}
              className="rating"
            >
              <Rating />
            </select>
          </div>

          <div className="movie-container">
            <h1 className="page-title">Movie listings</h1>
            <div className="movie">
              <MoviesList
                movies={data}
                genres={list}
                filteredGenres={filteredGenres}
                minRating={minRating}
              />
            </div>
          </div>
        </Route>
        <Route exact path="/movie-listings/:id" component={MovieDetails} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { movies, genres, filters } = state;
  return { movies, genres, filters };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies(moviesURL)),
    getGenres: () => dispatch(getGenres(genreURL)),
    changeGenres: (filteredGenres) => dispatch(changeGenres(filteredGenres)),
    changeRating: (minRating) => dispatch(changeRating(minRating)),
    toggleClass: (showClass) => dispatch(toggleClass(showClass)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
