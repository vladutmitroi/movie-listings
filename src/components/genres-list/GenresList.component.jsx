import React from "react";
import "./genres-list.styles.scss";
import { connect } from "react-redux";
import { changeGenres } from "../../redux/actions/filterActions";
import { GenresItem } from "./GenresItem.component";

export const GenresList = ({
  changeGenres,
  genres,
  filters: { filteredGenres = [] } = {},
}) => {
  const genreSelected = ({ target: { checked, id } }) => {
    const genreId = parseInt(id);
    const index = filteredGenres.indexOf(genreId);
    checked ? filteredGenres.push(genreId) : filteredGenres.splice(index, 1);

    return changeGenres(filteredGenres);
  };

  return (
    <div className="genres">
      <h2>Genre</h2>
      {genres.sort().map((genre, idx) => (
        <GenresItem
          key={`${genre.id}_${idx}`}
          id={genre.id}
          name={genre.name}
          handleChange={genreSelected}
          checked={filteredGenres.includes(genre.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { genres: { list } = {}, filters } = state;
  return { genres: list, filters };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeGenres: (filteredGenres) => dispatch(changeGenres(filteredGenres)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
