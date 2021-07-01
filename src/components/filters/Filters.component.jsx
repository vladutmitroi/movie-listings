import React from "react";
import GenresList from "../genres-list/GenresList.component";
import RatingFilter from "../rating/Rating.filter.component";

export const Filters = ({ toggleClass }) => {
  return (
    <div className={`filter-container ${toggleClass ? "show " : ""}`}>
      <h2>Filter by:</h2>
      <GenresList />
      <RatingFilter />
    </div>
  );
};
