import * as movieReducer from '../../reducers/movies-reducer';
import * as actions from '../../actions';

describe('movies reducer', () => {
  it('should return our initial state', () => {
    const expectation = false;

    expect(movieReducer.itemsHasErrored(undefined, {})).toEqual(expectation);
  });

  it('should return true if an item errors', () => {
    const action = { type: 'ITEMS_HAS_ERRORED',
      hasErrored: true };
    const expectation = action.hasErrored;

    expect(movieReducer.itemsHasErrored(undefined,
      action)).toEqual(expectation);
  });

  it('should return true if an item is loading', () => {
    const action = { type: 'ITEMS_IS_LOADING',
      isLoading: true };
    const expectation = action.isLoading;

    expect(movieReducer.itemsIsLoading(undefined, action)).toEqual(expectation);
  });

  it('should return true if an item is loading', () => {
    const action = { type: 'ITEMS_FETCH_DATA_SUCCESS',
      items: {
        title: 'BladeRunner 2049' }
    };
    const expectation = action.items;

    expect(movieReducer.items(undefined, action)).toEqual(expectation);
  });
});
