/*
 * the filters ( genres filter and minimum rating filter) modified by the users are passed as a parameters to the two actions below
 * this selection is then passed to the filter reducer
 */
export const changeGenres = (filteredGenres) => {
  return (dispatch) => {
    dispatch({
      type: "FILTERED_GENRES",
      payload: filteredGenres,
    });
  };
};

export const changeRating = (minRating) => {
  return (dispatch) => {
    dispatch({
      type: "FILTERED_RATING",
      payload: minRating,
    });
  };
};

/*  
the toggleClass action toggles the 'show' class on the filter-container element, to show/hide it on mobile devices
 */
export const toggleClass = (toggleShowClass) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_CLASS",
      payload: toggleShowClass,
    });
  };
};
