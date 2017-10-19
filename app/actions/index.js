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

export const loginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  };
};

export const loginHasErrored = (bool) => {
  return {
    type: 'LOGIN_ERROR',
    loginError: bool
  };
};

export const resetLogin = (bool) => {
  return {
    type: 'LOGIN_RESET',
    loginError: bool
  };
};

export const signUserOut = (user) => {
  return {
    type: 'SIGN_OUT_USER',
    user
  };
};
