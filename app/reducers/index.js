import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './movies-reducer';
import { addNewUser, activeUser } from './users-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  // addNewUser,
  activeUser
});

export default rootReducer;
