export const itemsHasErrored = (bool) => {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
};

export const itemsIsLoading = (bool) => {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
};

export const itemsFetchDataSuccess = (items) => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
};

// export const addNewUser = (user) => {
//   return {
//     type: 'POST_NEW_USER',
//     user
//   };
// };

export const loginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  };
};
