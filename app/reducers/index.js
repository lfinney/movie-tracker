import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './movies-reducer';
import { userLoginError, activeUser, userFavArray, dupFav, loginRequired } from './users-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  activeUser,
  userLoginError,
  userFavArray,
  dupFav,
  loginRequired
});

export default rootReducer;
