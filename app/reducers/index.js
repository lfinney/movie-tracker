import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './movies-reducer';
import { userLoginError, activeUser, userFavArray } from './users-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  activeUser,
  userLoginError,
  userFavArray
});

export default rootReducer;
