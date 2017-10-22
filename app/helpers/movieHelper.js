import {
  itemsHasErrored,
  itemsIsLoading,
  itemsFetchDataSuccess,
  populateFavArray
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

export const postToFavorites = (movieCard, userId, userArray) => {
  
  if (userArray.find( movie => movie.movie_id === movieCard.movie_id)) {
    alert('You have already faved that dude');
  } else {
    return (dispatch) => {
      fetch('api/users/favorites/new/', {
        method: 'POST',
        body: JSON.stringify(Object.assign({}, movieCard, {user_id: userId})),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(dispatch(fetchFavorites(userId)))
 
    }
  }
};

export const fetchFavorites = (userId) => {
  return (dispatch) => {
    fetch(`api/users/${userId}/favorites/`)
      .then(res => res.json())
      .then(favs => dispatch(populateFavArray(favs.data)));
  };
};
