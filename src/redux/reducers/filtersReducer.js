const initState = {
  filteredGenres: [],
  minRating: 3,
  toggleClass: false,
};

/*
 * the filters modified by the users are passed here from the actions payload, along with the toggleClass flag, which will show/hide the filter-container on mobile devices
 * the data is then passed to the root reducer and then to the store, into App js as props
 */
export const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "FILTERED_GENRES":
      return {
        ...state,
        filteredGenres: action.payload,
      };
    case "FILTERED_RATING":
      return {
        ...state,
        minRating: action.payload,
      };
    case "TOGGLE_CLASS":
      return {
        ...state,
        toggleClass: action.payload,
      };
    default:
      return state;
  }
};
