import * as actions from '../../actions';

describe('actions', () => {

  it('should return a boolen for when there is an error', () => {
    const errorMock = true;
    const expected = {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: true
    };
    const expectation = actions.itemsHasErrored(errorMock);

    expect(expectation).toEqual(expected);
  });

  it('should return a boolen for when loading', () => {
    const loadMock = true;
    const expected = {
      type: 'ITEMS_IS_LOADING',
      isLoading: true
    };
    const expectation = actions.itemsIsLoading(loadMock);

    expect(expectation).toEqual(expected);
  });

  it('should create an action to fetch movie data', () => {
    const moviesObject = {
      results: [
        { title: 'It',
          popularity: 837.5},
        { title: 'Blade Runner 2049',
          popularity: 454.1}
      ]
    };
    const expected = {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      items: {
        results: [
          { title: 'It',
            popularity: 837.5},
          { title: 'Blade Runner 2049',
            popularity: 454.1}
        ]
      }
    };
    const expectation = actions.itemsFetchDataSuccess(moviesObject);

    expect(expectation).toEqual(expected);
  });

  it('should create an action to login a user', () => {
    const userObject = { email: 'gizmo@corgis.io', password: 'stumper4lyfe' };
    const expected = {
      type: 'LOGIN_USER',
      user: { email: 'gizmo@corgis.io', password: 'stumper4lyfe' }
    };
    const expectation = actions.loginUser(userObject);

    expect(expectation).toEqual(expected);
  });

  it('should return a boolen when a login error occurs', () => {
    const errorMock = true;
    const expected = {
      type: 'LOGIN_ERROR',
      loginError: true
    };
    const expectation = actions.loginHasErrored(errorMock);

    expect(expectation).toEqual(expected);
  });

  it('should return a boolen when the login resets', () => {
    const resetMock = false;
    const expected = {
      type: 'LOGIN_RESET',
      loginError: false
    };
    const expectation = actions.resetLogin(resetMock);

    expect(expectation).toEqual(expected);
  });

  it('should sign a user out', () => {
    const userMock = {};
    const expected = {
      type: 'SIGN_OUT_USER',
      user: {}
    };
    const expectation = actions.signUserOut(userMock);

    expect(expectation).toEqual(expected);
  });
});
