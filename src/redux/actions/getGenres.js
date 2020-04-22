const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.genres;
};

/* 
fetching the genre list from tMDB`s genres API
dispatching the action type and action payload to be passed to the genresReducer
*/
export const getGenres = (path) => {
  return (dispatch) => {
    dispatch({ type: "GET_GENRES_START" });
    return getData(path)
      .then((response) => {
        dispatch({
          type: "GET_GENRES_SUCCESS",
          payload: response,
        });
      })
      .catch((err) => {
        console.log("error fetching data", err);
        dispatch({
          type: "GET_GENRES_ERROR",
        });
      });
  };
};
