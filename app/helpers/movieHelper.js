import {
  itemsHasErrored,
  itemsIsLoading,
  itemsFetchDataSuccess
} from '../actions';

export const fetchCurrentMovies = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
};

export const postToFavorites = (movieCard) => {
  console.log(movieCard);
  return (dispatch) => {
    fetch('/users/favorites/new', {
      METHOD: 'POST',
      body: Object.assign({}, {movieCard})
    });
  };
};