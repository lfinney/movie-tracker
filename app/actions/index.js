export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function checkForUser(user) {
  return {
    type: 'VALIDATE_USER_STATUS',
    user
  };
}

export function addNewUser(user) {
  return {
    type: 'POST_NEW_USER',
    user
  };
}
