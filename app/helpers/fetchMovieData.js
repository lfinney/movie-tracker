import apiKeys from '../apiKeys';
import { itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess } from '../actions';

const fetchCurrentMovies = (url) => {
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

module.exports = { fetchCurrentMovies };
