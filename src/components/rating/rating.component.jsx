import React from "react";
import "./rating.styles.scss";

export const Rating = () => {
  const ratings = [];
  let i = 0;
  for (i; i <= 10; i += 0.5) {
    ratings.push(i);
  }
  const votes = ratings.map(rating => (
    <option key={rating} value={rating}>
      {rating}
    </option>
  ));
  return votes;
};
