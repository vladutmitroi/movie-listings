import React from "react";
import { connect } from "react-redux";
import { changeRating } from "redux/actions/filterActions";
import { Rating } from "./Rating.component";

const RatingFilter = ({ minRating, changeRating }) => {
  const ratingSelected = (e) => {
    changeRating(e.target.value);
  };

  return (
    <>
      <h2>Minimum rating</h2>
      <select value={minRating} onChange={ratingSelected} className="rating">
        <Rating />
      </select>
    </>
  );
};

const mapStateToProps = (state) => {
  const { filters: { minRating } = {} } = state;
  return { minRating };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeRating: (minRating) => dispatch(changeRating(minRating)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingFilter);
