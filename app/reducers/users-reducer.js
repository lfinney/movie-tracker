export const activeUser = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN_USER':
    return action.user;

  case 'SIGN_OUT_USER':
    return action.user;

  default:
    return state;
  }
};

export const userFavArray = (state = [], action) => {
  switch (action.type) {
  case 'POPULATE_USER_FAVORITES':
    return action.favs;

  case 'CLEAR_USER_FAVORITES':
    return action.favs;

  default:
    return state;
  }
};

export const userLoginError = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN_ERROR':
    return action.loginError;

  case 'LOGIN_RESET':
    return action.loginError;

  default:
    return state;
  }
};

export const dupFav = (state = false, action) => {
  switch (action.type) {
  case 'FAV_ALREADY_EXISTS':
    return action.dupFav;

  case 'HIDE_DUPELICATE_FAV_POPUP':
    return action.dupFav;

  default:
    return state;
  }
};
