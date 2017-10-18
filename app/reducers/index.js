import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './movies-reducer';
import { checkForUser, addNewUser } from './users-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});

export default rootReducer;
