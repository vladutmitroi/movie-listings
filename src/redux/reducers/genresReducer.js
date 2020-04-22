const initState = {
  list: [],
  isLoading: true,
  genresFilter: [],
};

/*
 * the data is fetched from the getGenres action
 * similary to the movies list data, the genres list will be passed to the root reducer and to the store, into App.js as props
 * the isLoading flag is set to false, so the spinner element from the Loader component will not be shown anymore
 */
export const genresReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_GENRES_START":
      return state;
    case "GET_GENRES_SUCCESS":
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case "GET_GENRES_ERROR":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
