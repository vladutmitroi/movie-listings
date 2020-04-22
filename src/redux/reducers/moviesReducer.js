const initState = {
  data: [],
  isLoading: true,
};

/*
 * the data is fetched from the getMovies action
 * based on the action type received, we update the state, including the isLoading flag, to remove the spinner
 * the movies list data, sorted by the movies popularity, will be passed to the root reducer
 * from the root reducer, the data is passed to the store and into the App.js props
 */

export const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIES_START":
      return state;
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        data: action.payload.sort((a, b) => b.popularity - a.popularity),
        isLoading: false,
      };
    case "GET_MOVIES_ERROR":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
