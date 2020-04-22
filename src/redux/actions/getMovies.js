const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

/* 
fetching data from tMDB`s 'now-showing' movies API
dispatching the action type and action payload to be passed to the moviesReducer
*/
export const getMovies = (path) => {
  return (dispatch) => {
    dispatch({ type: "GET_MOVIES_START" });
    return getData(path)
      .then((response) => {
        dispatch({
          type: "GET_MOVIES_SUCCESS",
          payload: response,
        });
      })
      .catch((err) => {
        console.log("error fetching data", err);
        dispatch({
          type: "GET_MOVIES_ERROR",
        });
      });
  };
};
