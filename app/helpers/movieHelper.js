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

export const postToFavorites = (movieCard, userId) => {
  return (dispatch) => {
    fetch('api/users/favorites/new/', {
      method: 'POST',
      body: JSON.stringify(Object.assign({}, movieCard, {user_id: userId})),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(resJson => console.log(resJson))
  };
};

export const fetchFavorites = (userId) => {
  return (dispatch) => {
    fetch(`api/users/${userId}/favorites/`)
    .then(res => res.json())
    .then(favs => console.log(favs))
  }
}
