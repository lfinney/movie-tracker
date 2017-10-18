import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './get-current-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});

export default rootReducer;
