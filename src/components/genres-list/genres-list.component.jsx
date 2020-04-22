import React from "react";
import "./genres-list.styles.scss";

export const GenresList = ({ checked, name, id, handleChange }) => {
  return (
    <span className="genre-element">
      <input
        defaultChecked={checked}
        type="checkbox"
        id={id}
        value={name}
        onChange={handleChange}
      />
      <label htmlFor={id}>{name}</label>
    </span>
  );
};
