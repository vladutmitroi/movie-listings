import React from "react";

export const GenresItem = ({ checked, name, id, handleChange }) => {
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
